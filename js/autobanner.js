const box = document.querySelector(".banner_inner")
const banner = document.querySelectorAll(".banner_inner ul");
let getWidth = banner[0].querySelector("li>.banner").offsetWidth+10;
let banner_position = 0;

box.addEventListener("click", e=>{
  e.preventDefault();
  banner_position++;
  banner[1].style.left = `${getWidth*banner_position}px`;
  banner[0].style.left = `${getWidth*banner_position}px`;
  banner[2].style.left = `${getWidth*banner_position}px`;
  setProperty(banner[0],"all");
  setProperty(banner[1],"all");
  setProperty(banner[2],"all");
 console.log(banner_position)
  if(banner_position <= 4){
    setProperty(banner[2],"none");
    banner[2].style.transform = `translateX(-300%)`;
  } else if (banner_position <= 8 & banner_position > 4){
    setProperty(banner[1],"none");
    banner[1].style.transform = `translateX(-300%)`;
  } else if (banner_position < 12 & banner_position > 8){
   
    setProperty(banner[0],"none");
    banner[0].style.transform = `translateX(-300%)`;
  }
    else{
      banner_position = 0;
      banner[0].style.transform = `translateX(0%)`;
      banner[1].style.transform = `translateX(0%)`;
      banner[2].style.transform = `translateX(0%)`;
      banner[1].style.left = `${getWidth*banner_position}px`;
      banner[0].style.left = `${getWidth*banner_position}px`;
      banner[2].style.left = `${getWidth*banner_position}px`;
    }
})

function setProperty(obj,value){
  obj.style.transitionProperty = value;
} 