var ind = 1;
var image = document.getElementById('pictures');
var imgArray = ["g1.jpg","g2.jpg","g3.jpg","g4.jpg","g5.jpg","g6.jpg"];

function change() {
    console.log("ind",ind);
    console.log("L",imgArray.length);
    image.setAttribute("src",imgArray[ind]);
    ind = ind + 1;
    if (ind > imgArray.length - 1) {
        ind = 0;
    }
}

function add() {
    var img = document.getElementById("myFile");
    console.log(img)
    imgArray.push(img);
}