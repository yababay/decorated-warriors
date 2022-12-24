interface Person {
    nominative: string
    accusative: string
    previous?: Person
    next?: Person
}

const sarlakk: Person = {nominative: 'Сарлакк', accusative: 'Сарлакка'}
const dart: Person = {nominative: 'Дарт Вейдер', accusative: 'Дарта Вейдера'} 
const luk: Person = {nominative: 'Люк Скайуокер', accusative: 'Люка Скайуокера'} 
const lea: Person = {nominative: 'Лея Органа', accusative: 'Лею Органу'} 
const jabba: Person = {nominative: 'Джабба Хатт', accusative: 'Джаббу Хатта'} 
const han: Person = {nominative: 'Хан Соло', accusative: 'Хана Соло'} 
const chui: Person = {nominative: 'Чубакка', accusative: 'Чубакку'} 

const persons = [sarlakk, dart, luk, lea, jabba, han, chui]

persons.forEach((pers, i, arr) => {
    if(i > 0) pers.previous = arr[i - 1]
    if(i < arr.length - 1) pers.next = arr[i + 1]
})

const participants = persons.filter(pers => pers.previous && pers.next)
const [vegitable, first] = persons
const [preLast, last] = persons.slice(-2)
last.previous = preLast

console.log(
    participants.reduce((acc, pers, i, arr) => [
        ...acc,
        '\n',
        ...(participants.filter((_, j) => j <= i).map(p => `${p.nominative} за ${p.previous.accusative}`).reverse()),
        'тянут-потянут, вытянуть не могут.',
        '\n',
        `Позвал ${pers.nominative} ${pers.next.accusative}`,
        ...(
            i === arr.length - 1 
            ? 
            [...participants, last].map(p => `${p.nominative} за ${p.previous.accusative}`).reverse()
            :
            []
        )
    ], [`Посадил ${first.nominative} ${vegitable.accusative}.`]).join('\n') + `\nтянут-потянут, вытянули ${vegitable.accusative}!`
)
