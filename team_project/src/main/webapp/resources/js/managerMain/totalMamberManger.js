
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

const detailchecked = document.querySelector("input[name='srch_detail']:checked");

const srch_infoDisplay = document.querySelectorAll(".srch_info"); 

detailchecked.addEventListener("change",function(){
  if(detailchecked.value == "postspace"){
    srch_infoDisplay[0].style.display ="block";
    srch_infoDisplay[1].style.display = "none";
    // srch_infoDisplay[2].style.display = "none";
    // srch_infoDisplay[3].style.display = "none";
  }
  if(detailchecked.value == "commentspace"){
    srch_infoDisplay[0].style.display = "none";
    srch_infoDisplay[1].style.display = "block";
    // srch_infoDisplay[2].style.display = "none";
    // srch_infoDisplay[3].style.display = "none";
  }
});