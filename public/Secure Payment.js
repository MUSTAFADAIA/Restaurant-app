function vielistnav(){
let namf=document.querySelector('#namf').classList.toggle('hidden')

}
// =======================

function changeBackgroundColor(button){
    button.classList.toggle('bg-[#398fc1]')
    button.classList.toggle('border-0')
    button.classList.add('px-2')
     }
    //  ========================
    function addbourder(button) {
        button.classList.toggle('border-[#398fc1]')
        button.classList.toggle('border-2')
        button.classList.add('border-solid')
       
         }
        //  ===================
        function startchange(star){
            star.classList.remove('text-[#b1b1b1]');
            star.classList.toggle('text-[#fded3f]');
        }
    //  =====================
    function deleteDiv(img) {
        var div = img.closest('.mt-6'); // Find the closest parent div with the class "ml-5"
        div.classList.add('hidden'); // Add the "hidden" class to hide the div
    }
    //  =====================
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

    let counter=1;
function  count(){
let num=document.querySelector('#num')
counter++;
console.log(counter)
num.textContent = counter;
}

function  count2(){
let num=document.querySelector('#num')
counter--;
console.log(counter)
num.textContent = counter;
}
// ===================
let co=1;
function  count3(){
let num2=document.querySelector('#num2')
co++;
console.log(counter)
num2.textContent = co;
}
// =========\=====
function  count4(){
let num2=document.querySelector('#num2')
co--;
console.log(counter)
num2.textContent = co;
}
// ==============
function love(img) {
    img.classList.toggle('fa-regular');
    img.classList.toggle('fa-solid');
    img.classList.toggle('text-[#000000]');
    img.classList.toggle('text-[#ff0000]');
}
     