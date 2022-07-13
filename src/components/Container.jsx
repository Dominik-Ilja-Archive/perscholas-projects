import { useEffect, useState } from "react";
import List from "./List";
import Searchbar from "./Searchbar";
import { getGifs } from "../api/constants";

export default function Container() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleClick = term => {
    setSearchTerm(term);
  };

  useEffect(() => {
    async function makeRequest() {
      const data = await getGifs(searchTerm);
      console.log(data);

      if (data !== null) {
        setResults(data.data);
      }
    }

    makeRequest();
  }, [searchTerm]);

  return (
    <div>
      <Searchbar term={searchTerm} onClick={handleClick} />
      <List results={results} />
    </div>
  );
}
