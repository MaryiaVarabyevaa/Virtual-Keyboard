/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
import "./sass/style.scss";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.prepend(wrapper);

const wrapperKeys = document.createElement("div");
wrapperKeys.classList.add("wrapper-keys");
const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
textarea.autofocus = true;
wrapper.append(textarea, wrapperKeys);

let arrKeys = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift", "Control", "Alt", " ", "Alt", "Control", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"];
let arrKeysRu = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."];
let arrKeysEn = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

function createKeys() {
  let arrowsBox = document.createElement("div");
  arrowsBox.classList.add("box-of-arrows");
  for (let i = 0; i < arrKeys.length; i += 1) {
    let key = document.createElement("div");
    key.classList.add("key");
    key.setAttribute("data-key", arrKeys[i]);
    key.innerHTML = arrKeys[i].toUpperCase();
    if (arrKeys[i] === "`") {
      key.classList.add("key-upper-comma", "letter");
    } else if (arrKeys[i] === "Backspace") {
      key.innerHTML = arrKeys[i];
      key.classList.add("backspace");
    } else if (arrKeys[i] === "Tab") {
      key.classList.add("tab");
      key.innerHTML = arrKeys[i];
    } else if (arrKeys[i] === "\\") {
      key.classList.add("backslash");
    } else if (arrKeys[i] === "CapsLock") {
      key.classList.add("capslock");
      key.innerHTML = "caps lock";
    } else if (arrKeys[i] === "Enter") {
      key.innerHTML = arrKeys[i];
      key.classList.add("enter");
    } else if (arrKeys[i] === "Shift") {
      key.innerHTML = arrKeys[i];
      key.classList.add("shift");
    } else if (arrKeys[i] === "Control") {
      key.classList.add("ctrl");
      key.innerHTML = "ctrl";
    } else if (arrKeys[i] === "Alt") {
      key.classList.add("alt");
      key.innerHTML = "alt";
    } else if (arrKeys[i] === " ") {
      key.classList.add("whitespace");
    } else if (arrKeys[i] === "ArrowLeft") {
      key.innerHTML = "<";
      key.classList.add("arr-left");
      arrowsBox.append(key);
      wrapperKeys.append(arrowsBox);
      continue;
    } else if (arrKeys[i] === "ArrowUp") {
      key.innerHTML = "˄";
      key.classList.add("arr-up");
      arrowsBox.append(key);
      wrapperKeys.append(arrowsBox);
      continue;
    } else if (arrKeys[i] === "ArrowDown") {
      key.innerHTML = "˅";
      key.classList.add("arr-down");
      arrowsBox.append(key);
      wrapperKeys.append(arrowsBox);
      continue;
    } else if (arrKeys[i] === "ArrowRight") {
      key.innerHTML = ">";
      key.classList.add("arr-right");
      arrowsBox.append(key);
      wrapperKeys.append(arrowsBox);
      continue;
    } else {
      key.classList.add("letter");
    }
    wrapperKeys.append(key);
  }
}
createKeys();

let keys = document.querySelectorAll(".key");
let ctrlBtns = document.querySelectorAll(".ctrl");
let altBtns = document.querySelectorAll(".alt");
const shiftBtns = document.querySelectorAll(".shift");
let letters = document.querySelectorAll(".letter");

function changeLetters() {
  let arr;
  if (letters[0].innerHTML === "`") arr = arrKeysRu;
  else if (letters[0].innerHTML === "Ё") arr = arrKeysEn;
  for (let i = 0; i < letters.length; i++) {
    letters[i].innerHTML = arr[i].toUpperCase();
    letters[i].setAttribute("data-key", arr[i]);
  }
}

let flag = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "AltLeft") flag += 1;
  if (e.code === "ShiftLeft" && flag !== 0) changeLetters();
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].dataset.key === e.key && e.code === "ControlLeft") {
      ctrlBtns[0].classList.add("active");
    } else if (keys[i].dataset.key === e.key && e.code === "ControlRight") {
      ctrlBtns[1].classList.add("active");
    } else if (keys[i].dataset.key === e.key && e.code === "AltLeft") {
      altBtns[0].classList.add("active");
    } else if (keys[i].dataset.key === e.key && e.code === "AltRight") {
      altBtns[1].classList.add("active");
    } else if (keys[i].dataset.key === e.key && e.code === "ShiftLeft") {
      shiftBtns[0].classList.add("active");
    } else if (keys[i].dataset.key === e.key && e.code === "ShiftRight") {
      shiftBtns[1].classList.add("active");
    } else if (keys[i].dataset.key === e.key && e.code === "CapsLock") {
      keys[i].classList.toggle("active");
    } else if (keys[i].dataset.key === e.key || keys[i].dataset.key.toUpperCase() === e.key) {
      keys[i].classList.add("active");
    }
  }
});

document.addEventListener("keyup", (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].dataset.key === e.key && e.code === "CapsLock") {
      continue;
    } else if (keys[i].dataset.key === e.key && e.code === "AltLeft") {
      keys[i].classList.remove("active");
      flag = 0;
    } else if (keys[i].dataset.key === e.key || keys[i].dataset.key.toUpperCase() === e.key) {
      keys[i].classList.remove("active");
    }
  }
});

const capBtn = document.querySelector(".capslock");

wrapperKeys.addEventListener("click", (e) => {
  if (e.target.dataset.key === "Tab") {
    textarea.value += "\t";
  } else if (e.target.dataset.key === "Enter") {
    textarea.value += "\n";
  } else if (e.target.dataset.key === "Backspace") {
    textarea.setRangeText("", textarea.selectionStart > 0 ? textarea.selectionStart - 1 : 0, textarea.selectionEnd, "end");
  } else if (e.target.dataset.key === "Shift" || e.target.dataset.key === "Alt" || e.target.dataset.key === "Control") {
    textarea.value += "";
    if (e.target.dataset.key === "Alt") {
      flag += 1;
      e.target.classList.toggle("active");
    }
    if (e.target.dataset.key === "Shift" && flag !== 0) {
      e.target.classList.add("active");
      changeLetters();
      flag = 0;
      e.target.classList.remove("active");
      altBtns[0].classList.remove("active");
    }
  } else if (e.target.dataset.key === "CapsLock") {
    e.target.classList.toggle("active");
  } else if (e.target.dataset.key === "ArrowLeft") {
    textarea.value += "←";
  } else if (e.target.dataset.key === "ArrowUp") {
    textarea.value += "↑";
  } else if (e.target.dataset.key === "ArrowDown") {
    textarea.value += "↓";
  } else if (e.target.dataset.key === "ArrowRight") {
    textarea.value += "→";
  } else {
    // eslint-disable-next-line no-lonely-if
    if (capBtn.classList.contains("active")) {
      textarea.value += e.target.dataset.key.toUpperCase();
    } else {
      textarea.value += e.target.dataset.key;
    }
  }
});
