import { useState } from "react";

export default function Searchbar(props) {
  const [term, setTerm] = useState("");

  return (
    <div>
      <div>
        <label htmlFor="">Search for a GIF</label>
        <input
          type="text"
          value={term}
          name="Searchbar"
          onChange={e => setTerm(e.target.value)}
        />
        <button
          onClick={e => {
            console.log(e);
            props.onClick(term);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
