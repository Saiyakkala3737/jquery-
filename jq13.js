$(function(){
    $("#n1 ,#n2").focus(function () { 
    $(this).css("background-color","skyblue");
    });
    $("#n1,#n2").blur(function () { 
        $(this).css("background-color","white");
        
    });

});