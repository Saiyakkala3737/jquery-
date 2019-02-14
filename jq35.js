$(document).ready(function(){
  $("button").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#div1").width() + "</br>";
    txt += "Height of div: " + $("#div1").height() + "</br>";
    txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
    txt += "Inner height of div: " + $("#div1").innerHeight();
    $("#div1").html(txt);
  });
});