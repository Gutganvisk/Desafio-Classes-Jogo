class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
        }
        console.log(`O ${this.nome} atacou usando ${ataque}`);
    }
}

let hero1 = new Heroi("Gutganvisky", 23, "mago");
let hero2 = new Heroi("Endriusbar", 24, "guerreiro");
let hero3 = new Heroi("BigBig", 24, "monge");
let hero4 = new Heroi("EODesign", 25, "ninja");

hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();
