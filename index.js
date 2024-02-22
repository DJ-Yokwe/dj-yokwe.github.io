/*$(document).ready(function() {

  var results;
  
  $(".test").click(function() {
    $("p").toggle();
  });

  $("#submit").click(function() {
      results = $("#test").val();
      //results = results.toUpperCase();

      $.ajax({
          url: 'index.php', // Path to your PHP file
          type: 'GET',
          dataType: 'json',
          success: function(php_result) {
              // 'data' contains the response from the server (PHP file)
              // Now you can use this data in your jQuery code
              let keyVal = php_result.test;
              alert(keyVal);
              $("#test").val(keyVal);

              const apiUrl = "https://api.openai.com/v1/chat/completions";
              const apiKey = results; // Replace with your actual API key
          
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
            console.error("Error:", error.statusText, error.responseText);
          }
      });
    });
      //$("#test").val(results);
});
*/
$(document).ready(function() {

  var results;
  
  $(".test").click(function() {
    $("p").toggle();
  });

  $("#submit").click(function() {
      results = $("#test").val();
      //results = results.toUpperCase();
  
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const apiKey = results; // Replace with your actual API key
  
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
              console.error("Error:", error);
              // Handle errors
          }
      
      //$("#test").val(results);
    });
  });

  var tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/iframe_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	function onYouTubeIframeAPIReady() {
	  player = new YT.Player('safetyVid', {
		height: '315',
		width: '560',
		videoId: 'OI7nHzExxp4',
	      events: {
	        'onStateChange': onPlayerStateChange
	      }
	  });
	}
  	
	function onPlayerStateChange(event) {
		console.log(event.data);
	  //$('[name="Next"]').prop('disabled', false);
	}
});
