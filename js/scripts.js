$(document).ready(function(){
  $("form#fortune").submit(function(event){
    event.preventDefault();
    $("#responses").show();
    let arrayAnswers = [];

    $("input:checkbox[name=fortune]:checked").each(function() {
      const fortuneAnswers = $(this).val();
      arrayAnswers.push(fortuneAnswers);
      // $('#responses').append(fortuneAnswers + "<br>");
      console.log(arrayAnswers);
    });

   






  });
});