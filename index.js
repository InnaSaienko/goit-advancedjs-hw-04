import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-x0HBmHRX.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=e(t(),1),o={warning:`Sorry, there are no images matching your search query. Please try again!`,error:`An error occurred. Please try again later.`},s=document.querySelector(`.loader`),c=document.querySelector(`.gallery`);function l(e,t){return!e||typeof e!=`string`?``:e.replace(/,\s*$/,``).split(`,`).map(e=>e.trim()).slice(0,t).join(`, `)}var u=new a.default(`.gallery a`,{captionsData:`data-caption`,captionPosition:`bottom`,captionDelay:250}),d=e=>{let t={title:e===`warning`?`No Images Found`:`Error`,message:o[e],position:`topRight`,timeout:5e3};return i.default[e===`warning`?`warning`:`error`](t)};function f(){console.log(`Loader: `,s.classList),s.classList.remove(`visually-hidden`)}function p(){s.classList.add(`visually-hidden`)}function m(e){let t=e.map(e=>{let t=l(e.tags,3);return`<li class="gallery-item">
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
      </li>`}).join(``);c.insertAdjacentHTML(`beforeend`,t),u.refresh()}function h(){c.innerHTML=``}r.defaults.baseURL=`https://pixabay.com/api/`;var g=`56231969-297dd38bb6be8c9e539b262b2`;async function _(e){return(await r.get(``,{params:{key:g,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:1,per_page:15}})).data}document.querySelector(`form`).addEventListener(`submit`,v);async function v(e){e.preventDefault();let t=e.target.elements[`search-text`].value.trim();h(),f();try{let e=await _(t);if(e.hits.length===0){d(`warning`);return}m(e.hits)}catch{d(`error`)}finally{p(),e.target.reset()}}
//# sourceMappingURL=index.js.map