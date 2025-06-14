import{a as u,S as g,i as n}from"./assets/vendor-tXluipvR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="36979931-b9ebd2c49fac6caefdf5e0dc3";function h(a){return u.get("https://pixabay.com/api/",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".loader"),c=document.querySelector(".gallery");let y=new g(".gallery-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(a){const r=a.hits.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:o,comments:d,downloads:f})=>`<li class="gallery-item">
      <a class="gallery-link" href=${s}>
      <div class="image-container">
        <img class="gallery-image" src="${i}" alt="${e}" />
      </div>
      <div class="image-inform">
        <div>
          <h3 class="image-inform-title">Likes</h3>
          <span class="image-inform-text">${t}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Views</h3>
          <span class="image-inform-text">${o}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Comments</h3>
          <span class="image-inform-text">${d}</span>
        </div>
        <div>
          <h3 class="image-inform-title">Downloads</h3>
          <span class="image-inform-text">${f}</span>
        </div>
      </div>
    </a>
  </li>`).join("");c.innerHTML=r,y.refresh()}function L(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const m=document.querySelector(".form"),P=m.querySelector('input[name="searchQuery"]');m.addEventListener("submit",async a=>{a.preventDefault();const r=P.value.trim();if(!r){n.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}L(),b();try{const i=await h(r);i.length===0?n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):v(i)}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
