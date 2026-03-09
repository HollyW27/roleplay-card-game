function QuestionOrderRandomiser(sizeOfSet: number): Array<number> {
  const randomQuestionOrderArray = new Array<number>();
  for (let i = 1; i < sizeOfSet + 1; i++) {
    randomQuestionOrderArray.push(i);
  }

  for (let i = randomQuestionOrderArray.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomQuestionOrderArray[i], randomQuestionOrderArray[j]] = [
      randomQuestionOrderArray[j],
      randomQuestionOrderArray[i],
    ];
  }
  return randomQuestionOrderArray;
}
export default QuestionOrderRandomiser;
