$(document).ready(function() {

  var results;
  
  $(".test").click(function() {
    $("p").toggle();
  });

  $("#submit").click(function() {
    results = $("#test").get();
  });

  results = results.toUpperCase();
  $("#test").set(results);
  
});
