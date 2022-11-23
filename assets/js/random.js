var backgrounds = new Array("background-1.gif", "background-2.gif", "background-3.gif");
var random_int = Math.floor(Math.random() * 3)

console.log("url(assets/img/"+backgrounds[random_int]+".gif)")

document.getElementById('hero').style.backgroundImage = "url(assets/img/"+backgrounds[random_int];