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

module.exports = {
  createUploadModule,
};
