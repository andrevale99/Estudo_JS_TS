function soma() 
{
  var qtd = parseInt(prompt("Quantidade de números: "));

  var sum = 0;
  for (let i = 0; i < qtd; ++i)
    sum += parseFloat(prompt("Digite o número " + (i + 1) + ": "));

  alert("Soma total: " + sum);
}

function show_name(entrada)
{
    alert("Bem vindo " + document.getElementById(entrada).value);
}
