import{S as $,i as q,a as p}from"./assets/vendor-JMCp1mBN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const d={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later.",info:"We're sorry, but you've reached the end of search results."},g=document.querySelector(".loader"),y=document.querySelector(".gallery"),h=document.querySelector(".load-more");function M(e,t){return!e||typeof e!="string"?"":e.replace(/,\s*$/,"").split(",").map(n=>n.trim()).slice(0,t).join(", ")}const P=new $(".gallery a",{captionsData:"data-caption",captionPosition:"bottom",captionDelay:250}),i=e=>{const r={warning:{title:"No Images Found",message:d.warning,position:"topRight",timeout:5e3,color:"#FFC107"},error:{title:"Error",message:d.error,position:"topRight",timeout:5e3,color:"#F44336"},info:{title:"Information",message:d.info,position:"topRight",timeout:5e3,color:"#2196F3"}}[e];return q[e](r)};function L(){g.classList.remove("hidden")}function b(){g.classList.add("hidden")}function w(e){const t=e.map(r=>{const s=M(r.tags,3);return`<li class="gallery-item">
        <a href=${r.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${r.webformatURL}
            alt="${s}"
            data-caption='${s} <span class="author-text">by ${r.user}</span>'
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${r.likes}</span></li>
           <li class="info-item">Views: <span>${r.views}</span></li>
           <li class="info-item">Comments: <span>${r.comments}</span></li>
           <li class="info-item">Download: <span>${r.downloads}</span></li>
         </ul>
      </li>`}).join("");y.insertAdjacentHTML("beforeend",t),P.refresh()}function T(){y.innerHTML=""}function S(){h.classList.remove("hidden")}function c(){h.classList.add("hidden")}function x(e){return window.scrollBy({top:e*2,behavior:"smooth"})}p.defaults.baseURL="https://pixabay.com/api/";const B="56231969-297dd38bb6be8c9e539b262b2";async function v(e,t){return(await p.get("",{params:{key:B,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const R=document.querySelector("form"),u=document.querySelector(".load-more");let a=1,f,m;R.addEventListener("submit",A);u.addEventListener("click",F);async function A(e){e.preventDefault(),m=e.target.elements["search-text"].value.trim(),a=1,T(),c(),L();try{const t=await v(m,a);if(t.hits.length===0){i("warning");return}f=Math.ceil(t.total/15),w(t.hits)}catch{i("error")}finally{b(),a>=f?c():S(),e.target.reset()}}async function F(){u.disabled=!0,c(),a++,L();try{const e=await v(m,a);w(e.hits);const t=document.querySelector(".gallery-item");t&&x(t.getBoundingClientRect().height)}catch{i("error")}finally{b(),a>=f?(c(),i("info")):S(),u.disabled=!1}}
//# sourceMappingURL=index.js.map
