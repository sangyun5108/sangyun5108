'use strict'

//Navbar 색 변경
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

function onClickNavbarItems(){
  const navbarMenus = document.querySelector('.navbar__menu');
  navbarMenus.addEventListener('click',(e)=>{
    goCorrectPage(e);
  });
}

const home = 0;
const about = 848;
const skill = 1683;
const project = 2280;

function goCorrectPage(e){
  const onClickItem = e.target.innerText;

  switch(onClickItem){
    case 'Home': 
      window.scrollTo(0,home);
      break;

    case 'About': 
      window.scrollTo(0,about);
      break;

    case 'Skill': 
      window.scrollTo(0,skill);
      break;

    case 'Project': 
      window.scrollTo(0,project);
      break;
    default : break;
  }
}


function init(){
  changeScrollY();
  onClickNavbarItems();
}

init();
