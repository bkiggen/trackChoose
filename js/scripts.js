$(document).ready(function(){
  $('html, body').animate({scrollTop:$('.jumbotron').offset().top}, 500);
  $("#form1").submit(function(event){
    event.preventDefault();
//variables defined
    var answer1 = $('input[name=question1]:checked').val();
    var answer2 = $('input[name=question2]:checked').val();
    var answer3 = $('input[name=question3]:checked').val();
    var answer4 = $('input[name=question4]:checked').val();
    var answer5 = $('input[name=question5]:checked').val();
// Script to catch empty form submission
    if((!answer1) || (!answer2) || (!answer3) || (!answer4) || (!answer5)){
      $('html, body').animate({scrollTop:$('#q1').offset().top}, 500);
      alert("Please answer all questions!");
    } else {
      $('html, body').animate({scrollTop:$('.result').offset().top}, 500);
//logic tree
        if (answer5 === "butterfly") {
          if (answer1 === "front") {
            $("#react").removeClass("hidden");
            $("#react").siblings().addClass("hidden");
          } else if (answer1 === "back") {
            //back end tree
            if (answer2 === "big"){
              //C# info
              $("#c").removeClass("hidden");
              $("#c").siblings().addClass("hidden");
            } else if (answer2 === "small"){
              //ruby info
              $("#ruby").removeClass("hidden");
              $("#ruby").siblings().addClass("hidden");
            };
          };
        } else if (answer5 === "wolf") {
          //not Epicodus
          $("#other").removeClass("hidden");
          $("#other").siblings().addClass("hidden");
      };
    };
  });
//click scroll function
  $('#start').click(function() {
    $('html, body').animate({scrollTop:$('#q1').offset().top}, 500);
  });
  $('input[name=question1]').click(function() {
    $('html, body').animate({scrollTop:$('#q2').offset().top}, 500);
  });
  $('input[name=question2]').click(function() {
    $('html, body').animate({scrollTop:$('#q3').offset().top}, 500);
  });
  $('input[name=question3]').click(function() {
    $('html, body').animate({scrollTop:$('#q4').offset().top}, 500);
  });
  $('input[name=question4]').click(function() {
    $('html, body').animate({scrollTop:$('#q5').offset().top}, 500);
  });
  $('input[name=question5]').click(function() {
    $('html, body').animate({scrollTop:$('#end').offset().top}, 500);
  });
});
