const loginForm = document.querySelector("#login-btn")
loginForm.addEventListener("click",show_login);
function show_login() {
   this.classList.add("changecolor");
   document.querySelector(".login-form").classList.toggle("active");
   document.querySelector(".coment-form").classList.remove("active");
   document.querySelector("#nav_items").classList.remove("active");
   navbarForm.classList.remove("fa-times");
   

}


const comentForm =document.querySelector("#coment")
 comentForm.addEventListener("click",show_form) ;
  function show_form(){
    document.querySelector(".coment-form").classList.toggle("active");
    document.querySelector("#nav_items").classList.remove("active");
    document.querySelector(".login-form").classList.remove("active");
    navbarForm.classList.remove("fa-times");
}

const removeForm = document.querySelector("#close")
removeForm.addEventListener("click" , remove_form);
function remove_form(){
  document.querySelector(".coment-form").classList.remove("active"); 
}



const navbarForm = document.querySelector("#menu-btn")
navbarForm.addEventListener("click",()=> {
   navbarForm.classList.toggle("fa-times");
   document.querySelector("#nav_items").classList.toggle("active");
   document.querySelector(".coment-form").classList.remove("active");
   document.querySelector(".login-form").classList.remove("active");

})




var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     640: {
       slidesPerView: 1,
       spaceBetween: 5,
     },
     768: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     1024: {
       slidesPerView: 3,
       spaceBetween: 20,
     },
   },
 });    

window.addEventListener("scroll",scrolFunction);
function scrolFunction(){

     navbarForm.classList.remove("fa-times");
     document.querySelector("#nav_items").classList.remove("active");
     document.querySelector(".coment-form").classList.remove("active");
     document.querySelector(".login-form").classList.remove("active");
    }


   