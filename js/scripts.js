$(document).ready(function(){
  $("form#fortune").submit(function(event){
    event.preventDefault();
    $("#responses").show();
    let arrayAnswers = [];

    $("input:checkbox[name=fortune]:checked").each(function() {
      const fortuneAnswers = $(this).val();
      arrayAnswers.push(fortuneAnswers);
      // $('#responses').append(fortuneAnswers + "<br>");
    });
    console.log(arrayAnswers);

    arrayAnswers.forEach(function(answer) {
      if (answer === 'cat' || 'mirror') {
        $('#responses').append('Watch yourself for the next few days. Use Sage once in the morning and then again in the afternoon')
      } else if (answer === 'luck') {
        $('#responses').append('It is your lucky day. Buy a lottery ticket.')
      } else
        alert("something else");

    });
    



  });
});