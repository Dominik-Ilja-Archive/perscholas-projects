import axios from "axios";

export async function getGifs(searchTerm) {
  console.log(searchTerm);
  try {
    if (typeof searchTerm === "string" && searchTerm !== "") {
      const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
      const { data } = await axios.get(`${process.env.REACT_APP_GIPHY_BASE_URL}/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=5&rating=g`);
      return data;
    }
    else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
