import{a as f,S as d,i as m}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="36979931-b9ebd2c49fac6caefdf5e0dc3",p="https://pixabay.com/api/",h=async o=>{const t={key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(p,{params:t})).data}catch{throw new Error("Failed to fetch images")}},c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),g=({webformatURL:o,largeImageURL:t,tags:s,likes:i,views:e,comments:r,downloads:a})=>`
	<li class="gallery-item">
		<a class="gallery-link" href="${t}">
			<img class="gallery-image" src="${o}" alt="${s}" loading="lazy" />
			<div class="gallery-info">
				<p class="info-item"><b>Likes</b> ${i}</p>
				<p class="info-item"><b>Views</b> ${e}</p>
				<p class="info-item"><b>Comments</b> ${r}</p>
				<p class="info-item"><b>Downloads</b> ${a}</p>
			</div>
		</a>
	</li>
`,b=o=>{const t=o.map(g).join("");c.innerHTML=t,y.refresh()},L=()=>{c.innerHTML=""},w=()=>{l.classList.remove("hidden")},P=()=>{l.classList.add("hidden")},S=document.querySelector(".search-form"),n=(o,t="error")=>{m[t]({message:o,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})},O=async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){n("Please enter a search query");return}L(),w();try{const{hits:s}=await h(t);if(s.length===0){n("No images found. Please try a different search term.","info");return}b(s)}catch{n("Failed to fetch images. Please try again later.")}finally{P(),o.target.reset()}};S.addEventListener("submit",O);
//# sourceMappingURL=index.js.map
