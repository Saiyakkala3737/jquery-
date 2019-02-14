$(document).ready(function() {
 
    $('#details').submit(function(e) {
        e.preventDefault();
        var first_name = $('#user').val();
        var password = $('#pwd').val();
        var mobilenumber = $('#mbno').val();

            if (first_name.length < 1) 
            {
                alert(" enter name");
                return false;
            }
            if(password.length < 8) 
            {
                alert("enter correct password");
                return false;
            }
            if (mobilenumber.length<10 ||mobilenumber.length>10)
             {
                alert("enter  valid mobile number")
                return false;
            }   
            else
            {
                return true;
            }
  });
 
});