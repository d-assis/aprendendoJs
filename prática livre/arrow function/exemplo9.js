//No exemplo abaixo, o termo this faz referência ao objeto window, e não ao objeto person instanciado na linha 13
/*
(() => {
    function Person () {
        this.year = 0;

        setInterval(function(){
            this.year = this.year + 1;
            console.log("Qual a referência do this? ", this)
            console.log("Idade: ", this.year)
        }, 2000)
    }

    const p1 = new Person()
})()
*/

//Alternativamente, ao usar arrow functions no lugar de function expression comum, obtemos a referência correta para this.

(() => {
    function Person () {
        this.year = 0;

        setInterval(() => {
            this.year = this.year + 1;
            console.log("Qual a referência do this? ", this)
            console.log("Idade: ", this.year)
        }, 2000)
    }

    const p1 = new Person()
})()
