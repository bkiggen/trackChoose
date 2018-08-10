$(document).ready(function(){
  var answer1 = $('input[name=q1name]:checked').val()
  var answer2 = $('input[name=q2name]:checked').val()
  var answer3 = $('input[name=q3name]:checked').val()
  var answer4 = $('input[name=q4name]:checked').val()
  var answer5 = $('input[name=q5name]:checked').val()

  $('').click(function() {
      $(this).find('td input[type=radio]').prop('checked', true);
      // $(this).find('td .radio span').addClass('checked', true);
  });
});
