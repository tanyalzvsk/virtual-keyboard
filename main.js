
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
operationSystem.textContent = "The task is made using Mac."
language.textContent = "To use another language use combination 'ctrl + space'."

mainContainer.classList.add('main-container');
projectTitle.classList.add('main-container__title');
textArea.classList.add('main-container__textarea');
keyboard.classList.add('main-container__keyboard');
operationSystem.classList.add('main-container__system');
language.classList.add('main-container__language');