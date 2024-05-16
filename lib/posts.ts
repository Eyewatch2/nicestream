import graphqlRequest from "./graphqlRequest";

export async function getAllPosts(category?: string) {
  let categoryFilter = '';
  if (category) {
    categoryFilter = `(where: { categoryName: "${category}" })`;
  }

  const query = {
    query: `query getAllPosts {
      posts${categoryFilter} {
        nodes {
          date
          slug
          title
          excerpt
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              slug
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }`
  }

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts;
  return allPosts;
}

export async function getSinglePost(slug: string) {
  const query = {
    query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              databaseId
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.post;

  return singlePost;
}

export async function getHighlightedPosts() {
  const query = {
    query: `query getHighlightedPosts {
            posts(where: { tag: "destacado" }) {
              nodes {
                date
                slug
                title
                excerpt
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
                categories {
                  nodes {
                    slug
                  }
                }
              }
            }
          }`
  };

  const resJson = await graphqlRequest(query);
  const highlightedPosts = resJson.data.posts;
  return highlightedPosts;
}