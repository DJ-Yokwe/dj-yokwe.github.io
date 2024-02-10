$(document).ready(function() {

  var results;
  
  $(".test").click(function() {
    $("p").toggle();
  });

  $("#submit").click(function() {
      results = $("#test").val();
      //results = results.toUpperCase();

      $.ajax({
          url: '/index.php', // Path to your PHP file
          type: 'GET',
          success: function(php_result.message) {
              // 'data' contains the response from the server (PHP file)
              // Now you can use this data in your jQuery code
              keyVal = String(php_result.message);
              alert(keyVal);
              $("#test").val(keyVal);

              const apiUrl = "https://api.openai.com/v1/chat/completions";
              const apiKey = keyVal; // Replace with your actual API key
          
              const headers = {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${apiKey}`
              };
      
              const data = {
                  model: "gpt-3.5-turbo",
                  messages: [{"role": "user", "content": "Who invented the airplane?"}],
                  max_tokens: 100
                  // You can customize other parameters like temperature, frequency_penalty, etc.
              };

              $.ajax({
                  type: "POST",
                  url: apiUrl,
                  headers: headers,
                  data: JSON.stringify(data),
                  success: function (response) {
                      const generatedText = response.choices[0].message.content;
                      //var formattedText = generatedText.replace(/\n/g, '\r\n');
                      $("#test").val(generatedText);
                      // Handle or display the generated text as needed
                  },
                  error: function (error) {
                      console.error("Error:", keyVal, error);
                      // Handle errors
                  }
              });
          },
          error: function (error) {
            console.error("Error:", error);
          }
      });
    });
      //$("#test").val(results);
});
