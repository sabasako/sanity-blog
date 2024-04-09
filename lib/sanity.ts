import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "t5v9lsai",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builer = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return builer.image(source);
}
