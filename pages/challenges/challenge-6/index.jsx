import Image from "next/image";
import EquilibriumNFT from "./img/equilibrium.jpg";
import CreatorAvatar from "./img/creator-avatar.png";
import IconEthereum from "./img/icon-ethereum.svg";
import IconClock from "./img/icon-clock.svg";

import styles from "./challenge-06.module.scss";
import HeaderProject from "../../../components/HeaderProject";

export default function NFTCard() {
  return (
    <>
      <HeaderProject id="06" title="Crie um card com o efeito glassmorphism" />
      <main className={styles.main__container}>
        <section className={styles.main__container__card}>
          <figure>
            <Image src={EquilibriumNFT} alt="Cube equilibrium" />
            <figcaption>Equilibrium #3429</figcaption>
          </figure>
          <header className={styles.main__container__card__description}>
            Our Equilibrium collection promotes balance and calm.
          </header>
          <section className={styles.main__container__card__infos}>
            <span className={styles.main__container__card__infos__crypto}>
              <Image src={IconEthereum} alt="Icon of ethereum" /> 0.041 ETH
            </span>
            <span className={styles.main__container__card__infos__time}>
              <Image src={IconClock} alt="Icon of clock" /> 3 days left
            </span>
          </section>
          <hr />
          <footer className={styles.main__container__card__creator}>
            <div className={styles.main__container__card__creator__avatar}>
              <Image src={CreatorAvatar} alt="NFT creator avatar profile" />
            </div>
            <h2 className={styles.main__container__card__creator__about}>
              Creation of <a href="#">Jules Wyvern</a>
            </h2>
          </footer>
        </section>
      </main>
    </>
  );
}
