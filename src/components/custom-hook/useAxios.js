import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://parseapi.back4app.com/classes";

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async (params) => {
    console.log(axiosParams.url);
    if (axiosParams.url) {
      console.log(axiosParams.url);
      try {
        console.log(axiosParams);
        const result = await axios.request(params);
        setResponse(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setloading(false);
      }
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [axiosParams.url]); // execute once only

  return { response, error, loading };
};
