import { useState, useEffect } from "react";
import HeaderProject from "../../../components/HeaderProject";

const RandomDog = () => {
  const [dog, setDog] = useState(null);
  const [fetchNew, setFetchNew] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://random.dog/woof.json");
        const data = await response.json();
        setDog(data.url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchNew]);

  const renderContent = () => {
    if (!dog) {
      return null;
    }

    const extension = dog.split(".").pop();

    if (extension === "mp4" || extension === "webm") {
      return <video controls src={dog} alt="Random Dog" />;
    } else {
      return <img src={dog} alt="Random Dog" />;
    }
  };

  const handleNewDogClick = () => {
    setFetchNew(!fetchNew);
  };

  return (
    <>
      <HeaderProject
        id="16"
        title="Desenvolva um site utilizando alguma API pública"
      />
      <main className="flex flex-col items-center">
        <button
          onClick={handleNewDogClick}
          className="mb-4 border-2 p-4 hover:border-blue-500"
        >
          Nova imagem/gif/video
        </button>
        <div>{renderContent()}</div>
      </main>
    </>
  );
};

export default RandomDog;
