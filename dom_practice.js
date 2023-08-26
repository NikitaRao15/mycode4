// 4-> DOM pillars...

// 1.selection of element..
var a = document.querySelector("h1");
console.log(a);

// 2.change html query....
var b = document.querySelector("h1");
b.innerHTML = "this is js practice...";

//3. change in css...
var c = document.querySelector("h1");
c.style.color = "red";
c.style.fontSize = "80px";
c.style.backgroundColor = "blue";

//4. event listener...
var d = document.querySelector("h1");
d.addEventListener("click", function () {
  a.style.color = "yellow";
  a.style.fontSize = "30px";
  a.style.backgroundColor = "black";
  a.innerHTML = "This is Nikita Rao";
});

var flag = 0;
var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    console.log("click1");
    flag = 1;
  } else {
    bulb.style.backgroundColor = "blue";
    console.log("click2");
    flag = 0;
  }
});

var ab = document.querySelectorAll("h1");
console.log(ab);
ab.forEach(function(e){
    console.log(e);
})



