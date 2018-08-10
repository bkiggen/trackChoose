$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    //variables defined
    var answer1 = $('input[name=question1]:checked').val();
    var answer2 = $('input[name=question2]:checked').val();
    var answer3 = $('input[name=question3]:checked').val();
    var answer4 = $('input[name=question4]:checked').val();
    var answer5 = $('input[name=question5]:checked').val();


    console.log(answer1);
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
