import { useState, useEffect } from "react";
import { client } from "../client";

const orderInfo = info => {
  return info.map(item => {
    const { title, imageUrl } = item;
    const imagesUrl = {
      640: imageUrl[0],
      768: imageUrl[1],
      1024: imageUrl[2],
      1280: imageUrl[3],
    };
    return { title, imagesUrl };
  });
};

const useSanityQuery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        if (images.length === 0) {
          // Fetch the carousel data from Sanity only if cache is empty
          const query = `*[_type == "carousel"]{
            title,
            "imageUrl": images[].imageFile.asset->url
          }`;
          const result = await client.fetch(query);

          const imageUrls = orderInfo(result);

          setImages(imageUrls);
        }
      } catch (error) {
        console.error("Error fetching Sanity data:", error);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [images.length]);

  return { isLoading, isError, images };
};

export default useSanityQuery;
