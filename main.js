document.querySelector('.search').addEventListener("click",()=>{
    document.querySelector('.modal').style.display="flex"
    document.querySelector('.searchDiv').style.dsiplay="block"
  })
  document.querySelector('.modal').addEventListener("click",(e)=>{
    if (document.querySelector('.searchDiv').contains(e.target)){
       
      } else{
        document.querySelector('.modal').style.display="none"
        document.querySelector('.searchDiv').style.dsiplay="none"
      }
  })