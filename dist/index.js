import{S as p,i as f,a as d}from"./assets/vendor-BTRK9AdA.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const m={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later."},i=`<svg class='icon-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>`,u=document.querySelector(".gallery"),l=e=>{const r={title:e==="warning"?"No Images Found":"Error",message:m[e],position:"topRight",timeout:5e3};return f[e==="warning"?"warning":"error"](r)};function g(){const e=document.createElement("div");e.classList.add("loader-wrapper");const r=document.createElement("span");r.classList.add("loader"),e.appendChild(r),document.body.appendChild(e)}function y(){document.querySelector(".loader-wrapper").remove()}function h(){const e=document.querySelector(".sl-prev"),r=document.querySelector(".sl-next");if(e){e.innerHTML=i;const t=e.querySelector("svg");t&&(t.style.transform="rotate(180deg)")}r&&(r.innerHTML=i)}function w(e){const r=e.map(t=>`<li class="gallery-item">
        <a href=${t.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${t.webformatURL}
            alt="${t.tags}"
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${t.likes}</span></li>
           <li class="info-item">Views: <span>${t.views}</span></li>
           <li class="info-item">Comments: <span>${t.comments}</span></li>
           <li class="info-item">Download: <span>${t.downloads}</span></li>
         </ul>
      </li>`).join("");u.insertAdjacentHTML("beforeend",r),c.on("shown.simplelightbox",()=>h),c.refresh()}function b(){u.innerHTML=""}const c=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});d.defaults.baseURL="https://pixabay.com/api/";const v="56231969-297dd38bb6be8c9e539b262b2";async function L(e){return(await d.get("",{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const S=document.querySelector("form");S.addEventListener("submit",q);async function q(e){e.preventDefault();const r=e.target.elements["search-text"].value.trim();b(),g();try{const t=await L(r);if(t.hits.length===0){l("warning");return}w(t.hits)}catch{l("error")}finally{y()}}
//# sourceMappingURL=index.js.map
