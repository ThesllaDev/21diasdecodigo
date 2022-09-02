import Image from "next/image";
import IconCart from "./img/icon-cart.svg";
import ImageAvatar from "./img/image-avatar.png";
import ImageProduct from "./img/image-product.jpg";
import ImageProduct1Thumbnail from "./img/image-product-1-thumbnail.jpg";
import ImageProduct2Thumbnail from "./img/image-product-2-thumbnail.jpg";
import ImageProduct3Thumbnail from "./img/image-product-3-thumbnail.jpg";
import ImageProduct4Thumbnail from "./img/image-product-4-thumbnail.jpg";
import IconMinus from "./img/icon-minus.svg";
import IconPlus from "./img/icon-plus.svg";

import styles from "./challenge-15.module.scss";

export default function ProductPage() {
  return (
    <main className={styles.main}>
      <header>
        <nav>
          <h2>sneakers</h2>
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <Image src={IconCart} alt="Icon cart" />
          <Image src={ImageAvatar} alt="User image avatar" />
        </div>
      </header>
      <section>
        <div className={styles.banner}>
          <Image src={ImageProduct} alt="Image of white shoes" />
          <ul>
            <li>
              <Image src={ImageProduct1Thumbnail} alt="Image of white shoes" />
            </li>
            <li>
              <Image src={ImageProduct2Thumbnail} alt="Image of white shoes" />
            </li>
            <li>
              <Image src={ImageProduct3Thumbnail} alt="Image of white shoes" />
            </li>
            <li>
              <Image src={ImageProduct4Thumbnail} alt="Image of white shoes" />
            </li>
          </ul>
        </div>
        <div className={styles.infos}>
          <h3>sneaker company</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className={styles.current__price}>
            $125.00 <span>50%</span>
          </div>
          <div className={styles.price}>$250.00</div>
          <div className={styles.buttons__options}>
            <div>
              <button>
                <Image src={IconMinus} alt="Minus icon" />
              </button>
              0
              <button>
                <Image src={IconPlus} alt="Plus icon" />
              </button>
            </div>
            <button className={styles.btn__cart}>
              <Image src={IconCart} alt="Icon cart" />
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
