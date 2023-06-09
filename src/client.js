import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity Client
export const client = createClient({
  projectId: "6w6t054p",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

// Sanity Image Builder
export const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
