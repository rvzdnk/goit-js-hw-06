const inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const defaultValue = "Anonymous";

inputText.addEventListener("input", (e) => {
    output.textContent = e.currentTarget.value;
    if (output.textContent === ""){
        output.textContent = defaultValue;
    }
});