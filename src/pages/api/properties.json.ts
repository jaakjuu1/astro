import type { APIRoute } from "astro";

// /api/properties.json
export const GET: APIRoute = async () => {
  const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query AllProperties {
                properties(first: 10000) {
                  nodes {
                    databaseId
                    featuredImage {
                      node {
                        altText
                        sourceUrl
                        mediaDetails {
                          width
                          height
                        }
                      }
                    }
                    title
                    uri
                    propertyDetails {
                      bathrooms
                      bedrooms
                      price
                    }
                  }
                }
              }
            `,
    }),
  });
  const { data } = await response.json();
  return new Response(JSON.stringify({ properties: data.properties.nodes }));
};
