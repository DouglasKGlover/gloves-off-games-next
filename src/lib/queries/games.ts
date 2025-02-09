// Get link details for the last 3 games that were updated
export const RECENTLY_UPDATED = `
  query recentlyUpdatedQuery {
    gameCollection(limit: 3, where: {sys:{publishedVersion_gt:4}}) {
      items {
        sys {
          publishedAt
          id
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

// Get link details for the last 3 games that were added
export const LATEST_GAMES = `
  query latestGamesQuery {
    gameCollection(limit: 3, order: [sys_firstPublishedAt_DESC]) {
      items {
        sys {
          firstPublishedAt
          id
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

// Get link details for all games
export const ALL_GAMES = `
  query allGamesQuery {
    gameCollection(limit: 999, order: [title_ASC]) {
      items {
        sys {
          id
        }
        title
        slug
        system {
          slug
          shortName
        }
        playedStatus
        digital
        wtbWts
        region
      }
    }
  }
`;
