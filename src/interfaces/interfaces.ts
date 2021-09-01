export interface iQuestion {
    questionType: string,
    question: string,
    givenAnswer: {
        choices1: string[],
        choices2: string[] | null
    }
}

export interface iQuestionCard {
    [index: string] : {imgSrc: string, questions: iQuestion | null}
}
