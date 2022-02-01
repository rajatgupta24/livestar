import axios from 'axios';
import { useState, useEffect } from 'react';
// import Question from '../../components/Question/Question';
import styles from "./styles.module.css";

const QuizPage = () => {

  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getQuestion();
  }, []);

  useEffect(() => {
    getOptions();
  }, [question, currentIndex])

  const getQuestion = async () => {
    try {
      const res = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_KEY}&category=Linux&difficulty=Easy&limit=10`);
      setQuestion(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getOptions = () => {
    let arr = [];
    if (question.length > 0){
      question[currentIndex].answers.answer_a !== null && arr.push(question[currentIndex].answers.answer_a);
      question[currentIndex].answers.answer_b !== null && arr.push(question[currentIndex].answers.answer_b);
      question[currentIndex].answers.answer_c !== null && arr.push(question[currentIndex].answers.answer_c);
      question[currentIndex].answers.answer_d !== null && arr.push(question[currentIndex].answers.answer_d);
      question[currentIndex].answers.answer_e !== null && arr.push(question[currentIndex].answers.answer_e);
      question[currentIndex].answers.answer_f !== null && arr.push(question[currentIndex].answers.answer_f);
  
      question[currentIndex].correct_answer === "answer_a" && setCorrectAnswer(0);
      question[currentIndex].correct_answer === "answer_b" && setCorrectAnswer(1);
      question[currentIndex].correct_answer === "answer_c" && setCorrectAnswer(2);
      question[currentIndex].correct_answer === "answer_d" && setCorrectAnswer(3);
      question[currentIndex].correct_answer === "answer_e" && setCorrectAnswer(4);
      question[currentIndex].correct_answer === "answer_f" && setCorrectAnswer(5);
      
      setOptions(arr);
    }
  };

  const checkAnswer = () => {
    console.log("correct", correctAnswer)
    console.log("select", answer)

    if (correctAnswer === answer) console.log("right +++++++");
    else console.log("wrong -------")

    // if (correctAnswer === null || answer === null) return;

    // else if (correctAnswer === answer) {
    //   console.log("correct");
      
    //   getOptions();

    // }

    if(currentIndex <= 9) {
      console.log(currentIndex)
      setCurrentIndex(currentIndex+1);
    }
    else {
      console.log("game OVERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
    }
  }

  return (
    <div className={styles.box}>
      {currentIndex}

      {
        question.length !== 0 && <p>{question[currentIndex].question}</p>
      }
      
      {
        options.length !== 0 && (
          options.map((option, i) => 
            <li onClick={() => setAnswer(i)} className={styles.option} key={i}>{option}</li>
          )
        )
      }

      <div className={styles.btns}>
        <button onClick={checkAnswer} className={styles.checkBtn}>Check</button>
      </div>
    </div>
  );
};

export default QuizPage;
