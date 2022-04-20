import { random } from "../JavaScript-Tools/random.js"
import { data } from "./data.js";

const BUY_LABEL = document.getElementById("buy");
const PAGE_TITLE = document.getElementById("page-title");

(function () {
    let loop = random.randrange(5, 10);
    let load = 0;

    setInterval(() => {
        let progress = data.loadProgress[load];

        BUY_LABEL.textContent = `Achat en cours${progress}`;
        PAGE_TITLE.textContent = `Achat${progress}`;

        (load < data.loadProgress.length - 1) ? load++: load = 0;

        loop--;
        if (loop === 0) document.location.href = "../Pages/buyNotificaiton.html";
    }, (500));
}());
