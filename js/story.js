var aud = document.getElementById("aud");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var replay = document.getElementById("replay");

$(document).ready(function(){
  $(document).one("mousemove",function(){
    aud.play();
  })//자동재생 - 성공
  $("#word1").mouseover(function(){
    $("#wtip1").css({
      "visibility":"visible",
      "opacity":"1.0"
    })//css
  }).mouseout(function(){
    $("#wtip1").css({
      "visibility":"hidden",
      "opacity":"0.3"
    })//css
  })//mouseover&out
  $("#word2").mouseover(function(){
    $("#wtip2").css({
      "visibility":"visible",
      "opacity":"1.0"
    })//css
  }).mouseout(function(){
    $("#wtip2").css({
      "visibility":"hidden",
      "opacity":"0.3"
    })//css
  })//mouseover&out

  $("#word3").mouseover(function(){
    $("#wtip3").css({
      "visibility":"visible",
      "opacity":"1.0"
    })//css
  }).mouseout(function(){
    $("#wtip3").css({
      "visibility":"hidden",
      "opacity":"0.3"
    })//css
  })//mouseover&out
});//ready
aud.onended = function(){
  next.style.display = "block";
  prev.style.display = "block";
  replay.style.display = "block";
};//음성 재생 끝나면 버튼 생성 - 성공
replay.onclick = function(){
  aud.play();
};//재재생 버튼 클릭시 음성 플레이 - 성공
