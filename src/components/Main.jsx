import styles from "../components/Main.module.css";
import Item from "./Items.jsx";
// import iphoneImg from "../assets/iphone.svg";
// import SamsungImg from "../assets/samsung.svg";
// import XiaomiImg from "../assets/xiaomi.svg";
// import SonyImg from "../assets/sony.svg";
// import HuaweiImg from "../assets/huawei.svg";
// import PixelImg from "../assets/pixel.svg";
// import NokiaImg from "../assets/nokia.svg";
// import MotorolaImg from "../assets/motorola.svg";
// import LGImg from "../assets/lg.svg";

function Main({ addToCart, removeFromCart }) {
  const products = [
    {
      id: 1,
      name: "Iphone",
      //   img: iphoneImg,
      price: 1200,
      description:
        "iPhone — это сочетание стильного дизайна и высокой производительности. Смартфон отличается камерой профессионального уровня и плавной работой системы. Идеально подходит для работы и развлечений.",
    },
    {
      id: 2,
      name: "Samsung",
      //   img: SamsungImg,
      price: 1000,
      description:
        "Серия Samsung Galaxy предлагает яркий экран и мощный аккумулятор. Камера позволяет делать чёткие снимки даже в темноте. Отличный выбор для тех, кто ценит инновации.",
    },
    {
      id: 3,
      name: "Xiaomi",
      //   img: XiaomiImg,
      price: 800,
      description:
        "Xiaomi сочетает доступную цену и хорошие технические характеристики. Подходит для игр, работы и повседневного использования. Отличное соотношение цены и качества.",
    },
    {
      id: 4,
      name: "Sony",
      //   img: SonyImg,
      price: 950,
      description:
        "Sony Xperia славится своей аудиосистемой и качеством изображения. Смартфон подойдёт для любителей музыки и фильмов. Прочный корпус делает его надёжным спутником.",
    },
    {
      id: 5,
      name: "Huawei",
      //   img: HuaweiImg,
      price: 870,
      description:
        "Huawei предлагает отличное качество связи и высокую автономность. Камеры с искусственным интеллектом позволяют делать профессиональные фотографии. Поддерживает новейшие технологии.",
    },
    {
      id: 6,
      name: "Pixel",
      //   img: PixelImg,
      price: 1100,
      description:
        "Google Pixel известен своей камерой с уникальными алгоритмами обработки. Чистая версия Android обеспечивает быстрые обновления. Отличный выбор для ценителей фотографий.",
    },
    {
      id: 7,
      name: "Nokia",
      //   img: NokiaImg,
      price: 600,
      description:
        "Nokia — это надёжность и простота использования. Смартфон имеет прочный корпус и длительное время работы от батареи. Хороший вариант для повседневных задач.",
    },
    {
      id: 8,
      name: "Motorola",
      //   img: MotorolaImg,
      price: 500,
      description:
        "Motorola сочетает компактный дизайн и функциональность. Отличается чистым интерфейсом и высокой скоростью работы. Подходит для активного образа жизни.",
    },
    {
      id: 9,
      name: "LG",
      //   img: LGImg,
      price: 700,
      description:
        "LG предлагает качественные дисплеи и сбалансированные характеристики. Удобный интерфейс и хороший звук делают его универсальным решением. Подходит для работы и развлечений.",
    },
  ];

  return (
    <>
      <div className={styles.grid}>
        {products.map((p) => (
          <Item
            key={p.id}
            name={p.name}
            // img={p.img}
            price={p.price}
            description={p.description}
            onAddToCart={() => addToCart(p)}
            onRemoveFromCart={() => removeFromCart(p.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Main;
