/* click sur une image destination, la balise sejour correspondante apparait
les autres disparaissent */

$("#is").click(function(){
  $("#islande").css("display", "block");

  $("#norvege").css("display", "none");

  $("#canada").css("display", "none");

  $("#groenland").css("display", "none")

});

$("#no").click(function(){
  $("#islande").css("display", "none");

  $("#norvege").css("display", "block");

  $("#canada").css("display", "none");

  $("#groenland").css("display", "none")

});

$("#ca").click(function(){
  $("#islande").css("display", "none");

  $("#norvege").css("display", "none");

  $("#canada").css("display", "block");

  $("#groenland").css("display", "none")

});

$("#gro").click(function(){
  $("#islande").css("display", "none");

  $("#norvege").css("display", "none");

  $("#canada").css("display", "none");

  $("#groenland").css("display", "block")

});

 /*Slide gauche images*/
var timer = setInterval()

$(function (){
       $(window).scroll(function () {
          if ($(this).scrollTop() >= 250 && $(this).scrollTop() <= 750) {
             $("#slide1").css("position", "relative").css("left", "0");
             $("#slide1").css("transition-duration", "2s");
          }
          if($(this).scrollTop() > 750 && $(this).scrollTop() <= 1050) {
              $("#slide2").css("position", "relative").css("left", "0");
              $("#slide2").css("transition-duration", "2s");
          }
          if($(this).scrollTop() > 1150 && $(this).scrollTop() <= 1550) {
              $("#slide3").css("position", "relative").css("left", "0");
              $("#slide3").css("transition-duration", "2s");

          }
          if($(this).scrollTop() > 1450 && $(this).scrollTop() <= 1650) {
              $("#slide4").css("position", "relative").css("left", "0");
              $("#slide4").css("transition-duration", "2s");
          }
          if ($(this).scrollTop() > 2100 && $(this).scrollTop() <= 2300) {
              $("#slide5").css("position", "relative").css("left", "0");
              $("#slide5").css("transition-duration", "2s");
          }
          if ($(this).scrollTop() > 2300 && $(this).scrollTop() <= 2500) {
              $("#slide6").css("position", "relative").css("left", "0");
              $("#slide6").css("transition-duration", "2s");
          }
        });

});

/*
.trans{
  position : absolute;
  left : -100%;
}
*/
