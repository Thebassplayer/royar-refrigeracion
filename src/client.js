import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Get Sanity project and dataset details
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

// Sanity Client
export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2021-03-25",
  useCdn: true,
});

// Sanity Image Builder
export const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
