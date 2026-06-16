import{S as d,i as f,a as c}from"./assets/vendor-JMCp1mBN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const p={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later."},i=document.querySelector(".loader"),u=document.querySelector(".gallery");function m(e,s){return!e||typeof e!="string"?"":e.replace(/,\s*$/,"").split(",").map(o=>o.trim()).slice(0,s).join(", ")}const g=new d(".gallery a",{captionsData:"data-caption",captionPosition:"bottom",captionDelay:250}),l=e=>{const s={title:e==="warning"?"No Images Found":"Error",message:p[e],position:"topRight",timeout:5e3};return f[e==="warning"?"warning":"error"](s)};function y(){console.log("Loader: ",i.classList),i.classList.remove("visually-hidden")}function h(){i.classList.add("visually-hidden")}function L(e){const s=e.map(t=>{const a=m(t.tags,3);return`<li class="gallery-item">
        <a href=${t.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${t.webformatURL}
            alt="${a}"
            data-caption='${a} <span class="author-text">by ${t.user}</span>'
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${t.likes}</span></li>
           <li class="info-item">Views: <span>${t.views}</span></li>
           <li class="info-item">Comments: <span>${t.comments}</span></li>
           <li class="info-item">Download: <span>${t.downloads}</span></li>
         </ul>
      </li>`}).join("");u.insertAdjacentHTML("beforeend",s),g.refresh()}function b(){u.innerHTML=""}c.defaults.baseURL="https://pixabay.com/api/";const w="56231969-297dd38bb6be8c9e539b262b2";async function $(e){return(await c.get("",{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}})).data}const v=document.querySelector("form");v.addEventListener("submit",P);async function P(e){e.preventDefault();const s=e.target.elements["search-text"].value.trim();b(),y();try{const t=await $(s);if(t.hits.length===0){l("warning");return}L(t.hits)}catch{l("error")}finally{h(),e.target.reset()}}
//# sourceMappingURL=index.js.map
