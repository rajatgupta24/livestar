import axios from 'axios';
import { useState, useEffect } from 'react';
import Question from '../../components/Question/Question';

const QuizPage = () => {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = async () => {
    try {
      const res = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&category=uncategorized&difficulty=Easy&limit=10`);
      setQuestion(res.data);  
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {
        question.length !== 0 && <Question question={question[0]} />
      }
    </div>
  );
};

export default QuizPage;
