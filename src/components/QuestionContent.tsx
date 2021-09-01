import React, { FC } from 'react';

import { iQuestion } from '../interfaces/interfaces';

type Props = {
  questions: iQuestion[] | null
};
const QuestionContent: FC<Props> = ({ questions }) => (
  <p>Hello</p>
    );

export default QuestionContent;
