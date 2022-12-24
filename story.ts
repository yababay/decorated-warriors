import { Person, Gender } from "./types"

const FAILURE = 'вытянуть не мо'
const FAILURE_PLURAL_SUFFIX = 'гут.'
const FAILURE_SINGULAR_SUFFIX = 'жет.'
const ACTION_SINGLE = 'тянет'
const ACTION_PLURAL = 'тянут'

export default class Story {

    #stack: Person[] = []
    #FINISH: string
    #participants: Person[]

    constructor(persons: Person[]) {
        if(persons.length < 3) throw 'В сказке должно быть не менее трех участников!'
        persons.forEach((pers, i, arr) => {
            if(i > 0) pers.previous = arr[i - 1]
            if(i < arr.length - 1) pers.next = arr[i + 1]
        })
        this.#participants = persons.filter(pers => pers.previous && pers.next)
        const [vegitable] = persons
        this.#FINISH = `вытянули ${vegitable.accusative}!`
    }

    refrain(person: Person): string[]{
        this.#stack.push(person)
        const persons = [...this.#stack]
        persons.reverse()
        const isLast = !person.next || !person.next.next
        const isSingle = this.#stack.length === 1
        const finish = this.#FINISH
        const failure = FAILURE + (isSingle ? FAILURE_SINGULAR_SUFFIX : FAILURE_PLURAL_SUFFIX)
        const result = persons.map(pers => {
            const { previous } = pers
            const persNom = pers.funnyNominative || pers.nominative
            const perevAcc = previous.funnyAccusative || previous.accusative
            return `${persNom} за ${perevAcc},`
        })
        const pull = `${isSingle ? ACTION_SINGLE : ACTION_PLURAL}`
        result.push(`${pull}-по${pull} - ${isLast ? finish : failure}`)
        return result
    }

    preface(): string[]{
        const first = this.#participants[0]
        const firstNom = first.nominative
        const firstGen = first.gender
        const vegitable = first.previous
        const vegNom = vegitable.nominative
        const vegAcc = vegitable.accusative
        const vegGen = vegitable.gender
        let seed: string, become: string, grow: string, big: string
        switch(firstGen){
            case Gender.MALE:
                seed = 'Посадил'
                become = 'Стал'
                break
            case Gender.FEMALE:
                seed = 'Посадила'
                become = 'Стала'
                break
            default: 
            big = 'Стало'
                seed = 'Посадило'
        }
        switch(vegGen){
            case Gender.MALE:
                grow = 'Вырос'
                big = 'большой'
                break
            case Gender.FEMALE:
                grow = 'Выросла'
                big = 'большая'
                break
            default: 
                big = 'Выросло'
                grow = 'большое'
        }
        return [
            `${seed} ${firstNom} ${vegAcc}.`,
            `${grow} ${vegNom} ${big}-пре${big}.`,
            `${become} ${firstNom} ${vegAcc} из земли тянуть.`,
            ...this.refrain(first)
        ]
    }

    scene(person: Person): string[] {
        let call: string
        switch(person.gender){
            case Gender.MALE:
                call = 'Позвал'
                break
            case Gender.FEMALE:
                call = 'Позвала'
                break
            default:
                call = 'Позвало'
        }
        return [
            `\n`,
            `${call} ${person.nominative} ${person.next.accusative}`, 
            ...this.refrain(person.next)
        ]
    }

    tell(){
        console.log([
            ...this.preface(),
            ...this.#participants.reduce((acc, pers, i) => [...acc, ...this.scene(pers)], [])
        ].join('\n'))
    }
}
