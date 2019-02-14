$(function(){
    $("#btn1").click(function(){
        $("#test1").prepend("welcome");

    });
    $("btn2").click(function(){
        $("ol").prepend("<li>add here</li>");

    });

});