// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 
//     'sexta', 'sábado'];
//   return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho', 
//     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//   return meses[numeroMes];
// }

// function zeroAEsquerda (num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
//     ` de ${data.getFullYear()} ` + 
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//   );
// }

// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
const data = new Date();

let date = new Date();
let options = { year: 'numeric', month: '2-digit', day: '2-digit' };


h1.innerHTML = date.toLocaleDateString('pt-BR', options)
