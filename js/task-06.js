const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("blur",() =>{
if (inputValidation.value.length === 6){
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");}
else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
}});