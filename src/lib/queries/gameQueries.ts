// Get the last 3 games that were updated
export const RECENTLY_UPDATED = `
  query recentlyUpdatedQuery {
    gameCollection(limit: 3, where: {sys:{publishedVersion_gt:4}}) {
      items {
        sys {
          publishedAt
        }
        title
        system {
          slug
          shortName
        }
        digital
        slug
        region
      }
    }
  }
`;

// Get the last 3 games that were added
export const LATEST_GAMES = `
  query latestGamesQuery {
    gameCollection(limit: 3, order: [sys_firstPublishedAt_DESC]) {
      items {
        sys {
          firstPublishedAt
        }
        title
        system {
          slug
          shortName
        }
        digital
        slug
        region
      }
    }
  }
`;
