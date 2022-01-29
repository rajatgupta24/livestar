import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.left}>
        <h1>Hello Quizz</h1>
        <ul className={styles.navList}>
          <li className={styles.navItems}>LeaderBoard</li>
          <li className={styles.navItems}>Get Involved</li>
        </ul>
      </div>
      <div className={styles.right}>
        <button className={styles.navBtn}><a href="/quiz">Play Now</a></button>
      </div>
    </nav>
  );
};

export default Navbar;
