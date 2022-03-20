window.addEventListener("load",function(){
let boton = document.querySelector("button .action-button")
boton.addEventListener("click", function(evento){
    evento.preventDefault();
    alert("Tenes que loguearte")
})
})