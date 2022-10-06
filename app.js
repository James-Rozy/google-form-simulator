const createFormElement = (moduleName = "") => {
  // General form elements
  const element = document.createElement("div");
  const elementHeader = document.createElement("div");
  const title = document.createElement("h2");
  const deleteBtn = document.createElement("button");
  const requirementLabel = document.createElement("input");
  const requirementDescription = document.createElement("input");
  const helpText = document.createElement("input");

  element.classList.add("form-element");
  elementHeader.classList.add("element-header");
  title.classList.add("element-title");
  deleteBtn.classList.add("btn-delete-element");
  requirementLabel.classList.add("text-input");
  requirementDescription.classList.add("text-input");
  helpText.classList.add("text-input");

  requirementLabel.type = "text";
  requirementDescription.type = "text";
  helpText.type = "text";

  title.textContent = moduleName;
  deleteBtn.textContent = "Delete";
  requirementLabel.placeholder = `Add the ${moduleName.toLocaleLowerCase()} requirement label...`;
  requirementDescription.placeholder = `Add the ${moduleName.toLocaleLowerCase()} requirement description...`;
  helpText.placeholder = `Add help text here...`;

  deleteBtn.addEventListener("click", () => {
    while (element.firstChild) element.removeChild(element.firstChild);
    element.remove();
  });

  elementHeader.appendChild(title);
  elementHeader.appendChild(deleteBtn);
  element.appendChild(elementHeader);
  element.appendChild(requirementLabel);
  element.appendChild(requirementDescription);
  element.appendChild(helpText);

  return element;
};

const createUploadModule = () => {
  const element = createFormElement("Upload");

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");

  const inputLabel = document.createElement("label");
  inputLabel.textContent = "Add supporting documents here: ";

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.classList.add("file-input");

  inputDiv.appendChild(inputLabel);
  inputDiv.appendChild(fileInput);
  element.appendChild(inputDiv);

  return element;
};

const createHoursModule = () => {
  const element = createFormElement("Hours");

  return element;
};

const createTrainingModule = () => {
  const element = createFormElement("Training");

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");
  const inputLabel = document.createElement("label");
  inputLabel.textContent = "Select the training(s) you have completed...";
  const selectInput = document.createElement("select");
  selectInput.multiple = "true";
  selectInput.classList.add("training-dropdown");
  const selectOptions = [
    "",
    "Google Cloud Platform",
    "Amazon Web Services",
    "Azure Cloud",
  ];
  selectOptions.forEach((option) => {
    const selectOption = document.createElement("option");
    selectOption.textContent = option;
    selectInput.appendChild(selectOption);
  });

  inputDiv.appendChild(inputLabel);
  inputDiv.appendChild(selectInput);
  element.appendChild(inputDiv);

  return element;
};

const addModuleSidebar = () => {
  const formElementList = document.querySelector("#form-element-list");
  const btnAdd = document.getElementById("btn-add-element");
  const btnAddUploadMod = document.getElementById("btn-add-upload");
  const btnAddHoursMod = document.getElementById("btn-add-hours");
  const btnAddTrainingRefMod = document.getElementById("btn-add-training-ref");

  // tracking
  const count = 0;

  btnAdd.addEventListener("click", () => {
    const newElement = createFormElement();
    formElementList.appendChild(newElement);
  });

  btnAddUploadMod.addEventListener("click", () => {
    const newUploadModule = createUploadModule();
    formElementList.appendChild(newUploadModule);
  });

  btnAddHoursMod.addEventListener("click", () => {
    const newHoursModule = createHoursModule();
    formElementList.appendChild(newHoursModule);
  });

  btnAddTrainingRefMod.addEventListener("click", () => {
    const newTrainingModule = createTrainingModule();
    formElementList.appendChild(newTrainingModule);
  });
};

const displayFormElements = () => {
  const formElementList = document.querySelector("#form-element-list");

  // Remove old elements from the list before updating
  while (formElementList.firstChild) {
    formElementList.removeChild(formElementList.firstChild);
  }
};

(() => {
  info = JSON.parse(localStorage.getItem("info")) || [];

  const formTitle = document.getElementById("form-title");
  const formDescription = document.getElementById("form-description");

  const formTitleStorage = localStorage.getItem("formTitle") || "Form Title";
  formTitle.setAttribute("value", formTitleStorage);
  formTitle.addEventListener("change", (e) => {
    localStorage.setItem("formTitle", e.target.value);
  });

  const formDescriptionStorage =
    localStorage.getItem("formDescription") || "Description";
  formDescription.setAttribute("value", formDescriptionStorage);
  formDescription.addEventListener("change", (e) => {
    localStorage.setItem("formDescription", e.target.value);
  });

  // Sidebar controls for adding elements to the form elements list
  addModuleSidebar();
})();
