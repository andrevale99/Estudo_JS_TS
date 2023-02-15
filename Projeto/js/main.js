$(document).ready(function()
{
    var Locadora = {
        reserva : [
            {marca : "fiat", tipo : "sedan"},
            {marca : "chevrolett", tipo : "sedan"},
            {marca : "hyundai", tipo : "sedan"},
            {marca : "toyota", tipo : "suv"}
        ]
    }

    $('#submit').on({
        click: function() {submit_pressed()}
    })

    function submit_pressed()
    {
        console.log("PRESSED");
    }
});




