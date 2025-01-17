import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "sr6ptf89",
  dataset: "production",
  useCdn: true,
});
