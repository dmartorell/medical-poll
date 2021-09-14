/* eslint-disable camelcase */
export interface iQuestion {
    question_type: string,
    question: string,
    id: number,
    question_category: string,
    given_answer: {
        choices1: string[],
        choices2?: string[] | null,
    },
    project_id: number
}

export interface iQuestionCard {
    [index: string] : {imgSrc: string, questions: iQuestion | null, textIntro: string}
}
