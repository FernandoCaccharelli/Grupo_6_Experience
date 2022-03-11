window.addEventListener("load",function(){

    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", function(evento){
       
        let errores = [];
    
        let name = document.querySelector("input.name")
        if(name.value == ""){
            errores.push("Tenes que escribir un nombre")
        }else if(name.value.length < 2){
            errores.push("Tiene que tener al menos 2 caracteres")
        }

        let lastName = document.querySelector("input.lastName")
        if(lastName.value == ""){
            errores.push("Tenes que escribir un apellido")
        }else if(lastName.value.length < 2){
            errores.push("Tiene que tener al menos 2 caracteres")
        }

        let email = document.querySelector("input.email")
        if(email.value == ""){
            errores.push("Tenes que escribir un email")
        } else if(!/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com)+$/.test(email.value)){
            errores.push("Email inválido")
        }

        let password = document.querySelector("input.password")
        if(password.value == ""){
            errores.push("Tenes que escribir una contraseña")
        }else if(password.value.length < 8){
            errores.push("La contraseña tiene que tener al menos 8 caracteres")
        }
        let birthdate = document.querySelector("input.birthdate")
        if(birthdate.value == ""){
            errores.push("Tenes que escribir una fecha")
        }
        let image = document.querySelector("input#image")
         if(description.value == ""){
            errores.push("Tenes que subir una imagen")
        }else if(!/\.(jpg|png|gif)$/i .test(image.value)){
            errores.push("La extensión de este archivo es inválida")
         }

        let check= document.querySelector("input.check")
        if(!check.checked) {
            errores.push("Tiene que aceptar los términos")
        }

        let listaErrores = document.querySelector("div.errores")
        listaErrores.style.color = "#F3832B";
        if(errores.length > 0){
            evento.preventDefault();
            listaErrores.innerHTML = errores.join("<br>") 
        }

         
        
    })
})

