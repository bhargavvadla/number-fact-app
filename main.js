let userInputEl = document.getElementById('userInput');
let factEl = document.getElementById('fact');
let spinnerEl = document.getElementById('spinner');

function getFact(number) {
    let url = "https://apis.ccbp.in/numbers-fact?number=" + number;
    let options = {
        method: "GET"
    }
    spinnerEl.classList.remove("d-none");
    factEl.classList.add("d-none");
    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            spinnerEl.classList.add("d-none");
            factEl.classList.remove("d-none");
            let {
                fact
            } = jsonData;
            factEl.textContent = fact;
        })
}

function onKeyDown(e) {
    let number = userInputEl.value;
    if (e.key === "Enter") {
        getFact(number);
    }
}
userInputEl.addEventListener("keydown", onKeyDown);