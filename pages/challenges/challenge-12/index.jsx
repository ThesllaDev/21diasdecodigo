import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import CoverAEsperaDeUmMilage from "./img/cover-a-espera-de-um-milagre.jpg";
import CoverBreakingBad from "./img/cover-breaking-bad.jpg";
import CoverCidadeDeDeus from "./img/cover-cidade-de-deus.jpg";
import CoverDrHouse from "./img/cover-dr.house.jpg";
import CoverGameOfThrones from "./img/cover-game-of-thrones.jpg";
import CoverLaCasaDePapel from "./img/cover-la-casa-de-papel.jpg";
import CoverMrRobot from "./img/cover-mr.robot.jpg";
import CoverNarutoShippuden from "./img/cover-naruto-shippuden.jpg";
import CoverOPoderosoChefao from "./img/cover-o-poderoso-chefao.jpg";
import CoverPeakyBlinders from "./img/cover-peaky-blinders.jpg";
import CoverRickyAndMorty from "./img/cover-ricky-and-morty.jpg";
import CoverSenhorDosAneis from "./img/cover-senhor-dos-aneis.jpg";
import CoverSlamDunk from "./img/cover-slam-dunk.jpg";
import CoverVingadoresUlimato from "./img/cover-vingadores-ultimato.jpg";

export default function ImageGallery() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <main>
      <section>
        <Carousel
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <Image
              src={CoverAEsperaDeUmMilage}
              alt="Cover A espera de um milagre"
            />
          </div>
          <div>
            <Image src={CoverBreakingBad} alt="Cover Breaking Bad" />
          </div>
          <div>
            <Image src={CoverCidadeDeDeus} alt="Cover Cidade de Deus" />
          </div>
          <div>
            <Image src={CoverDrHouse} alt="Cover Cover Dr.House" />
          </div>
          <div>
            <Image src={CoverGameOfThrones} alt="Cover Game of Thrones" />
          </div>
          <div>
            <Image src={CoverLaCasaDePapel} alt="Cover La casa de papel" />
          </div>
          <div>
            <Image src={CoverMrRobot} alt="Cover MrRobot" />
          </div>
        </Carousel>
      </section>

      <section>
        <Carousel
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <Image src={CoverNarutoShippuden} alt="Cover Naruto Shippuden" />
          </div>
          <div>
            <Image src={CoverOPoderosoChefao} alt="Cover O Poderoso Chefao" />
          </div>
          <div>
            <Image src={CoverPeakyBlinders} alt="Cover Peaky Blinders" />
          </div>
          <div>
            <Image src={CoverRickyAndMorty} alt="Cover Ricky and Morty" />
          </div>
          <div>
            <Image src={CoverSenhorDosAneis} alt="Cover Senhor dos aneis" />
          </div>
          <div>
            <Image src={CoverSlamDunk} alt="Cover Slam Dunk" />
          </div>
          <div>
            <Image
              src={CoverVingadoresUlimato}
              alt="Cover Vingadores ultimato"
            />
          </div>
        </Carousel>
      </section>
    </main>
  );
}
