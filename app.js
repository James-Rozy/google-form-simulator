const createFormElement = () => {
  const element = document.createElement("div");
  const elementHeader = document.createElement("div");
  const title = document.createElement("input");
  const controlsDiv = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const description = document.createElement("input");
  const textInput = document.createElement("input");

  element.classList.add("form-element");
  elementHeader.classList.add("element-header");
  title.classList.add("element-title");
  controlsDiv.classList.add("element-controls");
  editBtn.classList.add("btn-edit-element");
  deleteBtn.classList.add("btn-delete-element");
  description.classList.add("element-description");

  title.type = "text";
  title.placeholder = "Element Title";
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";
  description.type = "text";
  description.placeholder = "Description";

  // Element inputs
  textInput.classList.add("textInput");
  textInput.type = "text";
  textInput.placeholder = "Input some text";

  controlsDiv.appendChild(editBtn);
  controlsDiv.appendChild(deleteBtn);
  elementHeader.appendChild(title);
  elementHeader.appendChild(controlsDiv);
  element.appendChild(elementHeader);
  element.appendChild(description);
  element.appendChild(textInput);

  return element;
};

const createUploadModule = () => {
  const element = document.createElement("div");
  const elementHeader = document.createElement("div");
  const title = document.createElement("input");
  const controlsDiv = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const description = document.createElement("input");
  const fileInput = document.createElement("input");

  element.classList.add("form-element");
  elementHeader.classList.add("element-header");
  title.classList.add("element-title");
  controlsDiv.classList.add("element-controls");
  editBtn.classList.add("btn-edit-element");
  deleteBtn.classList.add("btn-delete-element");
  description.classList.add("element-description");

  title.type = "text";
  title.placeholder = "Upload";
  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";
  description.type = "text";
  description.placeholder = "Description";

  fileInput.type = "file";

  controlsDiv.appendChild(editBtn);
  controlsDiv.appendChild(deleteBtn);
  elementHeader.appendChild(title);
  elementHeader.appendChild(controlsDiv);
  element.appendChild(elementHeader);
  element.appendChild(description);
  element.appendChild(fileInput);

  return element;
};

const createHoursModule = () => {
  const element = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
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

  element.classList.add("form-element");
  title.classList.add("element-title");
  inputsDiv.classList.add("hcInputsDiv");

  title.textContent = "Hours Module";
  description.textContent = "Description";

  hoursLabel.textContent = "Hours";
  instituteLabel.textContent = "Institute";
  monthLabel.textContent = "Month";
  yearLabel.textContent = "Year";

  hoursInput.type = "text";
  instituteInput.type = "text";
  monthInput.type = "text";
  yearInput.type = "text";

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

  element.appendChild(title);
  element.appendChild(description);
  element.appendChild(inputsDiv);

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

  const formElements = document.querySelector("#form-element-list");
  const btnAdd = document.getElementById("btn-add-element");
  const btnAddUploadMod = document.getElementById("btn-add-upload");
  const btnAddHoursMod = document.getElementById("btn-add-hours");
  const btnAddTrainingRefMod = document.getElementById("btn-add-training-ref");

  btnAdd.addEventListener("click", () => {
    const newElement = createFormElement();
    formElements.appendChild(newElement);
  });

  btnAddUploadMod.addEventListener("click", () => {
    const newUploadModule = createUploadModule();
    formElements.appendChild(newUploadModule);
  });

  btnAddHoursMod.addEventListener("click", () => {
    const newHoursModule = createHoursModule();
    formElements.appendChild(newHoursModule);
  });

  btnAddTrainingRefMod.addEventListener("click", () => {
    const newTrainingRefModule = createHoursModule();
    formElements.appendChild(newTrainingRefModule);
  });
})();
