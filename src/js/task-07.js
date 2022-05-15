const inputResizer = document.querySelector("#font-size-control");
const textResize = document.querySelector("#text")

inputResizer.addEventListener("input", ()=>{
textResize.style.fontSize = inputResizer.value  + "px";  
})

