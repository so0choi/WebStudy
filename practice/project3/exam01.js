const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}
var arr= []
for (value in data){
    for( v in data[value]){
        if(!isNaN(data[value][v]))
            arr.push(v);
    }
}


function findNo(data,result){
    for(keys in data){
        if(typeof data[keys]=='number')
            result.push(keys);
        else if(typeof data[keys]=='object'){
            findNo(data[keys],result);
        }
    }
}
var arr=[]
findNo(data,arr);
console.log(arr);

