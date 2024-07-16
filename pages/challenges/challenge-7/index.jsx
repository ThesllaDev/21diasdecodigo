import { useEffect, useState } from "react";

import Head from "next/head";

import Image from "next/image";
import FacebookIcon from "./img/icon-facebook.svg";
import PinterestIcon from "./img/icon-pinterest.svg";
import InstagramIcon from "./img/icon-instagram.svg";

import styles from "./challenge-07.module.scss";
import HeaderProject from "../../../components/HeaderProject";

export default function Countdown() {
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [numberOfHours, setNumberOfHours] = useState(0);
  const [numberOfMinutes, setNumberOfMinutes] = useState(0);
  const [numberOfSeconds, setNumberOfSeconds] = useState(0);

  const now = new Date().getTime();

  const arbitraryNumber = 8 * 24 * 60 * 60 * 1000;
  const targetDate = now + arbitraryNumber;

  useEffect(() => {
    let x = setInterval(() => {
      const now2 = new Date().getTime();

      const distance = targetDate - now2;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setNumberOfDays(days);
      setNumberOfHours(hours);
      setNumberOfMinutes(minutes);
      setNumberOfSeconds(seconds);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap" />
        <title>Launch countdown timer | Frontend Mentor</title>
      </Head>

      <HeaderProject id="07" title="Desenvolva um contador" />
      <main className={styles.countdown}>
        <header>
          <h1>We&apos;re launching soon</h1>
        </header>

        <section>
          <div>
            <span className={styles.countdown__time}>
              <span className={styles.countdown__time__top}>
                {numberOfDays.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </span>
              <span className={styles.countdown__time__top__back}>
                <span>00</span>
              </span>
              <span className={styles.countdown__time__bottom}>
                {numberOfDays.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </span>
              <span className={styles.countdown__time__bottom__back}>
                <span>00</span>
              </span>
            </span>
            <h2>Days</h2>
          </div>

          <div>
            <span className={styles.countdown__time}>
              <span className={styles.countdown__time__top}>
                {numberOfHours.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </span>
              <span className={styles.countdown__time__top__back}>
                <span>00</span>
              </span>
              <span className={styles.countdown__time__bottom}>
                {numberOfHours.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </span>
              <span className={styles.countdown__time__bottom__back}>
                <span>00</span>
              </span>
            </span>
            <h2>Hours</h2>
          </div>

          <div>
            <span className={styles.countdown__time}>
              <span className={styles.countdown__time__top}>
                {numberOfMinutes.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </span>
              <span className={styles.countdown__time__top__back}>
                <span>00</span>
              </span>
              <span className={styles.countdown__time__bottom}>
                {numberOfMinutes.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </span>
              <span className={styles.countdown__time__bottom__back}>
                <span>00</span>
              </span>
            </span>
            <h2>Minutes</h2>
          </div>

          <div>
            <span className={styles.countdown__time}>
              <span className={styles.countdown__time__top}>
                {numberOfSeconds.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </span>
              <span className={styles.countdown__time__top__back}>
                <span>00</span>
              </span>
              <span className={styles.countdown__time__bottom}>
                {numberOfSeconds.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </span>
              <span className={styles.countdown__time__bottom__back}>
                <span>00</span>
              </span>
            </span>
            <h2>Seconds</h2>
          </div>
        </section>

        <footer>
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://github.com/ThesllaDev"
              aria-label="Perfil no GitHub de ThesllaDev"
              rel="noopener noreferrer"
              target="_blank"
            >
              ThesllaDev
            </a>
            .
          </p>

          <nav>
            <ul>
              <li>
                <a href="#">
                  <Image src={FacebookIcon} alt="Facebook Icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={PinterestIcon} alt="Pinterest Icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image src={InstagramIcon} alt="Instagram Icon" />
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </>
  );
}
