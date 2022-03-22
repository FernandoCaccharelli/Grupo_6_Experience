window.addEventListener("load",function(){
let boton = document.querySelector("button#delete")
boton.addEventListener("click", function(evento){
    evento.preventDefault();
    confirm("Estás seguro de querer eliminar este producto?")
})
})