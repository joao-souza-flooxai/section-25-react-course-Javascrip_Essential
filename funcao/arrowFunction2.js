function Pessoa() {
    this.idade = 0;

    //Usando arrow function preserva-se o contexto do this(Pessoa), então não precisa de bind ou self.
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa();