import { random } from "../JavaScript-Tools/random.js";
import { data } from "./data.js";

const REDIRECT_LABEL = document.getElementById("redirect");

(function () {
    let loop = random.randrange(5, 10);
    let load = 0;

    setInterval(() => {
        REDIRECT_LABEL.textContent = `Chargement du produit${data.loadProgress[load]}`;

        (load < data.loadProgress.length - 1) ? load++: load = 0;

        loop--;
        if (loop === 0) document.location.href = "../Pages/app.html";
    }, (500));
}());
