import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//Show message form according state
const messages = {
  warning: "Sorry, there are no images matching your search query. Please try again!",
  error: "An error occurred. Please try again later.",
  info: "We're sorry, but you've reached the end of search results."
};

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

function extractTags(tags, number) {
  if (!tags || typeof tags !== 'string') {
    return '';
  }

  const cleanedTags = tags.replace(/,\s*$/, '');
  const tagArray = cleanedTags.split(',').map(tag => tag.trim());
  const firstThree = tagArray.slice(0, number);
  return firstThree.join(', ');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'data-caption',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export const showToast = (messageType) => {
  const configs = {
    warning: {
      title: "No Images Found",
      message: messages.warning,
      position: 'topRight',
      timeout: 5000,
      color: '#FFC107'
    },
    error: {
      title: "Error",
      message: messages.error,
      position: 'topRight',
      timeout: 5000,
      color: '#F44336'
    },
    info: {
      title: "Information",
      message: messages.info,
      position: 'topRight',
      timeout: 5000,
      color: '#2196F3'
    }
  };
  const config = configs[messageType];
  return iziToast[messageType](config);
};

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function createGallery(images) {
  const markUp = images.map(image => {
    const tags = extractTags(image.tags, 3);

    return `<li class="gallery-item">
        <a href=${image.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${image.webformatURL}
            alt="${tags}"
            data-caption='${tags} <span class="author-text">by ${image.user}</span>'
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${image.likes}</span></li>
           <li class="info-item">Views: <span>${image.views}</span></li>
           <li class="info-item">Comments: <span>${image.comments}</span></li>
           <li class="info-item">Download: <span>${image.downloads}</span></li>
         </ul>
      </li>`;
  }).join('');


  gallery.insertAdjacentHTML('beforeend', markUp);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}

export function smoothScroll(height) {
  return  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}