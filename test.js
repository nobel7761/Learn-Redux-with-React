// Get the button and the container for the components
const addComponentBtn = document.getElementById("add-component-btn");
const componentsContainer = document.getElementById("components-container");
let idCounter = 1;

// Add an event listener to the "Add New Component" button
addComponentBtn.addEventListener("click", () => {
  // Create a new component element
  const componentEl = document.createElement("div");
  componentEl.classList.add("component");

  // Add the "Match" word with the unique ID to the component
  const matchEl = document.createElement("span");
  matchEl.textContent = `Match ${idCounter}`;
  componentEl.appendChild(matchEl);

  // Add the "Increment" and "Decrement" input fields to the component
  const incrementInputEl = document.createElement("input");
  incrementInputEl.type = "number";
  incrementInputEl.placeholder = "Increment";
  componentEl.appendChild(incrementInputEl);

  const decrementInputEl = document.createElement("input");
  decrementInputEl.type = "number";
  decrementInputEl.placeholder = "Decrement";
  componentEl.appendChild(decrementInputEl);

  // Add the "120" field to the component
  const defaultNumberEl = document.createElement("span");
  defaultNumberEl.textContent = "120";
  componentEl.appendChild(defaultNumberEl);

  // Add the event listener to update the "120" field based on the inputs
  incrementInputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const incrementValue = Number(e.target.value);
      defaultNumberEl.textContent = String(
        Number(defaultNumberEl.textContent) + incrementValue
      );
    }
  });

  decrementInputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const decrementValue = Number(e.target.value);
      const updatedValue = String(
        Number(defaultNumberEl.textContent) - decrementValue
      );
      if (updatedValue >= 0) {
        defaultNumberEl.textContent = updatedValue;
      } else {
        defaultNumberEl.textContent = 0;
      }
    }
  });

  // Add the "Delete" button to the component
  const deleteBtnEl = document.createElement("button");
  deleteBtnEl.textContent = "Delete";
  deleteBtnEl.addEventListener("click", () => {
    componentEl.remove();
  });
  componentEl.appendChild(deleteBtnEl);

  // Add the new component to the container and increment the ID counter
  componentsContainer.appendChild(componentEl);
  idCounter++;
});
