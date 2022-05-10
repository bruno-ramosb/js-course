function* geradora(){

    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 2';


}

const g1 = geradora();
console.log(g1.next())
console.log(g1.next())