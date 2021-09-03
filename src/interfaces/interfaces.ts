/* eslint-disable camelcase */
export interface iQuestion {
    question_type: string,
    question: string,
    given_answer: {
        choices1: string[],
        choices2: string[] | null
    }
}

export interface iQuestionCard {
    [index: string] : {imgSrc: string, questions: iQuestion | null, textIntro: string}
}
