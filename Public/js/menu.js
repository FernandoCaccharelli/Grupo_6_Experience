console.log("probando");
window.addEventListener("load", function(){
    let menu = document.querySelector(".navbar");
    let openMenu = document.querySelector(".menu");
    let closeMenu = document.querySelector(".close-menu");

    openMenu.addEventListener("click", function toggleMenu(){
        menu.classList.toggle("menu_opened")
    })
    closeMenu.addEventListener("click", function toggleMenu(){
        menu.classList.toggle("menu_opened")
    })

})