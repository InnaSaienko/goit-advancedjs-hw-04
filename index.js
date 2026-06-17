import{S as M,i as $,a as m}from"./assets/vendor-JMCp1mBN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const q={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later."},p=document.querySelector(".loader"),g=document.querySelector(".gallery"),y=document.querySelector(".load-more");function v(e,t){return!e||typeof e!="string"?"":e.replace(/,\s*$/,"").split(",").map(n=>n.trim()).slice(0,t).join(", ")}const P=new M(".gallery a",{captionsData:"data-caption",captionPosition:"bottom",captionDelay:250}),c=e=>{const t={title:e==="warning"?"No Images Found":"Error",message:q[e],position:"topRight",timeout:5e3};return $[e==="warning"?"warning":"error"](t)};function h(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function b(e){const t=e.map(o=>{const a=v(o.tags,3);return`<li class="gallery-item">
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
      </li>`}).join("");g.insertAdjacentHTML("beforeend",t),P.refresh()}function x(){g.innerHTML=""}function w(){y.classList.remove("hidden")}function i(){y.classList.add("hidden")}function B(e){return window.scrollBy({top:e*2,behavior:"smooth"})}m.defaults.baseURL="https://pixabay.com/api/";const T="56231969-297dd38bb6be8c9e539b262b2";async function S(e,t){return(await m.get("",{params:{key:T,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const A=document.querySelector("form"),d=document.querySelector(".load-more");let s=1,u,f;A.addEventListener("submit",O);d.addEventListener("click",E);async function O(e){e.preventDefault(),f=e.target.elements["search-text"].value.trim(),s=1,x(),i(),h();try{const t=await S(f,s);if(t.hits.length===0){c("warning");return}u=Math.ceil(t.total/15),b(t.hits)}catch{c("error")}finally{L(),s>=u?i():w(),e.target.reset()}}async function E(){d.disabled=!0,i(),s++,h();try{const e=await S(f,s);b(e.hits);const t=document.querySelector(".gallery-item");t&&B(t.getBoundingClientRect().height)}catch{c("error")}finally{L(),s>=u?i():w(),d.disabled=!1}}
//# sourceMappingURL=index.js.map
