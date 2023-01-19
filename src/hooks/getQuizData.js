import { useEffect, useState } from 'react';
import axios from 'axios';

// FETCH QUESTONS HOOK, SAVE TO REDUX STORE.
export const useGetQuizData = () => {
  const [quizData, setQuizData] = useState(null);
  const [quizLoading, setQuizLoading] = useState(true);
  const [quizError, setQuizError] = useState(null);

  useEffect(() => {
    const getQuizData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/KareemAbo3id/sff-accounting-quiz/master/src/DB/quizData.json'
        );
        setQuizData(response.data);
        setQuizError(null);
        setQuizLoading(false);
      } catch (err) {
        setQuizError(err.message);
        setQuizData(null);
      } finally {
        setQuizLoading(false);
      }
    };
    getQuizData();
  }, [quizLoading]);

  return [quizData, quizLoading, quizError, setQuizData];
};
