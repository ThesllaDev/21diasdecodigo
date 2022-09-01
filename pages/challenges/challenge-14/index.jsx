import { useState } from "react";

import { Askings } from "./data/questions";

import styles from "./challenge-14.module.scss";

export default function Quiz() {
  const questions = Askings ?? [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPoints, setShowPoints] = useState(false);
  const [points, setPoints] = useState(0);

  function NextQuestion(correct) {
    const nextQuestion = currentQuestion + 1;

    if (correct) {
      setPoints(points + 1);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowPoints(true);
    }
  }

  return (
    <main className={styles.main}>
      {showPoints ? (
        <header>
          <h2>
            Sua pontuação é {points} de {questions.length}
          </h2>
        </header>
      ) : (
        <>
          <section>
            <h3>
              Pergunta {currentQuestion + 1}/{questions.length}
            </h3>
            <h2>{questions[currentQuestion].asking}</h2>
          </section>
          <ul>
            {questions[currentQuestion].optionsAnswers.map((optionsAnswers) => (
              <li key={questions.length}>
                <span>{optionsAnswers.alternative}</span>
                <button onClick={() => NextQuestion(optionsAnswers.correct)}>
                  {optionsAnswers.answers}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
