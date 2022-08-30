import { screaming, whatTheMethod, detailedPreface, detailedAfterword, describeAction } from './decorators'

class Warrior {

    #commonWeapon: string
    #secretWeapon: string
    fightsCount: number = 0

    constructor(commonWeapon: string, secretWeapon: string){
        this.#commonWeapon = commonWeapon
        this.#secretWeapon = secretWeapon
    }

    //@describeAction
    //@screaming
    //@whatTheMethod
    fight(usage){
        this.fightsCount++
        return `${usage} ${this.#commonWeapon}`
    }

    //@describeAction
    //@whatTheMethod
    sneak(usage){
        this.fightsCount++
        return `${usage} ${this.#secretWeapon}`
    }

    //@whatTheMethod
    foo(usage){
        return null
    }

    //@detailedPreface
    //@detailedAfterword
    tell(preface = 'Сказка про богатыря.', afterword = 'Конец.'){
        console.log(preface)
        //console.log(this.sneak('Вынул'))
        console.log(this.fight('Метнул'))
        console.log(afterword)
    }
}

const warrior = new Warrior('копьё', 'кинжал')

warrior.tell()
