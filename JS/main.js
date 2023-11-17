

(function(){
document.getElementById("myHeading").innerHTML = "Ivision";
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');
 document.querySelector(".red").addEventListener('click', function(){
 document.querySelector('body').setAttribute('class', "redBack");
 });
 document.querySelector(".blue").addEventListener('click', function(){
 document.querySelector('body').setAttribute('class', "blueBack");
 });
 document.querySelector(".green").addEventListener('click', function(){
 document.querySelector('body').setAttribute('class', "greenBack");
 });
 document.querySelector(".reset").addEventListener('click', function(){
 document.querySelector('body').removeAttribute("class");
 });


})();
