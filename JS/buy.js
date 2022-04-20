import { data } from "./data.js";

const COMMENTS_LIST = document.querySelector(".comments-list");
const ADD_COMMENT = document.getElementById("add-comment");

const addComment = (comment) => {
    COMMENTS_LIST.innerHTML += (
        `<div class="comment">
            ${comment}
        </div>`
    );
}

(function () {
    data.comments.forEach(comment => {
        addComment(comment);
    });
}());

ADD_COMMENT.addEventListener("change", ()=> {
    addComment(ADD_COMMENT.value);
});
 