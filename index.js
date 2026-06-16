import{S as f,i as p,a as l}from"./assets/vendor-JMCp1mBN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const m={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later."},u=document.querySelector(".loader"),d=document.querySelector(".gallery"),g=document.querySelector(".load-more");function y(e,r){return!e||typeof e!="string"?"":e.replace(/,\s*$/,"").split(",").map(n=>n.trim()).slice(0,r).join(", ")}const h=new f(".gallery a",{captionsData:"data-caption",captionPosition:"bottom",captionDelay:250}),i=e=>{const r={title:e==="warning"?"No Images Found":"Error",message:m[e],position:"topRight",timeout:5e3};return p[e==="warning"?"warning":"error"](r)};function L(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}function w(e){const r=e.map(o=>{const a=y(o.tags,3);return`<li class="gallery-item">
        <a href=${o.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${o.webformatURL}
            alt="${a}"
            data-caption='${a} <span class="author-text">by ${o.user}</span>'
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${o.likes}</span></li>
           <li class="info-item">Views: <span>${o.views}</span></li>
           <li class="info-item">Comments: <span>${o.comments}</span></li>
           <li class="info-item">Download: <span>${o.downloads}</span></li>
         </ul>
      </li>`}).join("");d.insertAdjacentHTML("beforeend",r),h.refresh()}function $(){d.innerHTML=""}function S(){g.classList.remove("hidden")}l.defaults.baseURL="https://pixabay.com/api/";const q="56231969-297dd38bb6be8c9e539b262b2";async function v(e,r){return(await l.get("",{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const P=document.querySelector("form");let x=1,c;P.addEventListener("submit",M);async function M(e){e.preventDefault(),c=e.target.elements["search-text"].value.trim(),$(),L();try{const r=await v(c,x);if(r.hits.length===0){i("warning");return}w(r.hits)}catch{i("error")}finally{b(),S(),e.target.reset()}}
//# sourceMappingURL=index.js.map
