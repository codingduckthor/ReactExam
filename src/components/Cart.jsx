import styles from "../components/Cart.module.css";

function CartModal({ cart, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Корзина</h2>
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <ul className={styles.cartList}>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} — {item.price} $
                </li>
              ))}
            </ul>
            <h3>Общая сумма: {total} $</h3>
          </>
        )}
        <button className={styles.closeBtn} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default CartModal;
