const mainContainer = document.createElement("div");
const projectTitle = document.createElement("p");
const textArea = document.createElement("textarea");
const keyboard = document.createElement("div");
const operationSystem = document.createElement("p");
const language = document.createElement("p");

document.body.appendChild(mainContainer);
mainContainer.appendChild(projectTitle);
mainContainer.appendChild(textArea);
mainContainer.appendChild(keyboard);
mainContainer.appendChild(operationSystem);
mainContainer.appendChild(language);

projectTitle.textContent = "Virtual keyboard for RSS";
operationSystem.textContent = "The task is made using Mac.";
language.textContent = "To use another language use combination 'ctrl + space'.";

mainContainer.classList.add('main-container');
projectTitle.classList.add('main-container__title');
textArea.classList.add('main-container__textarea');
keyboard.classList.add('main-container__keyboard');
operationSystem.classList.add('main-container__system');
language.classList.add('main-container__language');


const codeArr1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const symbolArr1E = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];


const codeArr2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const symbolArr2E = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];


const codeArr3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const symbolArr3E = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];


const codeArr4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'];
const symbolArr4E = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'];


const codeArr5 = ['CtrlLeft', 'OptLeft', 'CmdLeft', 'Space', 'CmdRight', 'OptRight', 'CtrlRight'];
const symbolArr5E = ['Ctrl', 'Opt', 'Cmd', ' ', 'Cmd', 'Opt', 'Ctrl'];

const symbolArr1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const symbolArr2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'];
const symbolArr3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
const symbolArr4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift'];


const symbolArr1Ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const ArrOfCapsKeysRus1 = ['Ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];

const symbolArr2Ru = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'];
const ArrOfCapsKeysRus2 = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', '{', '}', '|'];

const symbolArr3Ru = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const ArrOfCapsKeysRus3 = ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];

const symbolArr4Ru = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift'];
const ArrOfCapsKeysRus4 = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'Shift'];


function createButton(elementCodeClass, elementKey) {
  const buttonElement = document.createElement("button");
  const buttonSymbol = document.createTextNode(`${elementKey}`);

  keyboard.appendChild(buttonElement);
  buttonElement.appendChild(buttonSymbol);
  buttonElement.classList.add(elementCodeClass);
  buttonElement.classList.add("key");

}

function createKeyboard(codeArr, symbolArr) {
    for (let i = 0; i < codeArr.length; i++) {
        createButton(codeArr[i], symbolArr[i]);
      }
}

function createEngKeyboard() {
    createKeyboard(codeArr1, symbolArr1E);
    createKeyboard(codeArr2, symbolArr2E);
    createKeyboard(codeArr3, symbolArr3E);
    createKeyboard(codeArr4, symbolArr4E);
    createKeyboard(codeArr5, symbolArr5E);
  }

createEngKeyboard();