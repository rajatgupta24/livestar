import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.left}>
        <h1>Hello Quizz</h1>
        <ul>
          <li>LeaderBoard</li>
          <li>Get Involved</li>
        </ul>
      </div>
      <div className={styles.right}>
        <button>Play Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
