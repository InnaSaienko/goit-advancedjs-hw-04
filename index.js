import{S as $,i as S,a as p}from"./assets/vendor-JMCp1mBN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const q={warning:"Sorry, there are no images matching your search query. Please try again!",error:"An error occurred. Please try again later."},m=document.querySelector(".loader"),y=document.querySelector(".gallery"),g=document.querySelector(".load-more");function v(e,t){return!e||typeof e!="string"?"":e.replace(/,\s*$/,"").split(",").map(a=>a.trim()).slice(0,t).join(", ")}const P=new $(".gallery a",{captionsData:"data-caption",captionPosition:"bottom",captionDelay:250}),c=e=>{const t={title:e==="warning"?"No Images Found":"Error",message:q[e],position:"topRight",timeout:5e3};return S[e==="warning"?"warning":"error"](t)};function h(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function b(e){const t=e.map(o=>{const n=v(o.tags,3);return`<li class="gallery-item">
        <a href=${o.largeImageURL} class="gallery-link">
          <img
            class="gallery-image"
            src=${o.webformatURL}
            alt="${n}"
            data-caption='${n} <span class="author-text">by ${o.user}</span>'
            loading="lazy"
          />
        </a>
         <ul class="image-info">
           <li class="info-item">Likes: <span>${o.likes}</span></li>
           <li class="info-item">Views: <span>${o.views}</span></li>
           <li class="info-item">Comments: <span>${o.comments}</span></li>
           <li class="info-item">Download: <span>${o.downloads}</span></li>
         </ul>
      </li>`}).join("");y.insertAdjacentHTML("beforeend",t),P.refresh()}function x(){y.innerHTML=""}function w(){g.classList.remove("hidden")}function l(){g.classList.add("hidden")}p.defaults.baseURL="https://pixabay.com/api/";const T="56231969-297dd38bb6be8c9e539b262b2";async function M(e,t){return(await p.get("",{params:{key:T,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const A=document.querySelector("form"),d=document.querySelector(".load-more");let s=1,u,f;A.addEventListener("submit",O);d.addEventListener("click",B);async function O(e){e.preventDefault(),f=e.target.elements["search-text"].value.trim(),s=1,x(),l(),h();try{const t=await M(f,s);if(t.hits.length===0){c("warning");return}u=Math.ceil(t.total/15),b(t.hits)}catch{c("error")}finally{L(),s>=u?l():w(),e.target.reset()}}async function B(){d.disabled=!0,l(),s++,h();try{const e=await M(f,s);b(e.hits),u--}catch{c("error")}finally{L(),w(),d.disabled=!1}}
//# sourceMappingURL=index.js.map
