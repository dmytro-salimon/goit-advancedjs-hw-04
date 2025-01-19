import{a as p,S,i as f}from"./assets/vendor-CSTHH2rc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();p.defaults.baseURL="https://pixabay.com/api/";const g=(r,e)=>{const t={key:"48288540-d41f150545e6f7b8d91ef3882",q:r,image_type:"photo",orientation:"horizontal",page:e,per_page:15};return p.get("/",{params:t})},h=r=>r.reduce((e,t)=>e+`
      <li class="gallery-card">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="gallery-info">
          <div class="info-block">
            <p class="info-block-title">Likes:</p>
            <p class="info-block-value">${t.likes}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Views:</p>
            <p class="info-block-value">${t.views}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Comments:</p>
            <p class="info-block-value">${t.comments}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Downloads:</p>
            <p class="info-block-value">${t.downloads}</p>
          </div>
        </div>
      </li>
      `,""),y=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader"),o=document.querySelector(".load-more"),u=document.querySelector(".end-message"),L=new S(".gallery a");let n=1,c="",v=0;const b=15,q=async r=>{try{if(r.preventDefault(),c=r.currentTarget.elements.query.value.trim(),c===""){f.warning({title:"Warning",message:"The search field cannot be empty.",position:"topRight"});return}n=1,o.classList.add("is-hidden"),u.classList.add("is-hidden"),a.innerHTML="",l.classList.remove("is-hidden");const e=await g(c,n);if(e.data.total===0){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="",y.reset(),l.classList.add("is-hidden");return}e.data.totalHits>b?(o.classList.remove("is-hidden"),o.addEventListener("click",k)):u.classList.remove("is-hidden"),l.classList.add("is-hidden"),a.innerHTML=h(e.data.hits),L.refresh(),v=a.querySelector("li").getBoundingClientRect().height}catch(e){console.log(e)}};y.addEventListener("submit",q);const k=async r=>{try{n++,o.classList.add("is-hidden"),l.classList.remove("is-hidden");const e=await g(c,n);a.insertAdjacentHTML("beforeend",h(e.data.hits)),scrollBy({top:v*2,behavior:"smooth"}),L.refresh(),n*b>=e.data.totalHits?(o.classList.add("is-hidden"),u.classList.remove("is-hidden"),o.removeEventListener("click",k)):o.classList.remove("is-hidden"),l.classList.add("is-hidden")}catch(e){console.log(e)}};
//# sourceMappingURL=index.js.map
