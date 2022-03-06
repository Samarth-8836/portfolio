import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// require("dotenv").config();

export const client = sanityClient({
  projectId: "jo03y2q3",
  dataset: "production",
  apiVersion: "2022-03-04",
  useCdn: true,
  token:
    "skxafUR3SlzdYYlur1j7x0I80qdViZzwmhb5TSHDBFmO4nSaOUEf6NFRvKAoiktTlle0j1rMe5IS7ysR82r9k0mXNlP8TI8XgglK7pTIBUftLhhWr89UHog5EO0cXVTeDsORa6WIeOCCkz3UoC5DG2dxSh2JeOHfH9m6MM7evOaC873Dp83j",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
