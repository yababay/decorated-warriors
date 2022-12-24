export enum Gender {
    MALE,
    FEMALE,
    NEUTRAL
}

export interface Person {
    nominative: string
    accusative: string
    gender: Gender
    previous?: Person
    next?: Person
    funnyNominative?: string
    funnyAccusative?: string
}
