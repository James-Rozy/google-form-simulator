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

  // name attribute
  // element.name = "module";
  hiddenModuleName.name = `module[${moduleId}]['module_name']`;
  hiddenModuleWeight.name = `module[${moduleId}]['module_weight']`;
  requirementLabel.name = `module[${moduleId}]['req_label']`;
  requirementDescription.name = `module[${moduleId}]['req_desc']`;
  helpText.name = `module[${moduleId}]['help_text']`;

  // value attribute
  title.value = moduleName.toLocaleLowerCase();
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
  fileInput.name = `module[${moduleId}]['file_input']`;
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
  selectInput.name = `module[${moduleId}]['training_reference']`;
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

const saveForm = (e) => {
  const formTitle = document.getElementById("form-title").value;
  const formDescription = document.getElementById("form-description").value;
  const formElementList = document.getElementById("form-element-list");
  const modules = document.getElementsByName("module[0]");

  // console.log(formTitle);
  // console.log(formDescription);
  console.log(e.target.elements.form_title.value);
  console.log(e.target.elements.form_description.value);
  console.log(e.target.elements["module[]"]);

  // for (i = 0; i < modules.length; i++) {
  //   console.log(modules[i].module[1]["req_label"]);
  //   // const module = {
  //   //   module_name: formElements[i].elementHeader.title.value,
  //   //   module_id: formElements[i].id,
  //   //   requirement_label: formElements[i].requirementLabel.value,
  //   //   requirement_description: formElements[i].requirementDescription.value,
  //   //   helpText: formElements[i].helpText.value,
  //   // };

  //   // console.log(module);
  // }
};

const displayFormElements = () => {
  const formElementList = document.querySelector("#form-element-list");

  // Remove old elements from the list before updating
  while (formElementList.firstChild) {
    formElementList.removeChild(formElementList.firstChild);
  }
};

(() => {
  formData = JSON.parse(localStorage.getItem("form_data")) || [];

  const form = document.getElementById("form");
  const formTitle = document.getElementById("form-title");
  const formDescription = document.getElementById("form-description");
  const saveFormBtn = document.getElementById("btn-submit");

  const formTitleStorage = localStorage.getItem("form_title") || "Form Title";
  formTitle.setAttribute("value", formTitleStorage);
  formTitle.addEventListener("change", (e) => {
    localStorage.setItem("form_title", e.target.value);
  });

  const formDescriptionStorage =
    localStorage.getItem("form_description") || "Description";
  formDescription.setAttribute("value", formDescriptionStorage);
  formDescription.addEventListener("change", (e) => {
    localStorage.setItem("form_description", e.target.value);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    saveForm(e);
  });

  // Sidebar controls for adding elements to the form elements list
  addModuleSidebar();
})();
