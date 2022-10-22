// TITLE CHANGE 

let titlu = document.getElementById("newtitle")
let preiaTitlu = document.querySelector(".titleinput")
let changeTitlu = document.querySelector(".titlechange")

changeTitlu.addEventListener("click", () => {

    if (preiaTitlu.value != ""){
    titlu.textContent = preiaTitlu.value;

    changeTitlu.classList.add("hide");
    preiaTitlu.classList.add("hide");
    } else {
        alert("No valid input")
    }

})

// MENU LIST CHANGE 

let primulElement = document.getElementById("primulelement");
let alDoileaElement = document.getElementById("aldoileaelement");
let alTreileaElement = document.getElementById("altreileaelement");
let alPatruleaElement = document.getElementById("alpatruleaelement");
let alCinceleaElement = document.getElementById("alcinceleaelement");

let inputUnu = document.getElementById("inputunu")
let inputDoi = document.getElementById("inputdoi")
let inputTrei = document.getElementById("inputtrei")
let inputPatru = document.getElementById("inputpatru")
let inputCinci = document.getElementById("inputcinci")

let menuChange = document.querySelector(".menuchange");

let menuInputs = document.querySelector(".menuinputs")

menuChange.addEventListener("click", () => {

    if(inputUnu.value !="") {
        primulElement.textContent = inputUnu.value;
    }

    if(inputDoi.value != "") {
        alDoileaElement.textContent = inputDoi.value;
    }
        
    if (inputTrei.value != "") {
        alTreileaElement.textContent = inputTrei.value;
    }

    if (inputPatru.value != "") {
        alPatruleaElement.textContent = inputPatru.value;
    }
        
    if (inputCinci.value != "") {
        alCinceleaElement.textContent = inputCinci.value;
    }

        menuInputs.classList.add("hide");
        menuChange.classList.add("hide");
})





