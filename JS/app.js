import { string } from "../JavaScript-Tools/string.js";
import { data } from "./data.js";

console.log(data.userName);

const OUTPUT = document.querySelector(".output-box");
const NUMBER = document.querySelector("#num");
const EXPO = document.querySelector("#expo");
const BUTTONS = document.querySelectorAll(".btn");

const clearInputToNumber = (input) => string.keepCharacters(input, string.digits);

BUTTONS.forEach(button => {
    button.addEventListener("click", ()=> {
        if (button.id === "start") {
            
        }
    })
});
