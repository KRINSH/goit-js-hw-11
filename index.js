import{a as u,S as m,i as c}from"./assets/vendor-Bz4lgVUE.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="36979931-b9ebd2c49fac6caefdf5e0dc3";function g(s){return u.get("https://pixabay.com/api/",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".loading-indicator"),f=document.querySelector(".photo-grid"),y=new m(".photo-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(s){const o=s.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:p,downloads:d})=>`
        <div class="photo-card">
          <a class="photo-link" href="${n}">
            <div class="photo-image-wrapper">
              <img class="photo-image" src="${a}" alt="${e}" />
            </div>
            <div class="photo-info">
              <div class="info-item">
                <span class="info-label">Likes</span>
                <span class="info-value">${t}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Views</span>
                <span class="info-value">${i}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Comments</span>
                <span class="info-value">${p}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Downloads</span>
                <span class="info-value">${d}</span>
              </div>
            </div>
          </a>
        </div>
      `).join("");f.innerHTML=o,y.refresh()}function b(){f.innerHTML=""}function L(){l.classList.add("visible")}function x(){l.classList.remove("visible")}const P=document.querySelector(".search-container");P.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){r("Please enter a search query");return}b(),L(),g(o).then(({hits:a})=>{if(a.length===0){w("No images found. Please try a different search term.");return}v(a)}).catch(a=>{r("Failed to fetch images. Please try again later.")}).finally(()=>{x(),s.target.reset()})}function r(s){c.error({message:s,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})}function w(s){c.info({message:s,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})}
//# sourceMappingURL=index.js.map
