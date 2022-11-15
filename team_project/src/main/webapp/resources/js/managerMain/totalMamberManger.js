
const detailbutton = document.getElementsByClassName("_showDetailSearch")[0];

const srch_detailBox = document.getElementsByClassName("srch_detail")[0];

detailbutton.addEventListener("click",function(){
  if(srch_detailBox.style.display == "block"){
    srch_detailBox.style.display = "none";
    this.style.backgroundColor = "transparent";
    this.style.color="#404040";
  }else{
    srch_detailBox.style.display = "block";
    this.style.backgroundColor = "#8994a0";
    this.style.color="white";
  }

});

//

const srch_infoDisplay = document.querySelectorAll(".srch_info"); 

/* const detailchecked = document.querySelector("input[name='srch_detail']:checked"); */



document.querySelectorAll("input[name='srch_detail']")[0].addEventListener("change",function(){
  
  const detailchecked = document.querySelector("input[name='srch_detail']:checked");

  if(detailchecked.value == "postspace"){
    console.log(srch_infoDisplay[0]);
    srch_infoDisplay[0].style.display ="block";
    srch_infoDisplay[1].style.display = "none";
    srch_infoDisplay[2].style.display = "none";
    srch_infoDisplay[3].style.display = "none";
  }

});

// document.querySelector('input[name="srch_detail"]').checked;
document.querySelectorAll("input[name='srch_detail']")[1].addEventListener("change",function(){
  
  const detailchecked = document.querySelector("input[name='srch_detail']:checked");

  if(detailchecked.value == "commentspace"){
    console.log(srch_infoDisplay[1]);
    srch_infoDisplay[0].style.display ="none";
    srch_infoDisplay[1].style.display = "block";
    srch_infoDisplay[2].style.display = "none";
    srch_infoDisplay[3].style.display = "none";
  }

});

document.querySelectorAll("input[name='srch_detail']")[2].addEventListener("change",function(){
  
  const detailchecked = document.querySelector("input[name='srch_detail']:checked");

  if(detailchecked.value == "visitspace"){
    srch_infoDisplay[0].style.display ="none";
    srch_infoDisplay[1].style.display = "none";
    srch_infoDisplay[2].style.display = "block";
    srch_infoDisplay[3].style.display = "none";
  }
});

document.querySelectorAll("input[name='srch_detail']")[3].addEventListener("change",function(){
  
  const detailchecked = document.querySelector("input[name='srch_detail']:checked");

  if(detailchecked.value == "datespace"){
    srch_infoDisplay[0].style.display ="none";
    srch_infoDisplay[1].style.display = "none";
    srch_infoDisplay[2].style.display = "none";
    srch_infoDisplay[3].style.display = "block";
  }

});
//let date = new Date();  
/*   let yyyy = date.getFullYear();
  let mm = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + date.getMonth()+1;
  let dd = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(); */
document.getElementById('_startDateInput').valueAsDate = new Date();  
document.getElementById('_endDateInput').valueAsDate = new Date();  

var now_utc = Date.now() // 지금 날짜를 밀리초로
// getTimezoneOffset()은 현재 시간과의 차이를 분 단위로 반환
var timeOff = new Date().getTimezoneOffset()*60000; // 분단위를 밀리초로 변환
// new Date(now_utc-timeOff).toISOString()은 '2022-05-11T18:09:38.134Z'를 반환
var today = new Date(now_utc-timeOff).toISOString().split("T")[0];
document.getElementById("_startDateInput").setAttribute("max", today);
document.getElementById("_endDateInput").setAttribute("max", today);

//테이블 처음 회원조회
function totalMemberList(){
  const tbody = document.getElementById("selecttbody");

  //tbody 이전 내용 삭제
  tbody.innerHTML = "";


  $.ajax({
    url: "/totalMemberList",
    dataType: "JSON",
    sucess: memberList => {
      console.log(memberList);

      for(let member of memberList){
        //_checkable
        /* tr > td */
        const tr =document.createElement("tr");
        tr.setAttribute("memberid", member.)

        //체크박스 td class tc
        const td = document.createElement("td");
        const inputCheckBox = document.createElement("input");

        //아이디 이메일 
        const td1 = document.createElement("td");
        const div_nick_area = document.createElement("div");
        /* div > span */
        const spanImg = document.createElement("span");
        /* span > img */
        const td1Img = document.createAttribute("img");
        /* div > a */
        const td1A = document.createAttribute("a");

        //등급
        const td2 = document.createAttribute("td");
        /* span태그 안에 새내기 등급 들어감 */
        const td2SpanImg = document.createElement("span");
        /* span > img */
        const td2Img = document.createAttribute("img");

        //가입일 
        const td3 = document.createAttribute("td");
        const td3Span = document.createElement("span");

        //최근로그인이력
        const td4 = document.createAttribute("td");
        const td4Span = document.createElement("span");

        //방문수
        const td5 = document.createAttribute("td");
        const td5Span = document.createElement("span");

        //게시글수
        const td6 = document.createAttribute("td");
        const td6Span = document.createElement("span");

        //댓글수
        const td7 = document.createAttribute("td");
        const td7Span = document.createElement("span");




      }
    }
  });
}