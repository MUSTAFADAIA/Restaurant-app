let url='https://azai-project-one.onrender.com/api/v1/products'
async function getProduct() {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let data = await resp.json();
        console.log(data.products.length)
        return data;
      } else throw new Error("error, " + resp.status);
    } catch (er) {
      console.error(er);
      return null;
    }
  }
  let contener =document.getElementById('contener')
  function renderProduct(){
    getProduct().then(data=>{
    for(let i=0 ; i<data.products.length ; i++){

        let div=document.createElement('div')
    div.className="md:w-[300px] revel col-3 w-[320px] md:h-[440px] h-[485px] m-5 mx-auto shadow-sm shadow-slate-500 rounded-xl"
    div.innerHTML=`
    <img class="h-[277px] rounded-xl" src="${data.products[i].productImage}" alt="">
    <div class="mt-7 mr-5">
        <div class="flex justify-between md:w-[270px] w-[280px]">
            <h1 class="font-semibold">${data.products[i].productName}</h1>
            <i class="fa-regular fa-heart text-[#000000]" onclick="love(this)"></i>
        </div>
        <div class="flex  justify-between">
         <p class="text-[14px] text-slate-500  mt-2">${data.products[i].description}</p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap justify-between md:w-[270px] w-[280px] md:mt-0 mt-5">
            <div class="flex flex-wrap md:flex-nowrap">
                <h1 class="">${data.products[i].price}$</h1>
                <h1 class="text-[10px] text-gray-500 mt-2 mr-2 font-bold "><s>250$</s></h1>
            </div>
         
            <div class=" mt-1  flex flex-wrap justify-center  text-center px-1 h-[20px]">
                <i class="fa-regular fa-star-half-stroke fa-sm mt-3" style="color: #FFCA38;"></i>
                <p class="text-base text-black ml-[4px] mt-[2px] ">3.5</p>
            </div>
        </div>
    </div>
<div>
<button class="bg-[#012C7A]  w-full  h-[50px] rounded-xl mt-2 text-white text-[20px]"><a href=""></a>הוסף לעגלה</a></button>
`
contener.appendChild(div)
    }
    })

}
window.addEventListener('load',renderProduct())

// =============================
let singup2=document.querySelector('#singup2')
async function checkloginfun() {
fetch('https://azai-project-one.onrender.com/api/v1/users/check-login')
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {
            console.log('User is logged in');
            singup2.classList.add('hidden')
        } else {
            console.log('User is not logged in');
            let divnav=document.querySelector('#divnav')
            let divnavacti=document.createElement('div')
            divnavacti.className='w-[200px] h-[200px] bg-white shadow-lg shadow-[#000000] img fixed top-10 left-0' 
            divnavacti.innerHTML=`
           <h1 class="text-white text-[20px]">you must login</h1>

            ` 
            divnav.appendChild(divnavacti)
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });

  }
checkloginfun()
