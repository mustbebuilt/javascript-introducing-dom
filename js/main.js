// console.info("Hello Console")
// console.dir(document)
// document.getElementById("myHeading").innerHTML = "Martin's Site ";

document.querySelector("a").setAttribute("href", "http://www.google.co.uk")

document.querySelector("nav ul li").setAttribute("class", "currentPage")

document.getElementById("myTestEvent").addEventListener("click", function(){
    console.info("I was clicked - ouch")
    document.getElementById("myHeading").innerHTML = "Martin's Site ";
})
var colourButtons = document.querySelectorAll(".colPicker")
console.dir(colourButtons)

for(var i=0; i < colourButtons.length; i++)
{
    colourButtons[i].addEventListener("click", chgColour)
}

function chgColour(ev){
    // console.info(ev.target.classList)
    var colourPicked = ev.target.classList[0] + "Back";
    console.info(colourPicked)
    var bodyElement = document.querySelector("body");
    if (colourPicked === "resetBack") {
        bodyElement.removeAttribute("class")
    }else{
        bodyElement.setAttribute("class", colourPicked)
    }
}
var imageAr = [
    'images/view1.jpg', 
    'images/view2.jpg', 
    'images/view3.jpg',
    'images/view4.jpg', 
    'images/view5.jpg', 
    'images/view6.jpg'];
var counter = 0;
chgImage();
setInterval(chgImage, 2000);

function chgImage(){
    counter++
    if (counter === imageAr.length) {
        counter = 0;
    }
    document.getElementById("myImages").setAttribute("src", imageAr[counter])
    
}
console.dir(window.location)
var url = window.location.href;
console.dir(url.split('/'));
var filename = url.split('/').pop();
console.info(filename)