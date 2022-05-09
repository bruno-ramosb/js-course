(function(idade,peso,altura){

    const sobrenome = 'Ramos';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Bruno'));
    }

    falaNome();
    console.log(idade,peso,altura)
})(22,76,1.70);