console.log("probando");
window.addEventListener("load",function(){
let boton = document.querySelector("buttom.action-button")

boton.addEventListener("onclick", function(evento){
    evento.preventDefault();
    conform=confirm("Estás seguro de querer eliminar este producto?")
    return confirm
})
})