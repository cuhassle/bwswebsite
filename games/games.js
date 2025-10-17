class game {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

var games = [
    new game("Totally Accurate Battle Simulator", "./totallyaccuratearmorsim/"),
    new game("Parkour02", "parkour02")
]

document.addEventListener("DOMContentLoaded", populategamecatalog);

function changegame(gametogoto) {
    var gamecontainer = document.getElementById("gamecontainer");
    gamecontainer.src = gametogoto.url;
    document.getElementById("gamediv").style.display = "block";
}

function populategamecatalog() {
    var container = document.getElementById("catalog")
    for (var i = 0; i < games.length; i += 1) {
        var entry = document.createElement("div");
        const gamenumber = i;
        entry.classList = "catalog-item water"
        entry.onclick = function () { changegame(games[gamenumber]) };
        entry.style = "cursor:pointer;"
        
        var insideelement = document.createElement("p");
        insideelement.innerText = games[i].name;
        entry.appendChild(insideelement);

        container.appendChild(entry);
    }
    console.log("Done")
}