const pessoa = {
  nome: 'Bruno',
  sobrenome: 'Ramos',
  idade: 22,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);
