// header.js

const wrap = document.querySelector("#wrap");
const header = document.querySelector("#header");
const topMenu = document.querySelector(".top_menu")
const gnbMenu = document.querySelector(".gnb>ul");
const gnbLi = document.querySelectorAll(".gnb>ul>li");
const gnbDiv = document.querySelectorAll(".gnb>ul>li>div");
const btnSitemap = document.querySelector(".btn_sitemap");
const sitemapWrap = document.querySelector(".sitemap_wrap");
console.log(sitemapWrap);


// header
for(let el of gnbLi){
  el.addEventListener("mouseenter",e=>{
    header.querySelector("h1").classList.add("on");
    header.querySelector(".header_wrap").style.height = `62.95vh`
    header.querySelector(".header_wrap").style.background = `#fff`
    gnbMenu.classList.add("on");
    e.currentTarget.classList.add("on")
    topMenu.classList.add("on");
    for(let el of gnbDiv){
      el.style.display = "block"
    }
    btnSitemap.classList.add("on");
    
  })
  el.addEventListener("mouseleave",e=>{
    header.querySelector("h1").classList.remove("on");
    header.querySelector(".header_wrap").style.height = `0vh`
    header.querySelector(".header_wrap").style.background = `none`
    gnbMenu.classList.remove("on");
    el.classList.remove("on");
    topMenu.classList.remove("on");
    for(let el of gnbDiv){
      el.style.display = "none"
    }
    btnSitemap.classList.remove("on");
  })
}

// sitemap

btnSitemap.addEventListener("click",e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("black")
  sitemapWrap.classList.toggle("on");

})

// 색상변경
window.addEventListener('wheel',()=>{
  if(window.offsetTop >= devHeight*2 && window.offsetTop <= devHeight*3){
    topMenu.classList.add("on");
  }else{topMenu.classList.remove("on");}
})