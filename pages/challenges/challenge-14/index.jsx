import { useState } from "react";

import { Askings } from "../../../public/data/questions-challenge-14";

import styles from "./challenge-14.module.scss";
import HeaderProject from "../../../components/HeaderProject";

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
    <>
      <HeaderProject id="14" title="Crie um formulário de quizzes" />
      <main className={styles.main}>
        {showPoints ? (
          <header>
            <h2 className="font-bold">
              Sua pontuação é {points} de {questions.length}
            </h2>
          </header>
        ) : (
          <>
            <section>
              <h2>
                Pergunta {currentQuestion + 1}/{questions.length}
              </h2>
              <h2 className="font-bold text-xl">
                {questions[currentQuestion].asking}
              </h2>
            </section>
            <ul className="m-4">
              {questions[currentQuestion].optionsAnswers.map(
                (optionsAnswers, index) => (
                  <li key={index} className="m-4">
                    <span>{optionsAnswers.alternative}</span>
                    <button
                      onClick={() => NextQuestion(optionsAnswers.correct)}
                      className="ml-2 p-4 hover:bg-gray-500 border-2"
                    >
                      {optionsAnswers.answers}
                    </button>
                  </li>
                )
              )}
            </ul>
          </>
        )}
      </main>
    </>
  );
}
