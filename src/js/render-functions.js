export const createGalleryCardTemplate = images => {
  return images.reduce((acc, el) => {
    return (
      acc +
      `
      <li class="gallery-card">
        <a class="gallery-link" href="${el.largeImageURL}">
          <img class="gallery-image" src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
        </a>
        <div class="gallery-info">
          <div class="info-block">
            <p class="info-block-title">Likes:</p>
            <p class="info-block-value">${el.likes}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Views:</p>
            <p class="info-block-value">${el.views}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Comments:</p>
            <p class="info-block-value">${el.comments}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Downloads:</p>
            <p class="info-block-value">${el.downloads}</p>
          </div>
        </div>
      </li>
      `
    );
  }, '');
};

