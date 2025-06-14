import{a as u,S as m,i as c}from"./assets/vendor-Bz4lgVUE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const g="36979931-b9ebd2c49fac6caefdf5e0dc3";function h(s){return u.get("https://pixabay.com/api/",{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const l=document.querySelector(".loading-indicator"),f=document.querySelector(".photo-grid"),y=new m(".photo-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(s){const t=s.map(({webformatURL:i,largeImageURL:n,tags:e,likes:a,views:o,comments:p,downloads:d})=>`
        <div class="photo-card">
          <a class="photo-link" href="${n}">
            <div class="photo-image-wrapper">
              <img class="photo-image" src="${i}" alt="${e}" />
            </div>
            <div class="photo-info">
              <div class="info-item">
                <span class="info-label">Likes</span>
                <span class="info-value">${a}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Views</span>
                <span class="info-value">${o}</span>
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
      `).join("");f.innerHTML=t,y.refresh()}function b(){f.innerHTML=""}function L(){l.classList.add("visible")}function S(){l.classList.remove("visible")}const P=document.querySelector(".search-container");P.addEventListener("submit",I);function I(s){s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){r("Please enter a search query");return}b(),L(),h(t).then(({hits:i})=>{if(i.length===0){x("No images found. Please try a different search term.");return}v(i)}).catch(i=>{r("Failed to fetch images. Please try again later.")}).finally(()=>{S(),s.target.reset()})}function r(s){c.error({message:s,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})}function x(s){c.info({message:s,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})}
//# sourceMappingURL=index.js.map
