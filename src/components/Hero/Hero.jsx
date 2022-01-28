// import Shape from "../../assets/svgs/shape.svg";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>

        <h1><span className={styles.highText}>Lorem ipsum dolor</span></h1>
        <h1> sit amet, consectetur adipisicing elit. Possimus, nobis!</h1>
        <div className={styles.center}>
          <img className={styles.img1} src="/assets/questions.svg" alt="" />
          <img className={styles.img2} src="/assets/answer.svg" alt="" />
        </div>
    </div>
  );
};

export default Hero;
