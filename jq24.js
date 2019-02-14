$(function(){
    $("#btn1").click(function(){
        $("#test1").text(function(i,origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
        });
    })
    $("#btn2").click(function(){
        $("#test2").text(function(i,origText){
            return "Old text: "+origText+ "New text : Hello world! (index : "+ i + ")";
        });

    });

});