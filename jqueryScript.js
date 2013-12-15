$( document ).ready(function() 
        {
        $( "a" ).click(function( event ) 
            {
            //event.preventDefault();
            //$( this ).hide( "slow" );
            alert( "Thanks for visiting!" );
            });
        $( document ).keydown(function(event) 
            {
            if( event.which == 37 )
            {
            $("#textField").html("LEFT");
            }
            if( event.which == 38 )
            {
            $("#textField").html("FORWARD");
            }
            if( event.which == 39 )
            {
            $("#textField").html("RIGHT");
            }
            if( event.which == 40 )
            {
            $("#textField").html("BACKWARD");
            }




            //alert( "Put the cookie down" );
            });
        });



window.onload = function() {
    //alert( "Welcome" );
}
