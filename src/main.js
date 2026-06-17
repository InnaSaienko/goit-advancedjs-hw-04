import {
  clearGallery,
  createGallery,
  hideLoader, hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
  showToast
} from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';

const form = document.querySelector("form");
export const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
let totalPages;
let query;

form.addEventListener("submit", onSubmit);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSubmit(e) {
  e.preventDefault();
  query = e.target.elements["search-text"].value.trim();
  page = 1;
  clearGallery();
  hideLoadMoreButton()
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      showToast("warning");
      return;
    }
    totalPages = Math.ceil(data.total / 15);
    createGallery(data.hits);
  } catch (error) {
    showToast("error");
  } finally {
    hideLoader();
    page >= totalPages ? hideLoadMoreButton() : showLoadMoreButton();
    e.target.reset();
  }
}

async function onLoadMore() {
  loadMoreBtn.disabled = true;
  hideLoadMoreButton();
  page++;
  showLoader();

  try{
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);
    totalPages--;
  } catch (error) {
    showToast("error");
  } finally {
    hideLoader();
    showLoadMoreButton();
    loadMoreBtn.disabled = false;
  }
}