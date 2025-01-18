import{a as m,S,i as p}from"./assets/vendor-CSTHH2rc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";const g=(o,e)=>{const s={key:"48288540-d41f150545e6f7b8d91ef3882",q:o,image_type:"photo",orientation:"horizontal",page:e,per_page:15};return m.get("/",{params:s})},h=o=>o.reduce((e,s)=>e+`
      <li class="gallery-card">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>
        <div class="gallery-info">
          <div class="info-block">
            <p class="info-block-title">Likes:</p>
            <p class="info-block-value">${s.likes}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Views:</p>
            <p class="info-block-value">${s.views}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Comments:</p>
            <p class="info-block-value">${s.comments}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Downloads:</p>
            <p class="info-block-value">${s.downloads}</p>
          </div>
        </div>
      </li>
      `,""),y=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),i=document.querySelector(".load-more"),u=document.querySelector(".end-message"),v=new S(".gallery a");let a=1,n="",L=0;const b=15,q=async o=>{try{if(o.preventDefault(),n=o.currentTarget.elements.query.value.trim(),n===""){p.warning({title:"Warning",message:"The search field cannot be empty.",position:"topRight"});return}a=1,i.classList.add("is-hidden"),u.classList.add("is-hidden"),d.classList.remove("is-hidden");const e=await g(n,a);if(e.data.total===0){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",y.reset(),d.classList.add("is-hidden");return}e.data.totalHits>b?(i.classList.remove("is-hidden"),i.addEventListener("click",k)):u.classList.remove("is-hidden"),d.classList.add("is-hidden"),l.innerHTML=h(e.data.hits),v.refresh(),L=l.querySelector("li").getBoundingClientRect().height}catch(e){console.log(e)}};y.addEventListener("submit",q);const k=async o=>{try{a++;const e=await g(n,a);l.insertAdjacentHTML("beforeend",h(e.data.hits)),scrollBy({top:L*2,behavior:"smooth"}),v.refresh(),a*b>=e.data.totalHits&&(i.classList.add("is-hidden"),u.classList.remove("is-hidden"),i.removeEventListener("click",k))}catch(e){console.log(e)}};
//# sourceMappingURL=index.js.map
