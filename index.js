import{a as u,S as p,i as l}from"./assets/vendor-Bz4lgVUE.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="36979931-b9ebd2c49fac6caefdf5e0dc3";function y(r){return u.get("https://pixabay.com/api/",{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data)}const c=document.querySelector(".loading-indicator"),m=document.querySelector(".image-gallery");let v=new p(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function L(r){const i=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:s,comments:f,downloads:g})=>`<li class="gallery-item">
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
            <span class="image-inform-text">${f}</span>
          </div>
          <div>
            <h3 class="image-inform-title">Downloads</h3>
            <span class="image-inform-text">${g}</span>
          </div>
        </div>
      </a>
    </li>`).join("");m.innerHTML=i,v.refresh()}function x(){m.innerHTML=""}function b(){c.classList.remove("hidden")}function n(){c.classList.add("hidden")}const d=document.querySelector(".search-form");d.addEventListener("submit",S);n();function S(r){r.preventDefault(),x(),b();const i=r.target.elements["search-text"].value.trim();if(!i){l.error({message:"Please enter some valid search value!",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"}),n();return}y(i).then(({hits:a})=>{if(a.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0,position:"topRight"}),n();return}L(a)}).catch(a=>l.error({message:`${a.message}. Please try again later`,closeOnClick:!0,position:"topRight"})).finally(()=>{n(),d.reset()})}
//# sourceMappingURL=index.js.map
