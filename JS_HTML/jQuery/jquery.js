//Seleciona todos os elementos com
//tag h2
var titulos = $("h2");

var p1 = $("#p1");
var p2 = $("#p2");

const bt = $("#bt");

//O metodo click, está desatualizado
/*
bt.click(function()
{
    console.log("HELLO 1");
})
*/

p1.on("mouseenter", function()
{
   p1.toggleClass("fundo_p1");
})

//Outro jeito de atribuir
p2.on({
    click: function(){
        $(this).css("background-color", "red")
    }
    ,
    mouseleave: function()
    {
        $(this).css("background-color", "white")
    }

    
})
//recomendado utilizar o método
//".on" para definir o evento e 
//a rotina
bt.on("click", function()
{
    console.log("HELLO 2");
    $("html").css("background-color", "yellow");
});