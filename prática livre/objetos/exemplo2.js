let personagem = {
    nome: 'jazal',
    raça: 'khajiit',
    classe: 'nightblade',
    equipamento: {
        armadura: 'média',
        armas: ['adagas', 'arco']
    },
    habilidades: [{
        nome: 'surprise attack',
        dano: 1000,
        arvore: 'shadow',
    },{
        nome: 'teleport strike',
        dano:250,
        arvore:'assassination',
    }],
    // como referencio uma das habilidades como parâmetro do método abaixo?
    usarHabilidade: function(h){
        return `${this.nome} usou ${h.nome} e causou ${h.dano} de dano!`
    }
};

// console.log(personagem.habilidades[0].nome)
console.log(personagem.usarHabilidade(personagem.habilidades[0]));