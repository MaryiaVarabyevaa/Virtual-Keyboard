import "./sass/style.scss";

// let arr = [];

// document.onkeyup = function(e) {
//   arr.push(e.key);
//   console.log(arr);
// };

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.prepend(wrapper);

let arrKeys = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift", "Control", "Meta", "Alt", " ", "Alt", "Control", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"];

function createKeys() {
  for (let i = 0; i < arrKeys.length; i += 1) {
    let key = document.createElement("div");
    key.classList.add("key");
    key.setAttribute("data-key", arrKeys[i]);
    key.innerHTML = arrKeys[i];
    wrapper.append(key);
  }
}

createKeys();
