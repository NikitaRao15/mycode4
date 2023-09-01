"use strict";
// document.getElementsByTagName("li")[0].innerHTML = "Nikita";
// document.querySelectorAll("li")[2].style.color="blueviolet";
// let hello = document.querySelector("#hello");
// //hello.classList.add("change");
// //hello.classList.remove("change");
// hello.classList.toggle("change");
// //hello.classList.toggle("change");
// document.querySelector("li a").setAttribute("href","https://fb.com");

const randomnumb1 =Math.trunc( Math.random()*6 + 1);
const randomnumb2 =Math.trunc( Math.random()*6 + 1);


const image1 ='../photos/die/dice' + randomnumb1 + ".jpeg";
const image2 ="/photos/die/dice" + randomnumb2 + ".png";
console.log(image1,image2);

document.querySelector("#die1").setAttribute("src",image1);
document.querySelector("#die2").setAttribute("src",image2);

let win = document.getElementById("hello");
if(randomnumb1>randomnumb2){
    win.innerHTML="p-1 wins !!!!";
}
else if( randomnumb1<randomnumb2){
win.innerHTML="p-2 wins!!!";
}
else{
    win.innerHTML="draw...same number generated!!!";
}