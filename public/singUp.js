window.addEventListener('scroll',revel)
function revel(){
    var revel=document.querySelectorAll('.revel')
    for(var i=0 ;i<revel.length ; i++){
        var windowhigt=window.innerHeight;
        var reveltop=revel[i].getBoundingClientRect().top
        var revelpoint=150;

        if(reveltop < windowhigt-revelpoint){
            revel[i].classList.add('active')
        }
        else{
            revel[i].classList.remove('active')

        }
    }
}
// ===================================
async function AddProduct(jsondata)
{
  let Murl="https://azai-project-one.onrender.com/api/v1/users/singUp";

  fetch(Murl,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },

    body:jsondata
    
  }).then(resp =>{
    if(resp.ok){
      resp.json().then(data =>{
        document.querySelector('#pcourse').classList.remove('text-red-500')
        document.querySelector('#pcourse').classList.add('text-blue-500')
        document.querySelector('#pcourse').innerHTML=`Your Account has been added successfully  `;
        window.location='./index.html'
      });
    }
    else{
      resp.json().then(data =>{
        document.querySelector('#pcourse').classList.remove('text-blue-500')
        document.querySelector('#pcourse').classList.add('text-red-500')

      document.querySelector('#pcourse').innerHTML=` ${data.error.message}`;
    })
    }
  }).catch(er=>{
      console.error('Call Api Error' ,er)
    });

}


window.onload=()=>
{
  document.querySelector('#submit').addEventListener('click',  function(event){
    event.preventDefault()
    let Lastname=document.querySelector('#Lastname')
    let Firstname=document.querySelector('#Firstname')
    let Email=document.querySelector('#Email');
    let number=document.querySelector('#number');
    let Password=document.querySelector('#Password');

    let jsondata={
      "firstName": Firstname.value,
      "lastName": Lastname.value,
      "email": Email.value,
      "password": Password.value,
      "phoneNumber": number.value
    }
    jsondata=JSON.stringify(jsondata)
     AddProduct(jsondata);


  })
}   



let clic =document.querySelector('#clic')
let gg =document.querySelector('#gg')
let jj=document.querySelector('#jj')
let jk=document.querySelector('#jk')
let jl=document.querySelector('#jl')
let jh= document.querySelector('#jh')
function hhh(){
clic.classList.toggle('hidden')
}
jj.addEventListener('click',chj)
jk.addEventListener('click',chjk)
jl.addEventListener('click',chjl)
jh.addEventListener('click',chjh)
function chj(){
clic.classList.add('hidden')
let h=jj.innerHTML
gg.innerHTML=''
let butrn=document.createElement('button')
butrn.className='bg-white w-[130px] flex p-3'
butrn.setAttribute("data-toggle", "dropdown");

butrn.innerHTML=h
gg.appendChild(butrn)

}
function chjk(){
clic.classList.add('hidden')
let h=jk.innerHTML
gg.innerHTML=''
let butrn=document.createElement('button')
butrn.className='bg-white w-[130px] flex p-3'
butrn.setAttribute("data-toggle", "dropdown");


butrn.innerHTML=h
gg.appendChild(butrn)
}
function chjl(){
clic.classList.add('hidden')
let h=jl.innerHTML
gg.innerHTML=''
let butrn=document.createElement('button')
butrn.className='bg-white w-[130px] flex p-3'
butrn.setAttribute("data-toggle", "dropdown");


butrn.innerHTML=h
gg.appendChild(butrn)
}
function chjh(){
clic.classList.add('hidden')
let h=jh.innerHTML
gg.innerHTML=''
let butrn=document.createElement('button')
butrn.className='bg-white w-[130px] flex p-3'
butrn.setAttribute("data-toggle", "dropdown");

butrn.innerHTML=h
gg.appendChild(butrn)
}
// ====================
function keepServerAlive() {
  // Replace with your server's URL
  const serverURL = 'https://azai-project-one.onrender.com/'; // Replace with your actual URL
  
  // Ping the server route to keep it awake
  fetch(serverURL)
      .then(response => {
          if (response.ok) {
              console.log('Server pinged successfully.');
          } else {
              console.error('Server ping failed:', response.status);
          }
      })
      .catch(error => {
          console.error('An error occurred while pinging the server:', error);
      });
}

// Ping the server every 15 minutes (adjust as needed)
setInterval(keepServerAlive(), 1 * 60 * 1000); // 15 minutes in milliseconds
