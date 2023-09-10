async function AddProduct(jsondata)
{
  let Murl="https://azai-project-one.onrender.com/api/v1/users/singIn";

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
        document.querySelector('#pcourse').innerHTML=`Login succeeded`;
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
    let Email=document.querySelector('#Email');
    let Password=document.querySelector('#password');

    let jsondata={
      "email": Email.value,
      "password": Password.value
    }
    jsondata=JSON.stringify(jsondata)
     AddProduct(jsondata);
  })
}   
