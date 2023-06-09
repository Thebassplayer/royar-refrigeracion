import { useEffect, useState } from "react";
import { client } from "../client.js";

const useSanityQuery = query => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(query);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, error, isLoading };
};

export default useSanityQuery;
