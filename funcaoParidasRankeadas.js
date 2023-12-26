const partidas = {
    vitorias: 100,
    derrotas: 20
}

let saldo = partidas.vitorias - partidas.derrotas;

const ranks = (nivel) => {
    
    if (nivel === 10) {
        return 'ferro!'
    }

    if (nivel >= 11 && nivel <= 20) {
        return 'bronze!'
    }

    if (nivel >= 21 && nivel <= 50) {
        return 'prata!'
    }

    if (nivel >= 51 && nivel <= 80) {
        return 'ouro!'
    }

    if (nivel >= 81 && nivel <= 90) {
        return 'diamante!'
    }

    if (nivel >= 91 && nivel <= 100) {
        return 'lendário!'
    }

    if (nivel >= 101) {
        return 'imortal!'
    }
}

resultado = ranks(saldo);
console.log(`O Herói tem de saldo de ${saldo} está no nível de ${resultado}`);