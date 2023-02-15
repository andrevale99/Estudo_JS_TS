var reserva_input = {
    cidade: null,
    data : null,
    horario : null
}

$(document).ready(function()
{
    var Locadora = {
        reserva : [
            {marca : "fiat", tipo : "sedan", data : Date() ,reservado : false},
            {marca : "chevrolett", tipo : "sedan", data : Date() ,reservado : false},
            {marca : "hyundai", tipo : "sedan", data : Date() ,reservado : false},
            {marca : "toyota", tipo : "suv",  data : Date(),reservado : false}
        ]
    }

    $('#submit').on({
        click: function()
        {
            get_input();
        }
    })

    function get_input()
    {
        reserva_input.cidade = $("#cidade_input").val();
        reserva_input.data =  $("#data_input").val();
        reserva_input.horario = $("#horario_input").val();
        
        console.log(reserva_input);
    }

});




