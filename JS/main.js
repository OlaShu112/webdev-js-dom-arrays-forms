

(function(){
document.getElementById("myHeading").innerHTML = "Ivision";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');
 let colourButtons = document.querySelectorAll(".colPicker");
 for (let i = 0; i < colourButtons.length; i++) {
     colourButtons[i].addEventListener("click", chgColour)
 }
    const bodyElement = document.querySelector("body")
    function chgColour(ev){
 console.dir(ev.target.classList)
 let colourPicked = ev.target.classList[0] + "Back"
 bodyElement.setAttribute("class",colourPicked);
}
let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg', 
'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];

let imageCount = 0
setInterval(function() {
    imageSelect = imageCount - (Matrh.trunc(imageCount / imageAr.length))
    console.dir(imageSelect);

document.getElementById('myImages').setAttribute('src', imageAr [imageSelect]);
imageCount += 1;
}, 1000);
})();


