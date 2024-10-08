import Head from "next/head";
import Link from "next/link";
import projects from "../public/data/projectsDatas";
import ProjectCard from "../components/ProjectCard";

const externalLinks = {
  1: "https://github.com/ThesllaDev/21diasdecodigo",
  21: "https://theslladev.vercel.app/",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>21 Dias de Código</title>
        <meta
          name="description"
          content="Desafio de programação em Next.js: Codifique pelo menos 1 hora por dia durante 21 dias. Aprenda e melhore suas habilidades de código, desenvolva hábitos e disciplina, e crie um networking com a comunidade."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="flex flex-col items-center gap-5 mx-4">
          <h1 className="text-3xl font-bold">#21 Dias de Código</h1>
          <p>
            Este é um desafio proposto em um{" "}
            <a
              className="hover:text-blue-500 underline"
              href="https://www.instagram.com/p/ChTBg1BpLGU/"
              rel="noopener noreferrer"
              target="_blank"
            >
              post
            </a>{" "}
            pela{" "}
            <a
              className="hover:text-blue-500 underline"
              href="https://www.rocketseat.com.br/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Rocketseat
            </a>{" "}
            e a{" "}
            <a
              className="hover:text-blue-500 underline"
              href="https://jakeliny.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Jakeliny
            </a>{" "}
            para codar pelo menos 1 hora por dia, durante 21 dias. Os principais
            objetivos desse desafio é aprender e melhorar suas habilidades de
            código e também desenvolver hábito, disciplina e criar um networking
            com a comunidade
          </p>
          <p>
            Para mais informações consulte o{" "}
            <a
              className="hover:text-blue-500 underline"
              href="https://github.com/ThesllaDev/21diasdecodigo"
              rel="noopener noreferrer"
              target="_blank"
            >
              README
            </a>{" "}
            do projeto
          </p>
          <h2 className="text-2xl font-bold">Projetos</h2>
          <ul>
            {projects.map((project) => (
              <li
                className="underline leading-8 hover:text-blue-500 hover:bg-gray-200"
                key={project.ID}
              >
                {externalLinks[project.ID] ? (
                  <a
                    className="block w-full pl-2"
                    href={externalLinks[project.ID]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Desafio {project.ID} - {project.Title}
                  </a>
                ) : (
                  <Link href={`/challenges/challenge-${project.ID}`}>
                    <a className="block w-full pl-2">
                      Desafio {project.ID} - {project.Title}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-wrap justify-center mt-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.ID}
              id={project.ID}
              title={project.Title}
            />
          ))}
        </section>
      </main>
    </>
  );
}
