$(document).ready(function() {

  var results;
  
  $(".test").click(function() {
    $("p").toggle();
  });

  $("#submit").click(function() {
    results = $("#test").val();
    results = results.toUpperCase();
    $("#test").val(results);
  });
  
});
