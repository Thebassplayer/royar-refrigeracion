export type CarouselItem = {
  title: string;
  imageUrl: string[]; // Assuming imageUrl is an array of strings
};

export type ImageKeys = 640 | 768 | 1024 | 1280;

export type FormattedCarouselImage = {
  title: string;
  imagesUrl: {
    [key in ImageKeys]?: string;
  };
};

const formatCarouselImages = (
  info: CarouselItem[]
): FormattedCarouselImage[] => {
  return info.map(item => {
    const { title, imageUrl } = item;
    const imagesUrl: FormattedCarouselImage["imagesUrl"] = {
      640: imageUrl[0],
      768: imageUrl[1],
      1024: imageUrl[2],
      1280: imageUrl[3],
    };
    return { title, imagesUrl };
  });
};

export default formatCarouselImages;
