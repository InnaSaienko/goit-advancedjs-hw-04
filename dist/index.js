import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-CvVM4Mdh.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a={warning:`Sorry, there are no images matching your search query. Please try again!`,error:`An error occurred. Please try again later.`},o=document.querySelector(`.loader`),s=document.querySelector(`.gallery`);function c(e,t){return!e||typeof e!=`string`?``:e.replace(/,\s*$/,``).split(`,`).map(e=>e.trim()).slice(0,t).join(`, `)}var l=new t(`.gallery a`,{captionsData:`data-caption`,captionPosition:`bottom`,captionDelay:250}),u=e=>{let t={title:e===`warning`?`No Images Found`:`Error`,message:a[e],position:`topRight`,timeout:5e3};return i.default[e===`warning`?`warning`:`error`](t)};function d(){console.log(`Loader: `,o.classList),o.classList.remove(`visually-hidden`)}function f(){o.classList.add(`visually-hidden`)}function p(e){let t=e.map(e=>{let t=c(e.tags,3);return`<li class="gallery-item">
        <a href=${e.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${e.webformatURL}
            alt="${t}"
            data-caption='${t} <span class="author-text">by ${e.user}</span>'
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${e.likes}</span></li>
           <li class="info-item">Views: <span>${e.views}</span></li>
           <li class="info-item">Comments: <span>${e.comments}</span></li>
           <li class="info-item">Download: <span>${e.downloads}</span></li>
         </ul>
      </li>`}).join(``);s.insertAdjacentHTML(`beforeend`,t),l.refresh()}function m(){s.innerHTML=``}r.defaults.baseURL=`https://pixabay.com/api/`;var h=`56231969-297dd38bb6be8c9e539b262b2`;async function g(e){return(await r.get(``,{params:{key:h,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:1,per_page:15}})).data}document.querySelector(`form`).addEventListener(`submit`,_);async function _(e){e.preventDefault();let t=e.target.elements[`search-text`].value.trim();m(),d();try{let e=await g(t);if(e.hits.length===0){u(`warning`);return}p(e.hits)}catch{u(`error`)}finally{f(),e.target.reset()}}
//# sourceMappingURL=index.js.map