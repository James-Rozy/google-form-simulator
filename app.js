const createFormElement = () => {
  const element = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const input = document.createElement("input");

  element.classList.add("form-element");
  title.classList.add("element-title");

  title.textContent = "Element";
  description.textContent = "Description";
  input.placeholder = "Input some text";

  element.appendChild(title);
  element.appendChild(description);
  element.appendChild(input);

  return element;
};

const createUploadModule = () => {
  const element = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const input = document.createElement("input");

  element.classList.add("form-element");
  title.classList.add("element-title");

  title.textContent = "Upload Module";
  description.textContent = "Description";
  input.type = "file";

  element.appendChild(title);
  element.appendChild(description);
  element.appendChild(input);

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
