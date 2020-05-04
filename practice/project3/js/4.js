function init(){
    var elHeading = document.querySelector("h1");
    console.log("this is h1: ",elHeading);
    foo(elHeading);
}
document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM Loaded!");
    init();
})
window.addEventListener("load",function(){
    console.log("window Loaded!");
})

