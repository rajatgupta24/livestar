import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Question = (props) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getOptions();
  }, []);

  const getOptions = () => {
    let arr = [];
    props.question.answers.answer_a !== null && arr.push(props.question.answers.answer_a);
    props.question.answers.answer_b !== null && arr.push(props.question.answers.answer_b);
    props.question.answers.answer_c !== null && arr.push(props.question.answers.answer_c);
    props.question.answers.answer_d !== null && arr.push(props.question.answers.answer_d);
    props.question.answers.answer_e !== null && arr.push(props.question.answers.answer_e);
    props.question.answers.answer_f !== null && arr.push(props.question.answers.answer_f);
    setOptions(arr);
  };

  return (
    <div className={styles.questionBox}>
      <p className={styles.question}>{props.question.question}</p>
      <ol className={styles.options}>
        {
          options.length !== 0 && (
            options.map((option, i) => {
              return (
                <li className={styles.option} key={i}>{option}</li>
              )
            })
          )
        }
      </ol>
    </div>
  );
};

export default Question;
