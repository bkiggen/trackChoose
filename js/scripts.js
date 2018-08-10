$(document).ready(function(){
//variables defined
  var answer1 = $('input[name=q1name]:checked').val()
  var answer2 = $('input[name=q2name]:checked').val()
  var answer3 = $('input[name=q3name]:checked').val()
  var answer4 = $('input[name=q4name]:checked').val()
  var answer5 = $('input[name=q5name]:checked').val()











//click scroll function
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
});
