const createFormElement = () => {
  // General form elements
  const element = document.createElement("div");
  const elementHeader = document.createElement("div");
  const title = document.createElement("input");
  const controlsDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const description = document.createElement("input");

  element.classList.add("form-element");
  elementHeader.classList.add("element-header");
  title.classList.add("element-title");
  controlsDiv.classList.add("element-controls");
  deleteBtn.classList.add("btn-delete-element");
  description.classList.add("element-description");

  title.type = "text";
  title.placeholder = "Element Title";
  deleteBtn.textContent = "Delete";
  description.type = "text";
  description.placeholder = "Description";

  deleteBtn.addEventListener("click", () => {
    while (element.firstChild) element.removeChild(element.firstChild);
    element.remove();
  });

  // Element inputs
  const textInput = document.createElement("input");
  textInput.classList.add("text-input");
  textInput.type = "text";
  textInput.placeholder = "Input some text";

  controlsDiv.appendChild(deleteBtn);
  elementHeader.appendChild(title);
  elementHeader.appendChild(controlsDiv);
  element.appendChild(elementHeader);
  element.appendChild(description);
  element.appendChild(textInput);

  return element;
};

const createUploadModule = () => {
  // General form elements
  const element = document.createElement("div");
  const elementHeader = document.createElement("div");
  const title = document.createElement("input");
  const controlsDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const description = document.createElement("input");

  element.classList.add("form-element");
  elementHeader.classList.add("element-header");
  title.classList.add("element-title");
  controlsDiv.classList.add("element-controls");
  deleteBtn.classList.add("btn-delete-element");
  description.classList.add("element-description");

  title.type = "text";
  title.placeholder = "Upload";
  deleteBtn.textContent = "Delete";
  description.type = "text";
  description.placeholder = "Description";

  deleteBtn.addEventListener("click", () => {
    while (element.firstChild) element.removeChild(element.firstChild);
    element.remove();
  });

  // Element inputs
  const fileInput = document.createElement("input");
  fileInput.type = "file";

  controlsDiv.appendChild(deleteBtn);
  elementHeader.appendChild(title);
  elementHeader.appendChild(controlsDiv);
  element.appendChild(elementHeader);
  element.appendChild(description);
  element.appendChild(fileInput);

  return element;
};

const createHoursModule = () => {
  // General form elements
  const element = document.createElement("div");
  const elementHeader = document.createElement("div");
  const title = document.createElement("input");
  const controlsDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const description = document.createElement("input");

  element.classList.add("form-element");
  elementHeader.classList.add("element-header");
  title.classList.add("element-title");
  controlsDiv.classList.add("element-controls");
  deleteBtn.classList.add("btn-delete-element");
  description.classList.add("element-description");

  title.type = "text";
  title.placeholder = "Hours/Credits";
  deleteBtn.textContent = "Delete";
  description.type = "text";
  description.placeholder = "Description";

  deleteBtn.addEventListener("click", () => {
    while (element.firstChild) element.removeChild(element.firstChild);
    element.remove();
  });

  // Element inputs
  const inputsDiv = document.createElement("div");

  const hoursDiv = document.createElement("div");
  const hoursLabel = document.createElement("label");
  const hoursInput = document.createElement("input");

  const instituteDiv = document.createElement("div");
  const instituteLabel = document.createElement("label");
  const instituteInput = document.createElement("input");

  const monthDiv = document.createElement("div");
  const monthLabel = document.createElement("label");
  const monthInput = document.createElement("input");

  const yearDiv = document.createElement("div");
  const yearLabel = document.createElement("label");
  const yearInput = document.createElement("input");

  inputsDiv.classList.add("hc-inputs-div");
  hoursInput.classList.add("text-input");
  instituteInput.classList.add("text-input");
  monthInput.classList.add("text-input");
  yearInput.classList.add("text-input");

  hoursLabel.textContent = "Hours";
  instituteLabel.textContent = "Institute";
  monthLabel.textContent = "Month";
  yearLabel.textContent = "Year";

  hoursInput.type = "text";
  instituteInput.type = "text";
  monthInput.type = "text";
  yearInput.type = "text";

  controlsDiv.appendChild(deleteBtn);
  elementHeader.appendChild(title);
  elementHeader.appendChild(controlsDiv);

  hoursDiv.appendChild(hoursLabel);
  hoursDiv.appendChild(hoursInput);

  instituteDiv.appendChild(instituteLabel);
  instituteDiv.appendChild(instituteInput);

  monthDiv.appendChild(monthLabel);
  monthDiv.appendChild(monthInput);

  yearDiv.appendChild(yearLabel);
  yearDiv.appendChild(yearInput);

  inputsDiv.appendChild(hoursDiv);
  inputsDiv.appendChild(instituteDiv);
  inputsDiv.appendChild(monthDiv);
  inputsDiv.appendChild(yearDiv);

  element.appendChild(elementHeader);
  element.appendChild(description);
  element.appendChild(inputsDiv);

  return element;
};

const createTrainingModule = () => {
  // General form elements
  const element = document.createElement("div");
  const elementHeader = document.createElement("div");
  const title = document.createElement("input");
  const controlsDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const description = document.createElement("input");

  element.classList.add("form-element");
  elementHeader.classList.add("element-header");
  title.classList.add("element-title");
  controlsDiv.classList.add("element-controls");
  deleteBtn.classList.add("btn-delete-element");
  description.classList.add("element-description");

  title.type = "text";
  title.placeholder = "Training Reference";
  deleteBtn.textContent = "Delete";
  description.type = "text";
  description.placeholder = "Description";

  deleteBtn.addEventListener("click", () => {
    while (element.firstChild) element.removeChild(element.firstChild);
    element.remove();
  });

  // Element inputs
  const selectInput = document.createElement("select");
  const placeholderOption = document.createElement("option");
  const amazonOption = document.createElement("option");
  const googleOption = document.createElement("option");
  const azureOption = document.createElement("option");

  selectInput.classList.add("course-dropdown");
  placeholderOption.value = "";
  placeholderOption.textContent = "--Select an applicable course--";
  amazonOption.textContent = "Amazon Web Services";
  googleOption.textContent = "Google Cloud Platform";
  azureOption.textContent = "Azure DevOps Server";

  selectInput.appendChild(placeholderOption);
  selectInput.appendChild(amazonOption);
  selectInput.appendChild(googleOption);
  selectInput.appendChild(azureOption);

  controlsDiv.appendChild(deleteBtn);
  elementHeader.appendChild(title);
  elementHeader.appendChild(controlsDiv);
  element.appendChild(elementHeader);
  element.appendChild(description);
  element.appendChild(selectInput);

  return element;
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
  const formElementList = document.querySelector("#form-element-list");
  const btnAdd = document.getElementById("btn-add-element");
  const btnAddUploadMod = document.getElementById("btn-add-upload");
  const btnAddHoursMod = document.getElementById("btn-add-hours");
  const btnAddTrainingRefMod = document.getElementById("btn-add-training-ref");

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
})();
