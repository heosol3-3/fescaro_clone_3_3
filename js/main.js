// main.js

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

