let select=document.querySelector("#task")
let ghostRoundFullWidth=document.querySelector(".ghost-round ")
let inputLineFullWidth=document.querySelector(".input-line ")

window.addEventListener('load', (event) => {
    if(localStorage.getItem('user')){
   window.location.href="index2.html";
    }
  
  
  });

  inputLineFullWidth.addEventListener("change",(e)=>{
    var veri=e.target.value
localStorage.setItem("user",veri)
  })
 
  



