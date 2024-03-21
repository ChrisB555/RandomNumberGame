const textInput = document.getElementById("num-input"); //input
const numOfGuesses = document.getElementById("num-of-guesses"); //div contor
const warningText = document.getElementById("warning-text");
const restartGame = document.getElementById("restart");
const alertText = document.getElementById("alert");


let genNum; //nr generat
let numGuesses = 0; //contor
let maxTriesNum = 3//nr de incercari

//functia principala de joc
const guess = () => {
  let inputOne = parseFloat(parseInt((textInput.value)));
  if (inputOne < 1 || inputOne > 10 || isNaN(inputOne)) {
    alertText.style.display = "block";
    alertText.innerHTML = "Insert a valid number between 1 and 10!";
    warningText.style.display = "none";
    return;
  } else alertText.style.display = "none";

  numGuesses++;

  if (numGuesses < maxTriesNum) {
    if (inputOne === genNum) {
      warningText.style.display = "block";
      warningText.innerHTML = `Congratulations!!  You found the number : ${genNum}`;
      restartGame.style.display = "block";
      textInput.value = "";
      numOfGuesses.innerHTML = ` Number of tries: ${numGuesses}`;
    } else if (inputOne < genNum) {
      warningText.style.display = "block";
      warningText.innerHTML = `You inserted number ${inputOne}.  Try a bigger number.`;
      numOfGuesses.innerHTML = ` Number of tries: ${numGuesses}`;
      textInput.value = "";
    } else {
      warningText.style.display = "block";
      warningText.innerHTML = `You inserted number ${inputOne} . Try a lower number. `;
      numOfGuesses.innerHTML = ` Number of tries: ${numGuesses}`;
      textInput.value = "";
    }
  }else if (numGuesses === maxTriesNum){
    if (inputOne === genNum) {
        warningText.style.display = "block";
        warningText.innerHTML = `Congratulations!!  You found the number : ${genNum}`;
        restartGame.style.display = "block";
        textInput.value = "";
        numOfGuesses.innerHTML = ` Number of tries: ${numGuesses}`;
        restartGame.style.display = "block";
      } else if (inputOne < genNum) {
        warningText.style.display = "block";
        warningText.innerHTML = `You inserted number ${inputOne}.` ;
        numOfGuesses.innerHTML = ` Number of tries: ${numGuesses}`;
        textInput.value = "";
        alertText.style.display = "block";
        alertText.innerHTML = " You didn't guess the number!.You had all the 3 tries! ";
        restartGame.style.display = "block";
      } else {
        warningText.style.display = "block";
        warningText.innerHTML = `You inserted number ${inputOne} .  `;
        numOfGuesses.innerHTML = ` Number of tries: ${numGuesses}`;
        textInput.value = "";
        alertText.style.display = "block";
        alertText.innerHTML = " You didn't guess the number!. You had all the 3 tries";
        restartGame.style.display = "block";
      }
  }  
  else {
    warningText.style.display = "block";
    warningText.innerHTML = ` You didn't guess the number!. You already had all of your tries.`;
    textInput.value = "";
    restartGame.style.display = "block";
    numOfGuesses.innerHTML = ` Number of tries: ${numGuesses}`;
  }
};

//functia initializare joc,unde generez nr random
const generate = () => {
  genNum = Math.floor(Math.random() * 10) + 1;
  console.log(genNum);
  //numGuesses = 0;
  textInput.value = "";
};

//functia care preia ce vine din input si o trimite la functia principala, apasand enter(nu onclick)
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    guess();
  }
});

//functia care reinitializeaza jocul dupa ce s-a terminat
restartGame.addEventListener("click", () => {
  restartGame.style.display = "none";
  warningText.innerHTML = "";
  numOfGuesses.innerHTML = "";
  alertText.style.display = "none";
  numGuesses = 0;
  generate();
});

//la load pe pagina,reinitializeaza jocul
window.addEventListener("load", generate);
