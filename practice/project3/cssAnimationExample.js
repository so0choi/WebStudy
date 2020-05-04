var btn = document.querySelector("button");
var target = document.querySelector(".outside");

btn.addEventListener("click",function() {
    var pre = parseInt(target.style.left);
    target.style.left = pre+100+"px";
})