console.log("probando");
window.addEventListener("load",function(){
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", function(evento){
      
        let errores = [];
        let name = document.querySelector("input#name")
        if(name.value == ""){
            errores.push("Tenes que escribir un nombre")
        }else if(name.value.length < 4){
            errores.push("Tiene que tener al menos 4 caracteres")
        }
       
        let description = document.querySelector("textarea#description")
        if(description.value == ""){
            errores.push("Tenes que darle una descripción")
        }else if(description.value.length < 20){
            errores.push("Tiene que tener al menos 20 caracteres")
        }

         let image = document.querySelector("input#image")
         if(description.value == ""){
            errores.push("Tenes que subir una imagen")
        }else if(!/\.(jpg|png|gif)$/i .test(image.value)){
            errores.push("La extensión de este archivo es inválida")
         }
        
        let listaErrores = document.querySelector("div.errores")
        listaErrores.style.color = "#F3832B";

        if(errores.length > 0){
            evento.preventDefault();
            listaErrores.innerHTML = errores.join("<br>") 
        }
        
    })
})