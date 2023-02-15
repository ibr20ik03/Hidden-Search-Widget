let btnSearch = document.querySelector(".button");
let inputSearch = document.querySelector("input");
let resultSearch = document.querySelector(".result-search");

btnSearch.onclick = () => {
    if (btnSearch.classList == "button") {
        btnSearch.previousElementSibling.style = "width: 300px; padding: 10px 2px 10px 20px";
        btnSearch.classList.add("X");
    }else {
        btnSearch.previousElementSibling.style = "";
        btnSearch.parentElement.style = "";
        btnSearch.classList.remove("X");
    }
}

inputSearch.onkeyup = () => {
    btnSearch.parentElement.style = "border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;";
    resultSearch.style.display = "flex";
}

inputSearch.onblur = () => {
    btnSearch.parentElement.style = "";
    resultSearch.style.display = "none";
}