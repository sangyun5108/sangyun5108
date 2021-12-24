
function onClickButton(){

  document.querySelector('.home__to__about').addEventListener('click',(e)=>{
    const link = e.target.dataset.link;
    const about = document.querySelector(link);
    about.scrollIntoView({block:'center'});
  });
}

function init(){
  onClickButton();
}

init();