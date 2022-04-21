import { data } from "./data.js";

const COMMENTS_LIST = document.querySelector(".comments-list");
const ADD_COMMENT = document.querySelector("#add-comment");

const addComment = (comment, user = undefined) => {
    if (comment === "") return;
    if (user === undefined) {
        COMMENTS_LIST.innerHTML += (
            `<div class="comment">
                ${comment}
            </div>`
        );
    } else {
        COMMENTS_LIST.innerHTML += (
            `<div class="comment">
                ${user} - ${comment}
            </div>`
        );  
    }
}

(function () {
    data.comments.forEach(comment => {
        addComment(comment);
    })
}());

ADD_COMMENT.addEventListener("change", ()=> {
    addComment(ADD_COMMENT.value, data.userName);
});
