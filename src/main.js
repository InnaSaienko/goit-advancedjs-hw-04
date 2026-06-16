import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
  showLoadMoreButton,
  showToast
} from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';

const form = document.querySelector("form");
let page = 1;
let query;
form.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  e.preventDefault();
  query = e.target.elements["search-text"].value.trim();

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      showToast("warning");
      return;
    }
    createGallery(data.hits);
  } catch (error) {
    showToast("error");
  } finally {
    hideLoader();
    showLoadMoreButton();
    e.target.reset();
  }
}