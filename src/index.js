class Heroi {
    constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
        }
     
atacar() {
    let ataque;

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

    return(`O ${this.tipo} atacou usando ${ataque}`);
}
}


let heroi1 = new Heroi("Xena", 34, "guerreiro");
let heroi2 = new Heroi("Gabrielle", 25, "mago");

console.log(heroi1.atacar());
console.log(heroi2.atacar());