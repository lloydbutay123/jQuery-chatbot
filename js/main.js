$(function(){

    var username = "";
    function send_message(message) {
        var previousMessage = $("#container").html();

        if(previousMessage.length > 3 ){
            previousMessage = previousMessage + "<br>";
        }

    $("#container").html(previousMessage +  "<div class='bot-message-div'><span class='animation'><img class='chatbot-icon' src='assets/images/chatbot-icon.png'/><span class= 'bot'>Chatbot: </span>" + message + "</span>" + "</div>");
    $(".animation").hide();
    $(".animation").delay(500).fadeIn();
    $(".animation").removeClass("animation");

    }
    function chatbotMessage() {
        send_message("Hello, What is your name?");  

    }
    function ai(message) {
        if(username.length<3){
            username = message;
            send_message("<span class='animation'>Nice to meet you " + username + ", how are you?" + "</span>");
        }
        if(message.indexOf("How are you?")>=0){
            send_message("Great!, I'm Good.")
        }
        if(message.indexOf("good")>=0){
            send_message("Great!, Good to hear that.")
        }
        if(message.indexOf("sad")>=0){
            send_message("Aww, Sorry to hear that.")
        }
        if(message.indexOf("time")>=0){
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            send_message("The current time is: " + h + ":"+ m);
        }
        if(message.indexOf("date")>=0){
            var date = new Date();
            const day = date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();
            send_message("The current date is: " + day + "/" + month + "/" + year );
        }
        if(message.indexOf("thank you")>=0){
            send_message("My pleasure. Is there anything I can help you with?")
        }

    }

    chatbotMessage();
    
  $("#send").on("click", function(){

    var username = "<div class='user-message-div'><img class='chatbot-icon' src='assets/images/user-icon.png'/><span class='username' =>You: </span></div>";

    var newMessage = $("#text-area").val();

    $("#text-area").val("");
  
    var previousMessage = $("#container").html();

        if(previousMessage.length > 3 ){
            previousMessage = previousMessage + "<br>";
        }

    $("#container").html(previousMessage + + "<div class='user-message-div'>" +  username + newMessage + "</div>");
    $("#container").scrollTop($("#container").prop("scrollHeight"));

    ai(newMessage);

  });

  $("#text-area").on("keypress", function(e) {
    if(e.which == 13) {
        var username = "<img class='chatbot-icon' src='assets/images/user-icon.png'/><span class='username' =>You: </span>";

        var newMessage = $("#text-area").val();

    $("#text-area").val("");
  
    var previousMessage = $("#container").html();

        if(previousMessage.length > 3 ){
            previousMessage = previousMessage + "<br>";
        }

    $("#container").html(previousMessage + "<div class='user-message-div'>" + username + newMessage + "</div>");
    $("#container").scrollTop($("#container").prop("scrollHeight"));

    ai(newMessage);
    }
  })

});
