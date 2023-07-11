var wrap=document.querySelector('.wrap')
var newlogin = document.querySelector('.newlogin')
var newsignup = document.querySelector('.newsignup')
var button  = document.querySelector('.button')
var content = document.querySelector('.content')
var email =document.getElementById("email")
var password = document.getElementById("password")
var button_inter = document.querySelector('.buttoninter')
var pw = document.querySelector('.pw')
var pw2 = document.querySelector('.pw2')
var submit=document.querySelector('.submit')
var submit2=document.querySelector('.submit2')
var email2 = document.getElementById("email2")
var password2 = document.getElementById("password2")
var alertem = document.querySelector('.alertem')
var alertpw = document.querySelector('.alertpw')
var alertem2 = document.querySelector('.alertem2')
var alertpw2 = document.querySelector('.alertpw2')
var checkbox = document.querySelector('.checkbox')
var star = document.querySelector('.star')
var ion = document.querySelector('.ion')

newsignup.addEventListener('click',()=>{
    wrap.classList.add('active')
    email.style.borderBottomColor="black"
    email2.style.borderBottomColor="black"
    alertem2.style.display = "none"
    alertem.style.display = "none"
    password.style.borderBottomColor="black"
    password2.style.borderBottomColor="black"
    alertpw.style.display = "none"
    alertpw2.style.display = "none"
    pw.style.visibility="hidden"
    pw2.style.visibility="hidden"
    email.value=""
    email2.value=""
    password.value=""
    password2.value=""


}) 
newlogin.addEventListener('click',()=>{
    wrap.classList.remove('active')
}) 

button.addEventListener('click', ()=>{
    wrap.classList.add('activebutton')
    content.classList.add('gone')    
})


function validEmail(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.style.borderBottomColor="red"
        
    }
    else {
        email.style.borderBottomColor="green"
        alertem.style.display = "none"
    }
} 
function validEmail2(){
    if(!email2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email2.style.borderBottomColor="red"
        
    }
    else {
        email2.style.borderBottomColor="green"
        alertem2.style.display = "none"

    }
} 

function validpw(){
    if(password.value.length<8){
        password.style.borderBottomColor="red"
      

    }
    else {
        password.style.borderBottomColor="green"
        alertpw.style.display = "none"

    }
}

function validpw2(){
    if(password2.value.length<8){
        password2.style.borderBottomColor="red"
        pw2.style.display="block"

    }
    else {
        password2.style.borderBottomColor="green"
        pw2.style.display="none"
        alertpw2.style.display = "none"


    }
}

submit.addEventListener('click', ()=>{
    if(email.value==""){
        alertem.style.display = "block"
        email.style.borderBottomColor="red"}
    if(password.value==""){
        alertpw.style.display = "block"
        password.style.borderBottomColor="red"}
    else if (password.value!="" && email.value!="") {
        window.location.href='copenhagenafter.html'
    }
})

if(checkbox.checked == 1) {
    star.style.display = "none"

}

submit2.addEventListener('click', ()=>{
    if(email2.value==""){
        alertem2.style.display = "block"
        email2.style.borderBottomColor="red"}
    if(password2.value==""){
        alertpw2.style.display = "block"
        password2.style.borderBottomColor="red"}
    if(checkbox.checked == 0){
        star.style.display = "block"
    }
    if (password2.value!="" && email2.value!="" && checkbox.checked == 1){
        window.location.href='copenhagenafter.html'
    }
    
})

ion.addEventListener('click', ()=>{
    wrap.classList.remove('activebutton')
    content.classList.remove('gone')
   
})

