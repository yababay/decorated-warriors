import { Person, Gender } from "./types"

const repka:  Person = {nominative: 'репка', accusative: 'репку', gender: Gender.FEMALE}
const dedka:   Person = {
    nominative: 'Дед', 
    accusative: 'Дедку', 
    funnyNominative: 'Дедка', 
    funnyAccusative: 'Дедку', 
    gender: Gender.MALE
}
const babka:   Person = {nominative: 'Бабка',  accusative: 'Бабку',  gender: Gender.FEMALE}
const vnuchka: Person = {nominative: 'Внучка', accusative: 'Внучку', gender: Gender.FEMALE}
const suchka:  Person = {nominative: 'Жучка',  accusative: 'Жучку',  gender: Gender.FEMALE}
const koshka:  Person = {nominative: 'Кошка',  accusative: 'Кошку',  gender: Gender.FEMALE}
const myshka:  Person = {nominative: 'Мышка',  accusative: 'Мышку',  gender: Gender.FEMALE}

export default [repka, dedka, babka, vnuchka, suchka, koshka, myshka]
