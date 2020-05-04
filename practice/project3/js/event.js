var log = document.querySelector(".log");
var ul = document.querySelector("ul");

ul.addEventListener("click",function(evt){
    log.innerHTML="clicked element is : "+evt.target.tagName;
    if(evt.target.tagName=="IMG"){
        log.innerHTML="clicked IMG is : "+evt.target.src;
    } else if(evt.target.tagName=="LI"){
        log.innerHTML="clicked IMG is : "+evt.target.firstElementChild.src;
    }
})

var data=[{title:"title1", content:"contents1",price:2000},
{title:"title2", content:"contents2",price:3000},
{title:"title3", content:"contents3",price:4000}];

 var html = "<li><h4>{title}</h4><p>{content}</p><div>{price}</div></li>";
 var resultHTML=[];
data.forEach(function(element){
   var result = html.replace("{title}",element.title)
        .replace("{content}",element.content)
        .replace("{price}",element.price);
    log.innerHTML+= result;
})

