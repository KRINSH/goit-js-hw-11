import{a as d,S as p,i as c}from"./assets/vendor-tXluipvR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="36979931-b9ebd2c49fac6caefdf5e0dc3";function h(o){return d.get("https://pixabay.com/api/",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1}}).then(t=>t.data)}const s=document.querySelector(".loader"),n=document.querySelector(".gallery");(!s||!n)&&console.error("Required elements not found: .loader or .gallery");let y=new p(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(o){if(!n)return;const t=o.hits.map(({webformatURL:i,largeImageURL:l,tags:e,likes:r,views:a,comments:f,downloads:u})=>`<li class="gallery-item">
      <a class="gallery-link" href=${l}>
      <div class="image-container">
        <img class="gallery-image" src="${i}" alt="${e}" />
      </div>
      <div class="image-inform">
        <div>
          <h3 class="image-inform-title">Likes</h3>
          <span class="image-inform-text">${r}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Views</h3>
          <span class="image-inform-text">${a}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Comments</h3>
          <span class="image-inform-text">${f}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Downloads</h3>
          <span class="image-inform-text">${u}</span>
        </div>
      </div>
    </a>
  </li>`).join("");n.innerHTML=t,y.refresh()}function L(){n&&(n.innerHTML="")}function b(){s&&s.classList.remove("hidden")}function q(){s&&s.classList.add("hidden")}const m=document.querySelector(".form"),P=m.querySelector('input[name="searchQuery"]');m.addEventListener("submit",async o=>{o.preventDefault();const t=P.value.trim();if(!t){c.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}L(),b();try{const i=await h(t);i.hits.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):v(i)}catch{c.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
