var wrap=document.querySelector('.wrap')
var form = document.querySelector(".form")
var newlogin = document.querySelector('.newlogin')
var newsignup = document.querySelector('.newsignup')
var button  = document.querySelector('.button')
var email =document.getElementById("email")
var password = document.getElementById("password")
var pw = document.querySelector('.pw')
var pw2 = document.querySelector('.pw2')
var submit=document.querySelector('.submit')
var submit2=document.querySelector('.submit2')
var email2 = document.getElementById("email2")
var password2 = document.getElementById("password2")
var alertem = document.querySelector('.alertm')
var alertpw = document.querySelector('.alertp')
var alertem2 = document.querySelector('.alertm2')
var alertpw2 = document.querySelector('.alertp2')
var checkbox = document.querySelector('.checkbox')
var star = document.querySelector('.star')

newsignup.addEventListener('click',()=>{
    wrap.classList.add('active')
    email.style.borderBottomColor="rgb(211, 211, 211)"
    email2.style.borderBottomColor="rgb(211, 211, 211)"
    alertem2.style.display = "none"
    alertem.style.display = "none"
    password.style.borderBottomColor="rgb(211, 211, 211)"
    password2.style.borderBottomColor="rgb(211, 211, 211)"
    alertpw.style.display = "none"
    alertpw2.style.display = "none"
    pw.style.visibility="hidden"
    pw2.style.visibility="hidden"
    email.value="nojxhiu"
    email2.value=""
    password.value=""
    password2.value=""


}) 
newlogin.addEventListener('click',()=>{
    wrap.classList.remove('active')
}) 

button.addEventListener('click', ()=>{
    wrap.classList.add('activebutton')
})


function validEmail(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.style.borderBottomColor="rgb(116, 48, 46)"
        
    }
    else {
        email.style.borderBottomColor="rgb(61, 91, 61)"
        alertem.style.display = "none"
        return true
    }
} 
function validEmail2(){
    if(!email2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email2.style.borderBottomColor="rgb(116, 48, 46)"
        
    }
    else {
        email2.style.borderBottomColor="rgb(61, 91, 61)"
        alertem2.style.display = "none"
        return true
    }
} 

function validpw(){
    if(password.value.length<8){
        password.style.borderBottomColor="rgb(116, 48, 46)"
      

    }
    else {
        password.style.borderBottomColor="rgb(61, 91, 61)"
        alertpw.style.display = "none"
        return true
    }
}

function validpw2(){
    if(password2.value.length<8){
        password2.style.borderBottomColor="rgb(116, 48, 46)"
        pw2.style.display="block"

    }
    else {
        password2.style.borderBottomColor="rgb(61, 91, 61)"
        pw2.style.display="none"
        alertpw2.style.display = "none"
        return true

    }
}




function check(){
    if(email.value.length==0){
        alertem.style.display = "block"
        email.style.borderBottomColor="rgb(139, 67, 64)"
    }
    if(password.value.length==0){
        alertpw.style.display = "block"
        password.style.borderBottomColor="rgb(139, 67, 64)"}
    if (validEmail()===true && validpw()===true) {
        window.location.href='index.php'
    }}




function check2(){
    if(email2.value==""){
        alertem2.style.display = "block"
        email2.style.borderBottomColor="rgb(139, 67, 64)"}
    if(password2.value==""){
        alertpw2.style.display = "block"
        password2.style.borderBottomColor="rgb(139, 67, 64)"}
    if(checkbox.checked == 0){
        star.style.display = "block"
    } else    if(checkbox.checked == 0){ 
        star.style.display = "none" }
    if (validEmail2() && validpw2()) {
        window.location.href='index.php'
    }
    
}


