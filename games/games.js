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

function changegame(gametogoto) {
    var gamecontainer = document.getElementById("gamecontainer");
    gamecontainer.src = gametogoto.url;
    document.getElementById("gamediv").style.display = "block";
}