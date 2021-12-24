function onClickButton(){
  const buttons = document.querySelectorAll('.project__buttons');
  buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{

      if(e.target.classList[0]!=='project__buttons'){
        findTypeButton(e);
      }
    });
  })
}


function findTypeButton(e){
  const type = e.target.dataset.type;
  filterProject(type);
}

function filterProject(type){
  const projects = document.querySelectorAll('.project__container');
  if(type==='all'){
    projects.forEach((project)=>{
      project.classList.remove('display');
    })
  }else{
    projects.forEach((project,index)=>{
      if(type===project.dataset.type){
        project.classList.remove('display');
      }else{
        project.classList.add('display');
      }
    });
  }
}

function onClickIcon(){
  const goUpIcon = document.querySelector('.goback__first');
  goUpIcon.addEventListener('click',()=>{
    document.querySelector('#home').scrollIntoView(false);
  });
}

function init(){
  onClickButton();
  onClickIcon();
}

init();