"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto("Bolsa amarela", 179);
console.log(livro.precoReal());
