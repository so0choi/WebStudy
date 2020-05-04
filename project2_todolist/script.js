function submit () {
	var answers=[];
	for(var i=1;i<=5;i++){
		var temp = document.getElementById('n'+i);
		if(temp.checked) answers.push(temp.value);
	}
	document.getElementByTagName
	fetch('/submit', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({answers:answers })
	})
		.then(res => res.json())
		.then(ret => {
			// Update Element
			
		var result = document.getElementById('result');
			if(ret){
				result.innerHTML="정답입니다.";
			}
			else{
				result.innerHTML="오답입니다.";
			}
		});
};
