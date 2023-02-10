function show_notas(entrada)
{
    let qtd = Number(document.getElementById(entrada).value);

    let alunos = Array(qtd);

    for(let i=0; i<alunos.length; ++i)
        alunos[i] = 33;
    console.log(alunos);

    for(i in alunos)
        console.log("2: " + alunos[i] + '\n');

    for(aluno of alunos)
        console.log("3: " + aluno + '\n');
 
    alunos.forEach(adicionar);
    console.log("4: "+alunos);
}

function adicionar(valor, idx, array)
{
    array[idx] = valor + idx;
}