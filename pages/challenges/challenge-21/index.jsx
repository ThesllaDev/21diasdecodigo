import Image from "next/image";
import ImageProfile from "./img/me.jpg";
import IconCSS from "./img/css3.svg";
import IconGitHub from "./img/github.svg";
import IconHTML from "./img/html5.svg";
import IconJS from "./img/javascript.svg";
import IconLinkedIn from "./img/linkedin.svg";
import IconReact from "./img/react.svg";
import IconSASS from "./img/sass.svg";

import styles from "./challenge-20.module.scss";

export default function MyPortfolio() {
  return (
    <main className={styles.main}>
      <header>
        <h1>Sobre Min</h1>
        <div className={styles.infos}>
          <Image
            src={ImageProfile}
            width={170}
            height={170}
            alt="My image profile"
          />
          <p>
            Oi! Meu nome é Thalles Augusto, estou em constante evolução para me
            tornar um desenvolvedor web com foco em front-end e em busca de uma
            oportunidade na área. Sou esforçado, gosto de desafios, amo e tenho
            muitos interesses em tecnologia e estou sempre em busca de ser uma
            pessoa melhor.
          </p>
          <h2>Entre em contato</h2>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/thalles-augusto/">
            <Image
              src={IconLinkedIn}
              width={50}
              height={50}
              alt="Icon LinkedIn"
            />
          </a>
          <a href="https://github.com/ThesllaDev/">
            <Image src={IconGitHub} width={50} height={50} alt="Icon GitHub" />
          </a>
        </div>
      </header>
      <section className={styles.skills}>
        <h2>Habilidades</h2>
        <Image src={IconHTML} width={50} height={50} alt="Icon HTML" />
        <Image src={IconCSS} width={50} height={50} alt="Icon CSS" />
        <Image src={IconSASS} width={50} height={50} alt="Icon SASS" />
        <Image src={IconJS} width={50} height={50} alt="Icon JS" />
        <Image src={IconReact} width={50} height={50} alt="Icon React" />
      </section>
      <section className={styles.projects}>
        <h2>Projetos</h2>
        <a href="https://github.com/ThesllaDev/Simple-Projects">
          <h3>Simple Projects</h3>
          <p>
            Repositório de projetos simples feitos com HTML, CSS e JavaScript
            puro para estudo e prática
          </p>
        </a>
        <a href="https://github.com/ThesllaDev/30DiasDeCSS-SASS">
          <h3>30 Dias De CSS/SASS</h3>
          <p>
            Desafio para criar 30 mini projetos utilizando HTML, CSS e SASS em
            30 dias
          </p>
        </a>
        <a href="https://github.com/ThesllaDev/21diasdecodigo">
          <h3>21 Dias De Código</h3>
          <p>
            Este é um desafio proposto em um post pela Rocketseat e a @jakeliny
            para codar pelo menos 1 hora por dia, durante 21 dias
          </p>
        </a>
      </section>
    </main>
  );
}
