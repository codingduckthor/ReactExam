import styles from "../components/Header.module.css";

function Header({ onCartClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <h1 className={styles.title}>Для экзамена</h1>
      <button className={styles.cartBtn} onClick={onCartClick}>
        Корзина
      </button>
    </header>
  );
}

export default Header;
