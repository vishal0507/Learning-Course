
var image=document.getElementById("images") as HTMLImageElement;
var caption=document.getElementById("captions") as HTMLElement;



let images: string[] = ["Images/image1.png", "Images/image2.png", "Images/image3.png", "Images/image4.png", "Images/image5.png", "Images/image6.png", "Images/image7.png",
    "Images/image8.png", "Images/image9.png","Images/image10.png"];
let captions:string[]=["Build Idea","Build 2018","Team Work","Build Construction","Coratro","Silver Light","Angular","Dotnet MIUI","React Image Editor","Popular Chrome"];


var i=0;

image.src=images[i];
caption.innerText=captions[i];

function NextImage(this:HTMLElement)
{
    i++;
    if(i==images.length)
    {
        i=0;
    }
    image.src=images[i];
    caption.innerText=captions[i];
}
function PreviousImage(this:HTMLElement)
{
    console.log("iii")
    i--;
    if(i==-1)
    {
        i=images.length-1;
    }
    image.src=images[i];
    caption.innerText=captions[i];
}
