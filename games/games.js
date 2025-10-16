class game {
    constructor(name, url, width,height) {
        this.name = name;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}

var games = [
    new game("Totally Accurate Battle Simulator", "./totallyaccuratearmorsim/", 960, 600),
    new game("Parkour02", "parkour02")
]

function changegame(gametogoto) {
    var gamecontainer = document.getElementById("gamecontainer");
    gamecontainer.src = gametogoto.url;
    console.log("hi")
}