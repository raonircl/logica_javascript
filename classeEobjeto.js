class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === 'mago') {
            ataque = 'usou magia de fogo';
        }

        if (this.tipo === 'guerreiro') {
            ataque = 'usou espeda sangrenta';
        }

        if (this.tipo === 'monge') {
            ataque = 'usou chute mortal';
        }

        if (this.tipo === 'ninja') {
            ataque = 'usou golpe das sombras';
        }

        return `${this.nome} - O ${this.tipo} atacou usando ${ataque}`;
    }
}

const heroi1 = new heroi('Arky', 18, 'guerreiro');
console.log(heroi1.atacar());

const heroi2 = new heroi('Gorlfil', 24, 'mago');
console.log(heroi2.atacar());

const heroi3 = new heroi('Thruth', 54, 'monge');
console.log(heroi3.atacar());

const heroi4 = new heroi('Kataru', 29, 'ninja');
console.log(heroi4.atacar());
