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

    alunos.forEach(show_wit_foreach);

    alunos.forEach(e => console.log("6: " + e));

    var new_alunos = alunos.map(new_array_with_map);
    new_alunos.forEach(e=>console.log("7: " +e));
}

function adicionar(valor, idx, array)
{
    array[idx] = valor + idx;
}

function show_wit_foreach(valor)
{
    console.log("5: " + valor);
}

function new_array_with_map(valor, idx, array)
{
    return valor - array[idx];
}