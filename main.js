// Get Elements By Id's

let outP = document.getElementById("output");

document.getElementById("randNick").addEventListener("click", randF);
document.getElementById("allNick").addEventListener("click", allF);

let names = ["Juggernaut", "The Mad Scientist", "The Hawk", "The Legend", "Wind Waker", "Alpha", "Leviathan", "Avenger", "Boss", "Kingfish"];

let nickIndex = 0;

function randF() {
    let firstN = document.getElementById("firstName").value;
    let lastN = document.getElementById("lastName").value;

    if (firstN === "" || lastN === "") {
        outP.innerHTML = "Insert a name and a lastname please."
    } else {
        outP.innerHTML = ""
        let nickIndex = randInt(0, 10);
        outP.innerHTML = firstN + " " + '"' + names[nickIndex] + '"' + " " + lastN
    }
}

function allF() {
    // Display All Nicknames using a for loop
    let firstN = document.getElementById("firstName").value;
    let lastN = document.getElementById("lastName").value;

    if (firstN === "" || lastN === "") {
        outP.innerHTML = "Insert a name and a lastname please."
    } else {
        outP.innerHTML = ""
        for (let i = 0; i < names.length; i++) {
            outP.innerHTML += firstN + " " + '"' + names[i] + '"' + " " + lastN + '<br>'
        }
    }
}