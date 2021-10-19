let authorsWrap=document.querySelector(".authors-wrap ")
let country=document.querySelector("#country")
let age=document.getElementById("age")
let user=localStorage.getItem("user")
let filterButton = document.querySelector('#filterId')
let authorslist=document.querySelector(".authors-list")
let veri=[];
    fetch(`https://randomuser.me/api/?results=${user}`)
    .then(response=>response.json())
    .then(data=>{
        setCountry(data)
        veri = [...data.results]
    }
   )


filterButton.addEventListener('click',filter);


function filter(){
    let countryValue = country.value
    console.log(veri)
   let veriDOM= veri.filter(task => task.location.country===country.value && task.dob.age === parseInt(age.value))
    console.log(veriDOM)
     veriDOM.map(ınfo=>{
         console.log(ınfo.picture)
         authorslist.innerHTML =`<li>
         <span>${ınfo.name.first} ${ınfo.name.last}</span>
         <span><img src=${ınfo.picture.medium}></img></span>
         <span>${ınfo.gender}</span>
         <span></span>
         <span></span>
         </li>`
         })
       
     }
    
     

function setCountry(data){
data.results.map(item=>{
    let newOption = new Option(item.location.country,item.location.country);
       
    country.appendChild(newOption);
})
    }


    // console.log(country.value)


   


   
   