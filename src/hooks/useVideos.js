import React, { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //input: The term the user inputs in this case --> Buildings
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  //Logic that handles taking the term a user inputs and finding the list of videos that correspond
  //Output: onTermSubmit --> This shows the user the list of videos based on the term they inputed
  const search = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
    //selection is a derived property of the overall list of
  };

  return [videos, search];
};

export default useVideos;
