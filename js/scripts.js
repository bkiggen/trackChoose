$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    //variables defined
    var answer1 = $('input[name=question1]:checked').val();
    var answer2 = $('input[name=question2]:checked').val();
    var answer3 = $('input[name=question3]:checked').val();
    var answer4 = $('input[name=question4]:checked').val();
    var answer5 = $('input[name=question5]:checked').val();

//decision tree
    if (answer5 === "butterfly") {
      if (answer1 === "front") {
        //front end info
        console.log("front");
      } else if (answer1 === "back") {
        //back end tree
        if (answer2 === "big"){
          //C#
          console.log("big");
        } else if (answer2 === "small"){
          //ruby
        };
      };
    } else if (answer5 === "wolf") {
      //not Epicodus
  };
  // Script to catch empty form submission
    if (!(answer3 === "simple" || answer3 === "complex") || !(answer4 === "small" || answer4 === "big") || !(answer2 === "big" || answer2 === "small") || !(answer1 === "front" || answer1 === "back") || !(answer5 === "butterfly" || answer5 === "wolf")) {
      alert("Please answer all questions!");
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
