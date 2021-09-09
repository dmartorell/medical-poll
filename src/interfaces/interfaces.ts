/* eslint-disable camelcase */
export interface iQuestion {
    question_type: string,
    question_category: string | null,
    question: string,
    id: number
    given_answer: {
        choices1: string[],
        choices2?: string[] | null,
    }
}

export interface iQuestionCard {
    [index: string] : {imgSrc: string, questions: iQuestion | null, textIntro: string}
}
