import "./css/index.css"
import "./scripts/form-events"

const addButton = document.querySelector("#add-card-btn");
addButton.addEventListener("click", () => {
  alert("Cartão adicionado!");
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
