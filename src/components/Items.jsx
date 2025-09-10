import styles from "./Items.module.css";

function Item({
  name,
  //   img,
  price,
  description,
  onAddToCart,
  onRemoveFromCart,
}) {
  return (
    <div className={styles.item}>
      <h3>{name}</h3>
      {/* <img src={img} alt={name} className={styles.itemImg} /> */}
      <p>{price} $</p>
      <p>{description}</p>
      <div>
        <button className={styles.addBtn} onClick={onAddToCart}>
          Добавить
        </button>
        <button className={styles.removeBtn} onClick={onRemoveFromCart}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default Item;
