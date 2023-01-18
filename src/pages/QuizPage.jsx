import { useState } from 'react';
import { mcqQuestions } from '../DB/quizData';
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// MAIN UI FUNCTION //////////////////////////////
export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < mcqQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      {showScore ? (
        <div>
          You scored {score} out of {mcqQuestions.length}
        </div>
      ) : (
        <>
          <div>
            <div>
              <span>Question {currentQuestion + 1}</span>/{mcqQuestions.length}
            </div>
            <div>{mcqQuestions[currentQuestion].questionText}</div>
          </div>
          <div>
            {mcqQuestions[currentQuestion].answerOptions.map(answerOption => (
              <button key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
