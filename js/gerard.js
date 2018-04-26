$(document).ready(function(){
    $("#onbutton").click(function(){
        if ($("#onbutton").css("background-color") == "red"){
            $("#onbutton").css("background-color", "#5cb85c");
        }
        
        if ($("#onbutton").css("background-color") == "#5cb85c"){
            $("#onbutton").css("background-color", "red");
        }
        
    });
});