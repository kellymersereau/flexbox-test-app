    console.log(document.body.getElementById("thumbnail").style.color);
    document.getElementById('thumbnail').style.color = "#ddd";
    console.log(thumbnail);

function thumbnailColor(){
    document.getElementById('thumbnail').style.color = "#ddd";
    console.log(thumbnail);
    // var color = "#" + getRandomColor();
    thumbnail.style.backgroundColor = "#ddd";
    // console.log(color);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}