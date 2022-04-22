import { string } from "../JavaScript-Tools/string.js";
import { data } from "./data.js";

const OUTPUT = document.querySelector(".output-box");
const NUMBER = document.querySelector("#num");
const EXPO = document.querySelector("#expo");
const BUTTONS = document.querySelectorAll(".btn");
const NOTIFICATION = document.querySelector("#notification");

const clearInputToNumber = (input) => string.keepCharacters(input, string.digits);

const makeError = (message) => {
    OUTPUT.style.color = "red";
    OUTPUT.textContent = message;
}

BUTTONS.forEach(button => {
    button.addEventListener("click", ()=> {
        if (button.id === "start") {
            let number;
            let expo;

            (NUMBER.value !== "") ? number = clearInputToNumber(NUMBER.value) : number = "Error";
            (EXPO.value !== "") ? expo = clearInputToNumber(EXPO.value) : expo = "Error";

            (number !== "") ? number = parseInt(number) : number = "Error";
            (expo !== "") ? expo = parseInt(expo) : expo = "Error";

            if (expo === "Error" || number === "Error") return makeError("Entree invalide");

            let responce = number;

            for (let i = 0; i < expo - 1; i++) responce *= number

            OUTPUT.style.color = "white";
            OUTPUT.textContent = responce;
        }
    })
});

(function () {
    NOTIFICATION.textContent = `Produit acheter par: ${data.userName}`;
}());
