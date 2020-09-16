// console.info("Hello Console")
// console.dir(document)
// document.getElementById("myHeading").innerHTML = "Martin's Site ";

document.querySelector("a").setAttribute("href", "http://www.google.co.uk")

document.querySelector("nav ul li").setAttribute("class", "currentPage")

document.getElementById("myTestEvent").addEventListener("click", function(){
    console.info("I was clicked - ouch")
    document.getElementById("myHeading").innerHTML = "Martin's Site ";
})