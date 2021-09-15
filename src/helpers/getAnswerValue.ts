import { FC } from 'react';

type Props = {
    array: string[],
    isDesc: boolean,
    index: any
};
const getAnswerValue: FC<Props> = ({ array, isDesc, index }) => {
    if (isDesc) {
      return (array.length - 1) - index;
    }
      return index;
};

export default getAnswerValue;
