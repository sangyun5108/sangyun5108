// 하나의 함수에는 하나의 기능만
'use strict'

function changeScrollY(){
  document.addEventListener('scroll',()=>{
    changeNavbarColor(window.scrollY);
  });
}

function changeNavbarColor(scrollY){  

  const navbar = document.querySelector('#navbar');

  const navbarheight = navbar.getBoundingClientRect().height;

  if(scrollY>navbarheight){
    navbar.style.backgroundColor = '#000000';
  }else {
    navbar.style.backgroundColor = '#24292E';
  }
}

function init(){
  changeScrollY();
}

init();
