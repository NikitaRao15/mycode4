var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove",function(dets){
    crsr.style.top = dets.x +"px";
    crsr.style.left = dets.y +"px";
    console.log("hii")
})