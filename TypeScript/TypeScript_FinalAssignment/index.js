var image = document.getElementById("images");
var caption = document.getElementById("captions");
var images = ["Images/image1.png", "Images/image2.png", "Images/image3.png", "Images/image4.png", "Images/image5.png", "Images/image6.png", "Images/image7.png",
    "Images/image8.png", "Images/image9.png", "Images/image10.png"];
var captions = ["Build Idea", "Build 2018", "Team Work", "Build Construction", "Coratro", "Silver Light", "Angular", "Dotnet MIUI", "React Image Editor", "Popular Chrome"];
var i = 0;
image.src = images[i];
caption.innerText = captions[i];
function NextImage() {
    i++;
    if (i == images.length) {
        i = 0;
    }
    image.src = images[i];
    caption.innerText = captions[i];
}
function PreviousImage() {
    console.log("iii");
    i--;
    if (i == -1) {
        i = images.length - 1;
    }
    image.src = images[i];
    caption.innerText = captions[i];
}
