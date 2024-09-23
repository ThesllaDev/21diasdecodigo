import Link from "next/link";

function ProjectCard({ id, title }) {
  const customLinks = {
    1: {
      demo: "https://github.com/ThesllaDev/21diasdecodigo",
      code: "https://github.com/ThesllaDev/21diasdecodigo",
    },
    5: {
      demo: "./404",
      code: "https://github.com/ThesllaDev/21diasdecodigo/blob/main/pages/404.jsx",
    },
    8: {
      demo: "/",
      code: "https://github.com/ThesllaDev/21diasdecodigo/tree/main/pages/components/MainContainer.jsx",
    },
    13: {
      demo: "/",
      code: "https://github.com/ThesllaDev/21diasdecodigo/tree/main/pages/components/Menu.jsx",
    },
    21: {
      demo: "https://theslladev.vercel.app/",
      code: "https://github.com/ThesllaDev/portfolio",
    },
  };

  const isCustomLink = customLinks[id];
  const demoLink = isCustomLink
    ? customLinks[id].demo
    : `/challenges/challenge-${id}`;
  const codeLink = isCustomLink
    ? customLinks[id].code
    : `https://github.com/ThesllaDev/21diasdecodigo/tree/main/pages/challenges/challenge-${id}`;

  const isDirectLink = id === 1 || id === 21;

  return (
    <div className="w-80 bg-gray-500 p-4 m-4 flex flex-col gap-8">
      <video width="300" controls>
        <source src={`/videos/demo-challenge-${id}.mp4`} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <h3 className="text-2xl">
        Desafio {id} - {title}
      </h3>
      <div className="flex justify-center gap-4">
        {isDirectLink ? (
          <a
            className="border-2 p-1 hover:border-blue-500"
            href={demoLink}
            aria-label={`Preview do desafio ${id} - ${title}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Preview
          </a>
        ) : (
          <Link href={demoLink}>
            <a className="border-2 p-1 hover:border-blue-500">Preview</a>
          </Link>
        )}
        <a
          className="border-2 p-1 hover:border-blue-500"
          href={codeLink}
          aria-label="Código do desafio no repositório do GitHub de ThesllaDev"
          rel="noopener noreferrer"
          target="_blank"
        >
          Código
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
