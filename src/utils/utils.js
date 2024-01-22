import axios from "axios";

export const fetchData = async (urlLink) => {
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_URL_TMDB}${urlLink}`,
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_AUTH,
    },
  };
  try {
    const response = await axios.request(options);
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error("Something is wrong!!!!");
  }
};

export const fetchDetails = async (urlLink) => {
  const detail = {
    method: "GET",
    url: `${process.env.REACT_APP_URL_TMDB}${urlLink}`,
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_AUTH,
    },
  };
  try {
    const response = await axios.request(detail);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Something is wrong!!!!");
  }
};
