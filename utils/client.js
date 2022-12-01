import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: "production",
  projectId: `${process.env.SANITY_ID}`,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-11-20",
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   * */
};

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
if (!config.dataset) {
  throw Error("The dataset name is not set. Check your environment variables.");
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 * */

const builder = imageUrlBuilder(config);

export const urlFor = (source) => builder.image(source);

// Set up the live preview subscription hook
// export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
// export const previewClient = createClient({
//   ...config,
//   useCdn: false,
// });

// Helper function for easily switching between normal client and preview client
export const getClient = () => sanityClient;
