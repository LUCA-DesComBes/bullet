import './style.css';

const inputRange = document.querySelector("input");

let rdm = Math.floor(Math.random() * 101)
console.log(rdm);
inputRange.addEventListener("input", (e)=>{
    let random = parseInt(e.target.value)
    let score = 0;
    let scorePara = document.querySelector("#score");
    let rdmParagraphe = document.getElementById("rdmPara");
    rdmParagraphe.textContent = random;
    // 27 - 0 = 27 || 0 - 27 = -27
    //si random est === rdm alors ajoutez à scorePara 5 de score 
    if(random === rdm){
       scorePara.textContent = 5
       alert("GG, t'as trouvée le nombre, c'était bien: " + rdm)
    }
     else if (random - score > 5 || score - random < 5){
        scorePara.textContent = 2
    }
    else if(random - score >= 10 || score - random <= 10) {
        scorePara.textContent = 0;
    } else {
        console.log("error");
    }
})