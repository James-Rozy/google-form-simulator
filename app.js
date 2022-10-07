const createFormElement = (moduleName = "", moduleId = 0) => {
  // General form element
  const element = document.createElement("div");

  // Element header
  const elementHeader = document.createElement("div");
  const title = document.createElement("h2");
  const deleteBtn = document.createElement("button");

  // Element inputs
  const hiddenModuleName = document.createElement("input");
  const hiddenModuleWeight = document.createElement("input");
  const requirementLabel = document.createElement("input");
  const requirementDescription = document.createElement("input");
  const helpText = document.createElement("input");

  // set module id attribute
  element.setAttribute("id", moduleId);

  // class attribute
  element.classList.add("form-element");
  elementHeader.classList.add("element-header");
  title.classList.add("element-title");
  deleteBtn.classList.add("btn-delete-element");
  requirementLabel.classList.add("text-input");
  requirementDescription.classList.add("text-input");
  helpText.classList.add("text-input");

  // type attribute
  hiddenModuleName.type = "hidden";
  hiddenModuleWeight.type = "hidden";
  requirementLabel.type = "text";
  requirementDescription.type = "text";
  helpText.type = "text";

  // id attribute
  hiddenModuleName.id = `module[${moduleId}]['module_name']`;
  hiddenModuleWeight.id = `module[${moduleId}]['module_weight']`;
  requirementLabel.id = `module[${moduleId}]['req_label']`;
  requirementDescription.id = `module[${moduleId}]['req_desc']`;
  helpText.id = `module[${moduleId}]['help_text']`;

  // value attribute
  title.value = moduleName.toLocaleLowerCase();
  hiddenModuleName.value = moduleName.toLocaleLowerCase();
  hiddenModuleWeight.value = moduleId;
  requirementLabel.value = "";
  requirementDescription.value = "";
  helpText.value = "";

  // text content & placeholders
  title.textContent = moduleName;
  deleteBtn.textContent = "Delete";
  requirementLabel.placeholder = `Add the ${moduleName.toLocaleLowerCase()} requirement label...`;
  requirementDescription.placeholder = `Add the ${moduleName.toLocaleLowerCase()} requirement description...`;
  helpText.placeholder = `Add help text here...`;

  // event listeners
  deleteBtn.addEventListener("click", () => {
    while (element.firstChild) element.removeChild(element.firstChild);
    element.remove();
  });

  elementHeader.appendChild(title);
  elementHeader.appendChild(deleteBtn);
  element.appendChild(elementHeader);
  element.appendChild(hiddenModuleName);
  element.appendChild(hiddenModuleWeight);
  element.appendChild(requirementLabel);
  element.appendChild(requirementDescription);
  element.appendChild(helpText);

  return element;
};

const createUploadModule = (moduleId = 0) => {
  const element = createFormElement("Upload", moduleId);

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");

  const inputLabel = document.createElement("label");
  inputLabel.textContent = "Add supporting documents here: ";

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.id = `module[${moduleId}]['file_upload']`;
  fileInput.value = "";
  fileInput.classList.add("file-input");

  inputDiv.appendChild(inputLabel);
  inputDiv.appendChild(fileInput);
  element.appendChild(inputDiv);

  return element;
};

const createHoursModule = (moduleId = 0) => {
  const element = createFormElement("Hours", moduleId);

  return element;
};

const createTrainingModule = (moduleId = 0) => {
  const element = createFormElement("Training", moduleId);

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-div");
  const inputLabel = document.createElement("label");
  inputLabel.textContent = "Select the training(s) you have completed...";
  const selectInput = document.createElement("select");
  selectInput.id = `module[${moduleId}]['training_ref']`;
  selectInput.value = "";
  // selectInput.multiple = "false";
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

  // tracking form element id
  let idTracker = formElementList.getElementsByClassName("form-element").length;
  const setModId = () => {
    if (formElementList.getElementsByClassName("form-element").length === 0)
      return idTracker;
    idTracker++;
    return idTracker;
  };

  btnAdd.addEventListener("click", () => {
    const newElement = createFormElement("", setModId());
    formElementList.appendChild(newElement);
  });

  btnAddUploadMod.addEventListener("click", () => {
    const newUploadModule = createUploadModule(setModId());
    formElementList.appendChild(newUploadModule);
  });

  btnAddHoursMod.addEventListener("click", () => {
    const newHoursModule = createHoursModule(setModId());
    formElementList.appendChild(newHoursModule);
  });

  btnAddTrainingRefMod.addEventListener("click", () => {
    const newTrainingModule = createTrainingModule(setModId());
    formElementList.appendChild(newTrainingModule);
  });
};

const saveForm = () => {
  formData = JSON.parse(localStorage.getItem("form_data")) || {};

  const formTitle = document.getElementById("form-title").value;
  const formDescription = document.getElementById("form-description").value;
  const modules = document.getElementsByClassName("form-element");

  formData.form_title = formTitle;
  formData.form_desc = formDescription;

  const modulesStorageArr = [];
  for (i = 0; i < modules.length; i++) {
    const module = {
      module_name: document.getElementById(`module[${i}]['module_name']`).value,
      module_weight: document.getElementById(`module[${i}]['module_weight']`)
        .value,
      req_label: document.getElementById(`module[${i}]['req_label']`).value,
      req_desc: document.getElementById(`module[${i}]['req_desc']`).value,
      helpText: document.getElementById(`module[${i}]['help_text']`).value,
    };

    if (module.module_name === "upload") {
      module.file_upload = document.getElementById(
        `module[${i}]['file_upload']`
      ).value;
    }

    if (module.module_name === "training") {
      module.training_ref = document.getElementById(
        `module[${i}]['training_ref']`
      ).value;
    }

    modulesStorageArr.push(module);
  }

  formData.modules = modulesStorageArr;
  localStorage.setItem("form_data", JSON.stringify(formData));

  console.log(formData);
};

(() => {
  const form = document.getElementById("form");

  // Sidebar controls for adding elements to the form elements list
  addModuleSidebar();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.removeItem("form_data");
    saveForm();
  });
})();
