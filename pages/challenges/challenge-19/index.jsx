import { useState } from "react";
import axios from "axios";
import HeaderProject from "../../../components/HeaderProject";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [image, setImage] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query, per_page: 1 },
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (response.data.results.length > 0) {
      setImage(response.data.results[0].urls.regular);
    } else {
      setImage(null);
    }
  };

  return (
    <>
      <HeaderProject
        id="19"
        title="Desenvolva um site que gere imagens aleatórias utilizando a API do Unsplash"
      />
      <main className="flex flex-col items-center gap-4 h-screen">
        <h1 className="text-3xl font-bold text-center">
          Unsplash Image Search
        </h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for images..."
						aria-label="Search for images"
          />
          <button
            type="submit"
            className="ml-2 px-2 border-2 hover:border-blue-500"
          >
            Search
          </button>
        </form>
        {image && <img src={image} alt="Unsplash Image" />}
      </main>
    </>
  );
};

export default SearchBar;
