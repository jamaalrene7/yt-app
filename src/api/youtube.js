import axios from "axios";

const KEY = "AIzaSyB3ciEWBbjfyPALlcY9udTmt2-WxUzMlOE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
