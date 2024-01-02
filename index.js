class criarHeroi{

    //criando as propriedades da classe
    constructor (nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }

    //criando o método atacar
    atacar(){
        if (this.tipoHeroi === "mago"){
            this.ataque = "magia"
        } else if (this.tipoHeroi === "guerreiro"){
            this.ataque = "espada"
        } else if (this.tipoHeroi === "monge"){
            this.ataque = "artes marciais"
        } else if (this.tipoHeroi === "ninja"){
            this.ataque = "shuriken"
        } else {
            this.ataque = "habilidades variadas"
        }
        
        //após determinar o tipo de ataque, mostrar a mensagem
        console.log(`O ${this.tipoHeroi} atacou usando ${this.ataque}.`)
    }
}

percyJackson = new criarHeroi("Percy Jackson", 17, "guerreiro") //instanciando o objeto
percyJackson.atacar() //chamando o método atacar