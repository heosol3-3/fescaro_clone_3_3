// main.js

window.addEventListener('load', () =>{



const sections = document.querySelectorAll("#container>section");
console.log(sections);
const footer = document.querySelector("#footer");
let fotTop = footer.offsetTop;
console.log(fotTop);

let devHeight;
devHeight=window.innerHeight;
console.log(devHeight);
for(let i=0; i<sections.length; i++){
  sections[i].style.height = `${devHeight}px`;
}

const lis = document.querySelectorAll(".snb_bar>li");
console.log(lis);
lis.forEach((li,i)=>{
  li.addEventListener("click",e=>{
    e.preventDefault();
    window.scroll({
      top: (i*devHeight),
      left:0,
      behavior:"smooth"
    });
  });
  window.addEventListener('resize',()=>{
    devHeight = window.innerHeight;
  })
});

for(let i=0;i<sections.length;i++){
  sections[i].addEventListener('wheel',e=>{
    if(e.deltaY < 0){
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      window.scroll({
        top:prev,
        left:0,
        behavior:'smooth'
      });
    }else if(e.deltaY > 0){
      let next = e.currentTarget.nextElementSibling.offsetTop;
      window.scroll({
        top:next,
        left:0,
        behavior:'smooth'
      })
    }
  })
}

const btnTop = document.querySelector("a.btn_top");
const btnContact = document.querySelector("a.btn_contact")


btnTop.addEventListener("click",e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  })
})

window.addEventListener('scroll',e=>{
  let scrolls = document.querySelector('html').scrollTop;
    if(scrolls>=0 && scrolls<devHeight*1-10){
      btnTop.classList.remove("on","black")

      btnContact.classList.remove("on","bt","black");
      btnContact.classList.add("bt");
    }else if(scrolls>=(devHeight*1)-10 && scrolls<devHeight*2-10){
      btnTop.classList.remove("black");
      btnTop.classList.add("on");
      btnContact.classList.remove("black","bt");
      btnContact.classList.add("on");

    }else if(scrolls>=(devHeight*2)-10 && scrolls<devHeight*3){
      btnTop.classList.add("black");
      btnContact.classList.add("black");

    }else if(scrolls>=(devHeight*3)-10 && scrolls<(devHeight*4)+20){
      btnTop.classList.remove("black","ab");
      btnTop.classList.add("on");
      btnContact.classList.remove("black","ab");
      btnContact.classList.add("on");

    }else{
      btnTop.classList.remove("on");
      btnTop.classList.add("ab");
      btnContact.classList.remove("on");
      btnContact.classList.add("ab");

    }
})



function activation(index,list){
  for(let el of list){
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}


const slide_bar = document.querySelector(".slide_bar span");
const nextNum = document.querySelector(".slide_bar>next_num")

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


})