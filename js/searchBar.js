
export function setSearchFocus() {
    document.getElementById("search").focus();
}


export function showClearTextButton() {

    const search = document.getElementById("search");
    const clear = document.getElementById("clear");
    if (search.value.length) {
        clear.classList.remove("none");
        clear.classList.add("flex");
    } else {
        clear.classList.add("none");
        clear.classList.remove("flex");
    }
}

export function clearSearchText(event){
    event.preventDefault();
    document.getElementById("search").value=" ";
    const clear = document.getElementById("clear");
    clear.classList.add("none");
    clear.classList.remove("flex");
    setSearchFocus();
}

export function clearPushListener(event){
    if(event.key === "Enter" || event.key === " "){
        event.preventDefault();
        document.getElementById("clear").click();
    }
}
