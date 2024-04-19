import './style.css';

const inputRange = document.querySelector("input");

let rdm = Math.floor(Math.random() * 101)
console.log(rdm);
let rdmParagraphe = document.getElementById("rdmPara");
rdmParagraphe.textContent = rdm;
inputRange.addEventListener("input", (e)=>{
    let random = parseInt(e.target.value)
    console.log(random);
    let score = 0;
    let scorePara = document.querySelector("#score");
    // 27 - 0 = 27 || 0 - 27 = -27
    //si random est === rdm alors ajoutez à scorePara 5 de score 
    if(random === rdm){
       scorePara.textContent = 5
       alert("GG, t'as trouvée le nombre, c'était bien: " + rdm)
    }
    else if(Math.abs(random - rdm) <= 5) {
            scorePara.textContent = 2;
    }else if(Math.abs(random - rdm) <= 20){
            scorePara.textContent = 1;
    }
    else {
        scorePara.textContent = 0;
    }
})
