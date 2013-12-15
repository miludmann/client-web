if (typeof dcodeIO === 'undefined' || !dcodeIO.ProtoBuf) {
        throw(new Error("ProtoBuf.js is not present. Please see www/index.html for manual setup instructions."));
}
// Initialize ProtoBuf.js
var ProtoBuf = dcodeIO.ProtoBuf;

$( document ).ready(function() 
        {
        //var ProtoBuf = require("protobufjs");
        var builder = ProtoBuf.loadProtoFile("messages/controller.proto");
        var Orwell = builder.build("orwell");
        var Input = Orwell.messages.Input;
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
                var move = new Input.MoveType(50, 50); 
                var input = new Input(move); 
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
