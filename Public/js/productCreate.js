console.log("probando");
window.addEventListener("load",function(){
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", function(evento){
       
        let errores = [];
        let name = document.querySelector("input#name")
        if(name.value == ""){
            errores.push("Tenes que escribir un nombre")
        }else if(name.value.length < 5){
            errores.push("Tiene que tener al menos 5 caracteres")
        }
       
        let description = document.querySelector("textarea#description")
        if(description.value == ""){
            errores.push("Tenes que darle una descripción")
        }else if(description.value.length < 20){
            errores.push("Tiene que tener al menos 20 caracteres")
        }

        //  let image = document.querySelector("input#image")
        //  if(image.value !== ".jpg"){
        //     errores.push("Archivo inválido")
        //  }
        
        if(errores.length > 0){
            evento.preventDefault();
            let listaErrores = document.querySelector("div.errores ul")
            for(let i = 0; i < errores.length; i++){
                listaErrores.innerHTML += "<li>" + errores[i] + "</li>"
         }

        }

        
    })
})