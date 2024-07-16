import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CustomLink = ({ href, label, isExternal }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const styleLink =
    "block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4 underline hover:bg-gray-200 p-2 rounded-lg";

  if (isExternal) {
    return (
      <a
        className={`${pathname === href ? "text-blue-500" : ""} ${styleLink}`}
        href={href}
        aria-label="Código do desafio no repositório do GitHub de ThesllaDev"
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className={`${pathname === href ? "text-blue-500" : ""} ${styleLink}`}>
        {label}
      </a>
    </Link>
  );
};

export default function Menu({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const customLinks = {
    1: "https://github.com/ThesllaDev/21diasdecodigo",
    5: "/404",
    8: "/",
    13: "/",
    21: "/custom-link-21",
  };

  return (
    <nav className="p-8">
      <div className="container mx-auto flex flex-col items-center justify-between font-bold">
        <div className="container flex justify-between">
          <Link href="/">
            <a className="text-2xl hover:underline hover:text-blue-500">
              Início
            </a>
          </Link>
          <button
            className="border-2 p-1 hover:border-blue-500"
            onClick={() => theme(!theme)}
          >
            Mudar tema
          </button>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            {[...Array(21)].map((_, index) => {
              const challengeNumber = index + 1;
              const href = customLinks[challengeNumber]
                ? customLinks[challengeNumber]
                : `/challenges/challenge-${challengeNumber}`;
              const label = customLinks[challengeNumber]
                ? `Desafio ${challengeNumber}`
                : `Desafio ${challengeNumber}`;
              const isExternal =
                challengeNumber === 1 || challengeNumber === 21;

              return (
                <CustomLink
                  key={challengeNumber}
                  href={href}
                  label={label}
                  isExternal={isExternal}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
