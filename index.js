import{a as u,S as g,i as l}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="36979931-b9ebd2c49fac6caefdf5e0dc3";function h(i){return u.get("https://pixabay.com/api/",{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".loader"),f=document.querySelector(".gallery");let y=new g(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(i){const r=i.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:s,comments:m,downloads:d})=>`<li class="gallery-item">
      <a class="gallery-link" href=${o}>
      <div class="image-container">
        <img class="gallery-image" src="${a}" alt="${e}" />
      </div>
      <div class="image-inform">
        <div>
          <h3 class="image-inform-title">Likes</h3>
          <span class="image-inform-text">${t}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Views</h3>
          <span class="image-inform-text">${s}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Comments</h3>
          <span class="image-inform-text">${m}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Downloads</h3>
          <span class="image-inform-text">${d}</span>
        </div>
      </div>
    </a>
  </li>`).join("");f.innerHTML=r,y.refresh()}function L(){f.innerHTML=""}function x(){c.classList.remove("hidden")}function b(){c.classList.add("hidden")}const P=document.querySelector(".search-container");P.addEventListener("submit",S);function S(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){n("Please enter a search query");return}L(),x(),h(r).then(({hits:a})=>{if(a.length===0){O("No images found. Please try a different search term.");return}v(a)}).catch(a=>{n("Failed to fetch images. Please try again later.")}).finally(()=>{b(),i.target.reset()})}function n(i){l.error({message:i,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})}function O(i){l.info({message:i,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})}
//# sourceMappingURL=index.js.map
