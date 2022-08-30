import { screaming } from './decorators'

class Warrior {

    #weapon: string

    constructor(weapon: string){
        this.#weapon = weapon
    }

    @screaming
    fights(usage){
        console.log(`${usage} ${this.#weapon}`)
    }
}

const warrior = new Warrior('копьё')

warrior.fights('Вонзает')
warrior.fights('Бросает')

