$(document).ready(function() {

  var results;
  
  $(".test").click(function() {
    $("p").toggle();
  });

  $("#submit").click(function() {
    results = $("#test").get();
  });

  console.log(results);
  
  results = results.toUpperCase();
  console.log(results);
  $("#test").set(results);
  
});
