function HeaderProject({ id, title }) {
  const customLinks = {
    1: "https://github.com/ThesllaDev/21diasdecodigo",
    5: "https://github.com/ThesllaDev/21diasdecodigo/tree/main/pages/404.jsx",
    8: "https://github.com/ThesllaDev/21diasdecodigo/tree/main/components/MainContainer.jsx",
    13: "https://github.com/ThesllaDev/21diasdecodigo/tree/main/components/Menu.jsx",
    21: "/custom-link-21",
  };

  return (
    <header className="p-8">
      <h1 className="text-3xl font-bold my-8">
        Desafio {id} - {title}
      </h1>
      <a
        className="border-2 p-2 hover:border-blue-500"
        aria-label="Código do desafio no repositório do GitHub de ThesllaDev"
        rel="noopener noreferrer"
        target="_blank"
        href={
          customLinks[id]
            ? customLinks[id]
            : `https://github.com/ThesllaDev/21diasdecodigo/tree/main/pages/challenges/challenge-${id}`
        }
      >
        Código
      </a>
    </header>
  );
}

export default HeaderProject;
