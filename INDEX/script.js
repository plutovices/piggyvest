const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu ')
toggleBtn.onclick = function (){
   dropDownMenu.classList.toggle('open')
   const isOpen = dropDownMenu.classList.contains("open")
   
   toggleBtnIcon.classList = isOpen
     ? "fa-solid fa-xmark"
     : "fa-solid fa-piggy-bank"
}

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})