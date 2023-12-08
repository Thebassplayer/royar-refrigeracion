import { useState, useEffect } from "react";
import { client } from "../client";
import formatCarouselImages, {
  FormattedCarouselImage,
} from "../utils/formatCarouselImages";

const useSanityQuery = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState<Boolean>(false);
  const [images, setImages] = useState<FormattedCarouselImage[] | []>([]);

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
          console.log("fired");

          const imageUrls = formatCarouselImages(result);

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
