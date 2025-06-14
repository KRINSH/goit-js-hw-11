import{a as u,S as m,i as c}from"./assets/vendor-Bz4lgVUE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="36979931-b9ebd2c49fac6caefdf5e0dc3";function g(o){return u.get("https://pixabay.com/api/",{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const l=document.querySelector(".loading-indicator"),f=document.querySelector(".photo-grid"),v=new m(".photo-link",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(o){const s=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:a,comments:d,downloads:p})=>`
				<div class="photo-card">
					<a class="photo-link" href="${n}">
						<div class="photo-image-wrapper">
							<img class="photo-image" src="${i}" alt="${e}" />
						</div>
						<div class="photo-info">
							<div class="info-item">
								<span class="info-label">Likes</span>
								<span class="info-value">${t}</span>
							</div>
							<div class="info-item">
								<span class="info-label">Views</span>
								<span class="info-value">${a}</span>
							</div>
							<div class="info-item">
								<span class="info-label">Comments</span>
								<span class="info-value">${d}</span>
							</div>
							<div class="info-item">
								<span class="info-label">Downloads</span>
								<span class="info-value">${p}</span>
							</div>
						</div>
					</a>
				</div>
			`).join("");f.innerHTML=s,v.refresh()}function b(){f.innerHTML=""}function L(){l.classList.add("visible")}function P(){l.classList.remove("visible")}const x=document.querySelector(".search-container");x.addEventListener("submit",S);function S(o){o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){r("Please enter a search query");return}b(),L(),g(s).then(({hits:i})=>{if(i.length===0){w("No images found. Please try a different search term.");return}y(i)}).catch(i=>{r("Failed to fetch images. Please try again later.")}).finally(()=>{P(),o.target.reset()})}function r(o){c.error({message:o,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})}function w(o){c.info({message:o,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})}
//# sourceMappingURL=index.js.map
