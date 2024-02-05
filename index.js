$(document).ready(function() {

  var results;
  
  $(".test").click(function() {
    $("p").toggle();
  });

  $("#submit").click(function() {
      //results = $("#test").val();
      //results = results.toUpperCase();
  
      const apiUrl = "https://api.openai.com/v1/completions";
      const apiKey = "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"; // Replace with your actual API key
  
      const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
      };
  
      const data = {
          model: ".babbage-002",
          prompt: "Make up a name for a giant crocodile",
          max_tokens: 100
          // You can customize other parameters like temperature, frequency_penalty, etc.
      };

      $.ajax({
          type: "POST",
          url: apiUrl,
          headers: headers,
          data: JSON.stringify(data),
          success: function (response) {
              const generatedText = response.choices[0].text;
              $("#test").val(generatedText);
              // Handle or display the generated text as needed
          },
          error: function (error) {
              console.error("Error:", error);
              // Handle errors
          }
      
      //$("#test").val(results);
    });
  });
});
