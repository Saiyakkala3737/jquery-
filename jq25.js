$(function(){
    $("#btn1").click(function(){
        $("#test1").append("world");
    });
    $("#btn2").click(function(){
        $("ol").append("<li>append list</li>");

    });
})