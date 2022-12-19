interface Parents {
    male: Person
    female: Person
}

interface Person {
    nominative: string
    genetive: string
}

const grandfather: Person = {nominative: 'Дед', genetive: 'Дедушки'}
const grandmother: Person = {nominative: 'Баба', genetive: 'Бабушки'}
const hare: Person = {nominative: 'Заяц', genetive: 'Зайца'}
const wolf: Person = {nominative: 'Волк', genetive: 'Волка'}
const bear: Person = {nominative: 'Медведь', genetive: 'Медведя'}
const fox:  Person = {nominative: 'Лиса', genetive: 'Лисы'}

class KolobokStory {
    
    #parents: Parents
    #persons: Person[]
    #hero: string
    #deceived: Person[] = [grandfather, grandmother]

    constructor(hero = 'Колобок', parents = {male: grandfather, female: grandmother}, persons = [hare, wolf, bear, fox]){
        this.#hero = hero
        this.#parents = parents
        this.#persons = persons
    }

    get hero(){
        return this.#hero
    }

    preface(): string[]{
        const {male, female} = this.#parents
        return [
            `Жили-были ${male.nominative} и ${female.nominative}. Просит ${male.nominative}:`,
            `— Испеки, ${female.nominative}, ${this.#hero}!`,
            `— Из чего печь — то? Муки нету, — отвечает ему ${female.nominative}.`,
            `— Э — эх, ${female.nominative}! По коробу поскреби, по сусеку помети; авось муки и наберется.`,
            `Взяла ${female.nominative} крылышко, по коробу поскребла, по сусеку помела, и набралось муки пригоршни с две.`,
            `Замесила на сметане, изжарила в масле и положила на окошечко постудить.`,
            `${this.#hero} полежал — полежал, да вдруг и покатился — с окна на лавку, с лавки на пол, по полу да к дверям,`, 
            `перепрыгнул через порог в сени, из сеней на крыльцо, с крыльца — на двор, со двора за ворота, дальше и дальше.`
        ]
    }

    whomDidHeDeceive(person: Person): string[]{
        const verse = this.#deceived.map(who => `Я от ${who.genetive} ушел,`)
        this.#deceived.push(person)
        return verse
    }

    upshot(person: Person): string[]{
        return [
            `— Какая славная песенка! — говорит ${person.nominative}. — Но ведь я, ${this.#hero}, стара стала, плохо слышу; сядь-ка на мою мордочку да пропой еще разок погромче.`,
            `${this.#hero} вскочил на мордочку и запел ту же песню.`,
            `А ${person.nominative} его ам-ням-ням!`
        ]
    }

    scene(person: Person, hasEaten: boolean = false): string[]{
        const episode = [
            `\n`,
            `Катится ${this.#hero} по дороге, а навстречу ему ${person.nominative}:`,
            `— ${this.#hero}, ${this.#hero}! Я тебя съем.`,
            `— Не ешь меня, ${person.nominative}! Я тебе песенку спою, — сказал ${this.#hero} и запел:`,
            `Я ${this.#hero}, ${this.#hero}!`,
            `Я по коробу скребен,`,
            `По сусеку метен,`,
            `На сметане мешон,`,
            `Да в масле пряжон,`,
            `На окошке стужон;`,
            ...this.whomDidHeDeceive(person),
            `И от тебя, ${person.genetive}, не хитро уйти!`
        ]
        if (hasEaten) episode.push(...this.upshot(person))
        return episode
    }

    tale(){
        const lastPerson = this.#persons.length -1
        console.log([
            ...this.preface(), 
            ...this.#persons.reduce((acc, person, i) => [...acc, ...this.scene(person, i === lastPerson)], [])
        ].join('\n'))
    }
}

const story = new KolobokStory()
story.tale()
