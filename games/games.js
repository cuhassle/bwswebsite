class game {
    constructor(name, url, icon, description) {
        this.name = name;
        this.url = url;
        this.icon = icon;
        this.description = description;
    }
}

var games = [
    new game(
        "Totally Accurate Battle Simulator", 
        "./totallyaccuratearmorsim/", 
        "./totallyaccuratearmorsim/LogoTAAS.png",
        "It's a military simulator with lots of units, lots of levels, and lots of chaos."
    ),
    new game(
        "Parkour02", 
        "./parkour02", 
        "./parkour02/Parkor02Logo.png", 
        "TESTSETESTESTESTESTESETESTESTSETE STSTESTSETESTESTESTESTESETEST ESTSETESTSTESTSETESTESTE STESTESETESTESTSETESTSsssss/parkour02/Parkor02Logo.png/parkour02/Parkor02Logo.png")
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
        
        if (games[i].icon) {
            var icon = document.createElement("img");
            icon.src = games[i].icon;
            icon.style.width = "25%"
            entry.appendChild(icon);
        }

        var gameinfo = document.createElement("div");
        gameinfo.classList = "game-entryinfo";
        gameinfo.innerHTML = `<h2>${games[i].name}</h2><p style="word-break: keep-all;">${games[i].description}</p>`;
        entry.appendChild(gameinfo);
        container.appendChild(entry);
    }
    console.log("Done")
}