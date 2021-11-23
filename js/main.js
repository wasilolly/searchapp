import { clearPushListener, clearSearchText, setSearchFocus, showClearTextButton } from "./searchBar.js";
import { deleteSearchResults, buildSearchResults, clearStatLine,  setStatsLine } from "./searchResults.js"
import { getSearchTerm, retrieveSearchResults} from "./dataFunction.js";

document.addEventListener("readystatechange", (event) =>{
    if(event.target.readyState ==="complete"){
        initApp();
    }
});

function initApp() {
    setSearchFocus();

    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);

    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchText);
    clear.addEventListener("keydown", clearPushListener)

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

function submitTheSearch(event){
    event.preventDefault();
    deleteSearchResults();
    processTheSearch();
    setSearchFocus();
}

async function processTheSearch() {
    clearStatLine();
    const searchTerm = getSearchTerm();
    if(searchTerm ==="") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length)
}