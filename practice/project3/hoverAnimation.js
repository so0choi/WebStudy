var target = document.querySelector(".zini");

target.addEventListener("mouseover",function(){
    target.style.transform="translate("+parseInt(window.innerWidth)+"px,"+parseInt(window.innerHeight)+"px)";

})