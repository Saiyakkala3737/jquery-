$(document).ready(function(){
        $("p").bind('click',function(){
            $("<div>click event</div>").appendTo('body');
        });
        $("p").bind("dblclick", function(){
            $( "<div>This is a double-click Event</div>"  ).appendTo( "body" );
         });
        });