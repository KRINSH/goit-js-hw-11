import{a as m,S as d,i as f}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="36979931-b9ebd2c49fac6caefdf5e0dc3",p="https://pixabay.com/api/";async function g(s){const t={key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(p,{params:t})).data}catch{throw new Error("Failed to fetch images")}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),h=({webformatURL:s,largeImageURL:t,tags:o,likes:i,views:e,comments:r,downloads:a})=>`
	<li class="gallery-item">
		<a class="gallery-link" href="${t}">
			<img class="gallery-image" src="${s}" alt="${o}" loading="lazy" />
			<div class="gallery-info">
				<p class="info-item"><b>Likes</b> ${i}</p>
				<p class="info-item"><b>Views</b> ${e}</p>
				<p class="info-item"><b>Comments</b> ${r}</p>
				<p class="info-item"><b>Downloads</b> ${a}</p>
			</div>
		</a>
	</li>
`,b=s=>{const t=s.map(h).join("");c.innerHTML=t,y.refresh()},L=()=>{c.innerHTML=""},S=()=>{l.classList.remove("hidden")},w=()=>{l.classList.add("hidden")},P=document.querySelector(".form"),n=(s,t="error")=>{f[t]({message:s,position:"topRight",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fafafb",closeOnClick:!0})},q=async s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){n("Please enter a search query");return}L(),S();try{const{hits:o}=await g(t);if(o.length===0){n("Sorry, there are no images matching your search query. Please try again!","info");return}b(o)}catch{n("Failed to fetch images. Please try again later.")}finally{w(),s.target.reset()}};P.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
