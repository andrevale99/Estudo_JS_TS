//Arquivo executado com npm node

var obj1 = 
{
    nome: "andre",
    idade: 23,
    localizacao:
    {
        estado: "RN",
        cidade: "natal"
    },

    func: function()
    {
        console.log('Funçaõ de objeto com chave valor\n');
    },

    func2()
    {
        console.log('Funçaõ de objeto apenas a funcao\n');
    }
}

console.log(Object.keys(obj1));

console.log(obj1);
console.log(obj1.idade)
console.log(obj1.localizacao)
console.log(obj1.localizacao.cidade)

delete obj1.localizacao.cidade;
console.log(obj1.localizacao)

obj1.func();
obj1.func2();

//===================================================
let naveEspacial = {
    tripulacao:  5,
    'Missão Ativa': true,
    trajeto: ['Vênus', 'Marte', 'Saturno']
}

function desativarMissao(obj) {
    obj['Missão Ativa'] = false;
}

let adicionarJupiterNoTrajeto = (obj) => {
    obj.trajeto.push('Júpiter');
}

desativarMissao(naveEspacial);
adicionarJupiterNoTrajeto(naveEspacial);
console.log(naveEspacial); // { tripulacao: 5, 'Missão Ativa': false, trajeto: [ 'Vênus', 'Marte', 'Saturno', 'Júpiter' ] }