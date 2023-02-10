/*
Primeiro deve "pegar" o elemento que ser[a
utilizado para pegar o evento. Utilize os manipuladores
de DOM 
*/
const bt = document.querySelector("#bt");

function pegou_evento()
{
    console.log("Escutou o click")
}

/*
Com o elemento "coletado", escolher
qual evento deseja captar e vincular ele
a algum procedimento, função, etc.
*/
bt.onclick = pegou_evento; 

/*
Pode-se acrescentar últiplas funções para o mesmo evento
basta utilizar a função addEventListener
*/
var cnt = 0;

bt.addEventListener("click", function()
{
    bt.classList.toggle("troca");
    cnt++;
    console.log(cnt);
});

