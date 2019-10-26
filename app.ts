//PRIMEIRO EXEMPLO
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
//episode = '4' vai aparecer na tela que o proximo ep é o 41, pois ele executa mesmo sendo variáveis incompativeis
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

//let favoriteDroid declara a variavel como tipo ANY (aceita qualquer tipo de variável)
let favoriteDroid: string
favoriteDroid = 'BB-8'
//favoriteDroid = 10
console.log("My favorite droid is " + favoriteDroid)


//USANDO FUNÇÕES
let isEnoughToBeatMF = function (parsecs: number) : boolean{
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1) : number {
    return speed + inc
}
console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)


//CLASSES E INTERFACES

import {Spacecraft, Containership} from './base-ships'
import {MillenniumFalcon} from './starfighters'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob ( falcon ) ? 'yes': 'no'}`)