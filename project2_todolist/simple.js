var tbl = document.getElementsByTagName('table')[0];
var td1 = document.createElement("td");
td1.innerHTML=name;
var td2 = document.createElement("td");
td2.innerHTML=description;

var tr = document.createElement("tr");
tr.appendChild(td1); tr.appendChild(td2);
tbl.appendChild(tr);