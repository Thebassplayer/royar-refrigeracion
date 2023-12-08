import useSanityQuery from "../hooks/useSanityQuery";
import useScreenResolution from "../hooks/useScreenResolution";
import Carousel from "./Carousel";
import Spinner from "./Spinner";

type CarouselContainerProps = {
  isCleaningVideo: boolean;
};

const CarouselContainer = ({
  isCleaningVideo,
}: CarouselContainerProps): JSX.Element => {
  const resolution = useScreenResolution();

  const { isLoading, isError, images } = useSanityQuery();

  if (isLoading) {
    return (
      <section className="h-2/6 sm:h-2/5 md:h-2/5 lg:h-1/2">
        <Spinner />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="h-2/6 sm:h-2/5 md:h-2/5 lg:h-1/2">
        <div className="flex h-full items-center justify-center">
          <h1>Error fetching data</h1>
        </div>
        ;
      </section>
    );
  }

  return (
    <Carousel
      isCleaningVideo={isCleaningVideo}
      images={images}
      resolution={resolution}
    />
  );
};

export default CarouselContainer;
