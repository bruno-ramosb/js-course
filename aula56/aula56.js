function criaPessoa(nome, sobrenome, altura,peso){
    return {
        nome,
        sobrenome,
        altura: altura,
        peso: peso,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ')

        },

        fala(assunto) {
            return `${nome} está falando sobre ${assunto}.`;
        },
      
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const pessoa = criaPessoa('Bruno','Ramos',1.70,76);
console.log(pessoa.nomeCompleto);
console.log(pessoa.imc());