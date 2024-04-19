import './style.css';


const inputRange = document.querySelector("input");
inputRange.addEventListener("input", (e)=>{
    console.log("range", e.target.value)
    let rdmParagraphe = document.getElementById("rdmPara");
    rdmParagraphe.textContent = e.target.value;
})