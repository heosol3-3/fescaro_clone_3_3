const sections = document.querySelectorAll("section");
const footer = document.querySelector("#footer");
const snb = document.querySelectorAll(".snb li a");
const h2 = document.querySelectorAll("h2.char");
const p = document.querySelectorAll("p.char");
const btns = document.querySelector(".btns");
const btn_top = btns.querySelector(".btn_top")
const scroll_down = document.querySelector(".scroll_down");

const banner_btns = document.querySelectorAll(".banner_btns i");
const banner_num = document.querySelectorAll(".banner_btns p span");
const progress_bar = document.querySelector(".bar span");
const box = document.querySelector(".banner_inner")
const banner = document.querySelectorAll(".banner_inner ul");
let getWidth = banner[0].querySelector("li>.banner").offsetWidth+10;

let banner_position = 0;
let num = 1;

let slide_width = banner[0].offsetWidth;

// init
window.addEventListener("resize", e=>{
  slide_width = banner[0].offsetWidth;
  page_height = wrap.offsetHeight;
  page_width = wrap.offsetWidth;
})

sections[0].classList.add("active");
let h2_txt ='';
const gap = 0.03;
acttach_span(h2);
acttach_span(p);
set_transition(h2);

btn_top.addEventListener("click", e=>{
  e.preventDefault();
  scrollTo(sections[0],0);
  active_top(0);
});
window.addEventListener("resize", e=>{

})
// 스크롤
let flag = 0;
sections.forEach((el,i) =>{
  el.addEventListener("wheel", e=>{
    // console.log(e.deltaY); 아래 => 양수
    if(page_width > 1270){
      if(e.deltaY>0 & i==4){
        e.preventDefault();
        scrollTo(footer,0);
        for(let el of sections) el.classList.remove("active");
        flag = 1;
        console.log(1)
      }else if(flag == 1 & i == 4){
        e.preventDefault();
        scrollTo(sections[i],i);
        active_top(i);
        addClass(sections,i,"active");
        flag = 0;
      }
      else if(e.deltaY > 0 & i < sections.length-1 & flag == 0) {
        e.preventDefault();
        scrollTo(sections[i+1],i+1);
        active_top(i+1);
        addClass(sections,i+1,"active");
      }
      else if(e.deltaY < 0 & i > 0 & flag == 0){
        e.preventDefault();
        scrollTo(sections[i-1],i-1);
        active_top(i-1);
        addClass(sections,i-1,"active");
      }
    }
  });
});

window.addEventListener("scroll", e=>{
  scroll_po = window.pageYOffset;
  let point = page_height - sections[4].offsetHeight - footer.offsetHeight;

  page_width <= 1270 & scroll_po == 0? header.classList.add("top") : header.classList.remove("top"); 
  if(page_width > 1270){
    if(scroll_po == point){
      var btnFix = getAbHeight(btns);
      var headerFix = getAbHeight(header);
      var scrollFix = getAbHeight(scroll_down);
    }
    if(scroll_po >= point){
      fixPosition(btns,btnFix);
      fixPosition(header,headerFix);
      fixPosition(scroll_down,scrollFix);
    } else{
      initTop(header);
      initTop(btns);
      initTop(scroll_down );
    }
  }
})
// snb 클릭
snb.forEach((el,i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    scrollTo(sections[i],i);
    active_top(i);
  });
});

// content2 오토배너
let banner_timer = setTimeout(play_banner,1000); 

banners = document.querySelectorAll(`.banner`);
console.log(banners);
let focus_idx = 4;

let sec=0;
function play_banner(){
  sec == 0 ? progress_bar.style.transitionProperty = `none` : progress_bar.style.transitionProperty = `all`;
  let width = sec*20;
  sec++;
  progress_bar.style.width = `${width}%`;
  console.log(sec);
  if(sec > 6) {
    sec = 0;
    num++;
    banner_position--;
    switch_num(banner_num[0],banner_num[1],num,4)
    if(num == 4) {
      num = 0;
      banner_num[1].innerText = `0${num+1}`;
    }
    bannerRotate();
    turnOnBanner(); 
    // 이전 버튼을 누를 경우 -값을 받아야함. 
  }
  banner_timer = setTimeout(play_banner,1000);
}

banner_btns.forEach((el, i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    clearTimeout(banner_timer);
    sec = 0;
    turnOnBanner();

    if(i == 1) banner_position--;
    else banner_position++;
    console.log(banner_position);
    bannerRotate();
    banner_timer = setTimeout(play_banner,1000);
  })
})

function turnOnBanner(){
  banners.forEach((el,i) =>{
    if (el.classList.contains("on")) {
      if (i == banners.length-1) focus_idx = 0;
      else focus_idx = i+1;
      console.log(focus_idx);
    }
    el.classList.remove("on");
  })
  banners[focus_idx].classList.add("on");
}

function setTransform(obj,value){
  obj.style.transform = `translateX(${value}%)`;
}

function setProperty(obj,value){
  obj.style.transitionDuration = value;
} 

function bannerRotate(){
  setProperty(banner[0],".5s");
  setProperty(banner[1],".5s");
  setProperty(banner[2],".5s");
  setTransform(banner[0],`-0`);
  setTransform(banner[1],`-0`);
  setTransform(banner[2],`-0`);
  if(banner_position > -4 & banner_position <= 0){
    setProperty(banner[0],"0s");
      banner[0].style.transform = `translateX(300%)`;
      console.log(1)
    } else if (banner_position > -8 & banner_position <= -4){
      setProperty(banner[1],"0s");
      setTransform(banner[0],`300`);
      setTransform(banner[1],`300`);
      console.log(2)
    } else if (banner_position > -12 & banner_position <= -8){
      setProperty(banner[2],"0s");
      setTransform(banner[0],`300`);
      setTransform(banner[1],`300`);
      setTransform(banner[2],`300`);
      console.log(3)
    } else if(banner_position <= 4 & banner_position > 0){
      setProperty(banner[2],"0s");
      setTransform(banner[2],`-300`);
      console.log(4)
    } else if (banner_position <= 8 & banner_position > 4){
      setProperty(banner[1],"0s");
      setTransform(banner[1],`-300`);
      setTransform(banner[2],`-300`);
      console.log(5)
    } else if (banner_position < 12 & banner_position > 8){
      setProperty(banner[0],"0s");
      setTransform(banner[0],`-300`);
      setTransform(banner[1],`-300`);
      setTransform(banner[2],`-300`);
      console.log(6)
    } else{
      console.log(7)
      banner_position = 0;
      setProperty(banner[1],".5s");
      setTransform(banner[0],`0`);
      setTransform(banner[1],`0`);
      setTransform(banner[2],`0`);
    }
    banner[1].style.left = `${getWidth*banner_position}px`;
    banner[0].style.left = `${getWidth*banner_position}px`;
    banner[2].style.left = `${getWidth*banner_position}px`;
}

// function 모음
// 1. 초기설정
function acttach_span(object){
  object.forEach((el,i) =>{
    let h2_span = el.querySelectorAll(".char>span");
    for(let i=0;i<h2_span.length;i++){
      let arr="";
      for(let j=0;j<h2_span[i].innerText.length;j++) {
        h2_span[i].innerText[j] == ' ' ? arr+=` ` : arr+=`<span>${h2_span[i].innerText[j]}</span>`;
      } 
      h2_span[i].innerHTML = arr;
    }
  });
}
function set_transition(object){
  object.forEach((el,i) =>{
    let h2_span = el.querySelectorAll(".char>span");
    for (let el of h2_span){
      h2_txt = el.querySelectorAll("span");
      sections.forEach((el,j) =>{
        if (el.classList.contains("active")){
          h2_txt.forEach((el,i) =>{
          el.style.transitionDelay = `${(i*gap)+0.5}s`;
        }) 
        }
      })
    }
  });
}

// 2. 동작
function addClass(obj,idx,name){
  for(let el of obj) el.classList.remove(name);
  obj[idx].classList.add(name);
}

function getAbHeight(target){
  let targetTop = target.getBoundingClientRect().top;
  let abTop = sections[4].offsetTop+targetTop;
  return abTop
}

function initTop(obj){
  obj.classList.remove("fix");
  obj.style.top = `auto`;
}

function fixPosition(obj,height){
  obj.classList.add("fix");
  obj.style.top = `${height}px`;
}

function active_top(i){
  if (i == 0){
    btns.classList.remove("active");
  }else btns.classList.add("active");
}

function scrollTo(object,i){
  let height = object.offsetTop;
  snb[i].classList.add("on");
  window.scroll({
    top:height,
    behavior:"smooth"
  });
  nav_Interative(i);
  turn_black(i);
}

function turn_black(i){
  wrap.classList.remove("black");
  if(i==2 || i==3){
    wrap.classList.add("black");
  }
}

function nav_Interative(i){
  let bar = document.querySelector(".nav_bar");
  let prev = document.querySelector(".snb .prev_num");
  let next = document.querySelector(".snb .next_num");
  bar.style.height = `${(i+1)*20}%`;
  switch_num(prev,next,i+1,5);
}

function switch_num(prev,next,i,length){
  prev.innerText=`0${i}`;
  if(i==length) next.innerText=`0${length}`;
  else next.innerText=`0${i+1}`;
}


