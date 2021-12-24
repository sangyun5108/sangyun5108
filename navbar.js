'use strict'

//Navbar 색 변경
function changeScrollY(){
  document.addEventListener('scroll',handleScroll);
}

function handleScroll(){
  onScrollChangeItemsOpacity(window.scrollY);
  changeNavbarColor(window.scrollY);
}

function changeNavbarColor(scrollY){  
  const navbar = document.querySelector('#navbar');
  const navbarItems = document.querySelector('.navbar__menu');
  const navbarheight = navbar.getBoundingClientRect().height;

  if(scrollY>navbarheight){
    navbar.style.backgroundColor = '#000000';
    navbarItems.style.backgroundColor = '#000000';
  }else {
    navbar.style.backgroundColor = '#24292E';
    navbarItems.style.backgroundColor = '#24292E';
  }
}

function onClickNavbarItems(){
  const navbarMenus = document.querySelector('.navbar__menu');
  navbarMenus.addEventListener('click',(e)=>{
    document.removeEventListener('scroll',handleScroll);
    goCorrectPage(e);
    onClickChangeItemsOpacity(e);
  });
}

function goCorrectPage(e){
  const target = e.target;
  const link = target.dataset.link;

  if(link == null){
    return;
  }
  
  let type = 'start';

  if(link == '#about'){
    type = 'center';
  }else if(link == '#skills'){
    type = 'start';
  }else if(link == '#home'){
    document.querySelector(link).scrollIntoView(false);
    return;
  }else{
    type = 'start';
  }
    document.querySelector(link).scrollIntoView({block:type});
}

function init(){
  changeScrollY();
  onClickNavbarItems();
}

init();
