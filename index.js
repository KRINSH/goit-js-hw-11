import{a as w,S as b,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const P="43934597-0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c",S="https://pixabay.com/api/";async function d(t,o=1){const s={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40};try{return(await w.get(S,{params:s})).data}catch{throw new Error("Failed to fetch images")}}const m=document.querySelector(".loader"),u=document.querySelector(".gallery"),h=document.querySelector(".load-more-btn");let q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function f(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:L,downloads:v})=>`
				<li class="gallery-item">
					<a href="${i}">
						<img src="${s}" alt="${e}" class="gallery-image" />
						<div class="image-inform">
							<div>
								<h3 class="image-inform-title">Likes</h3>
								<p class="image-inform-text">${r}</p>
							</div>
							<div>
								<h3 class="image-inform-title">Views</h3>
								<p class="image-inform-text">${n}</p>
							</div>
							<div>
								<h3 class="image-inform-title">Comments</h3>
								<p class="image-inform-text">${L}</p>
							</div>
							<div>
								<h3 class="image-inform-title">Downloads</h3>
								<p class="image-inform-text">${v}</p>
							</div>
						</div>
					</a>
				</li>
			`).join("");u.insertAdjacentHTML("beforeend",o),q.refresh()}function E(){u.innerHTML=""}function g(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function x(){h.classList.remove("hidden")}function y(){h.classList.add("hidden")}function $(){const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}const M=document.querySelector(".search-form"),R=document.querySelector(".load-more-btn");let a=1,l="";M.addEventListener("submit",async t=>{if(t.preventDefault(),a=1,l=t.target.searchQuery.value.trim(),!l){c.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}E(),y(),g();try{const o=await d(l,a);if(o.hits.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(o.hits),o.totalHits>a*40&&x()}catch{c.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{p()}});R.addEventListener("click",async()=>{a+=1,g();try{const t=await d(l,a);f(t.hits),$(),t.totalHits<=a*40&&(y(),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{c.error({title:"Error",message:"An error occurred while loading more images. Please try again later.",position:"topRight"})}finally{p()}});
//# sourceMappingURL=index.js.map
