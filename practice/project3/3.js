 var oReq = new XMLHttpRequest();

  oReq.addEventListener("load", function(){
      var jasonbj = JSON.parse(this.responseText);
      var fruit =jasonbj.favorites[1];
      var outside = document.querySelector(".outside");
      outside.innerHTML+="<span>"+ fruit +"</span>";
  }); //json 파싱을 통한 화면 출력이 가능하다

  oReq.open("GET", "./json.txt");
  oReq.send();