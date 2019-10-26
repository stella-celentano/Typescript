class Spacecraft {

    constructor (public propulsor: string){}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`) //precisa usar o this por estar utilizando um membro da instancia dentro da classe
    }
}

interface Containership { //n tem uma estrutura que represente em js

    cargoContainers: number //colocando uma ? na frente do atributo ou metodo ele se torna opcional
}


export {Spacecraft, Containership} //exporta de uma vez so os dois tipos personalizados