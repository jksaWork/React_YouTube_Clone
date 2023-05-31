import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  //   method: "GET",
  //   url: playlistItems,
  params: {
    //     playlistId: "RDZiQo7nAkQHU",
    //     part: "snippet",
    maxResults: "9",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const FetchFromApi = async (query) => {
  const data = await axios.get(`${BASE_URL}/${query}`, options);
  console.log(data);
  return data;
};

export default FetchFromApi;
