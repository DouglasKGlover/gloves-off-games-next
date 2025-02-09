// Get all images
export const ALL_IMAGES = `
  query allImagesQuery {
    assetCollection(limit: 999, order: sys_firstPublishedAt_DESC) {
      items {
        sys {
          id
        }
        url
          thumbnail: url(
          transform: { width: 300, height: 200, resizeStrategy: FILL }
        )
      }
    }
  }
`;
