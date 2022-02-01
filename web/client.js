const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "nqpulmr0",
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2022-01-31",
});

module.exports = client;
