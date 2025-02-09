// Get a list of all blog posts
export const ALL_BLOG_POSTS = `
    query allGameLogsQuery {
        gameLogCollection(limit: 999, order: sys_firstPublishedAt_DESC) {
            items {
                sys {   
                    firstPublishedAt
                }
                title
                slug
                game {
                    title
                    slug
                    system {
                        slug
                    }
                    region
                }
            }
        }
    }
`;

// Get a single blog post by slug
export const BLOG_POST = `
    query gameLogBySlugQuery($slug: String!) {
        gameLogCollection(where: { slug: $slug }, limit: 1) {
            items {
                sys {
                    id
                    firstPublishedAt
                }
                title
                game {
                    title
                    slug
                    system {
                        slug
                    }
                    region
                }
                details {
                    json
                }
            }
        }
    }
`;
