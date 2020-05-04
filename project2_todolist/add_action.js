function changeState(tid){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',"/TodoList/type?id="+encodeURI(tid),true);
    xhr.addEventListener("load",function(){
        var tr = document.getElementById('list'+tid);
        var td = tr.childNodes;
        var tbl = document.getElementById('doing');
        tr.appendChild(td);
        tbl.appendChild(tr);
        tbl.removeChild();
    })
    tbl.child
    xhr.send();
    document.getEle
    xhr.addEventListener()
    
}