$(document).ready(function(){
  var  maxlength=15;
    $('textarea').keyup(function(){
        var textlen=maxlength-$(this).val().length;
        $('#abcd').text(textlen)
    });

});