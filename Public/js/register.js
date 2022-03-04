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
        }  
        let password = document.querySelector("input.password")
        if(password.value == ""){
            errores.push("Tenes que escribir una contraseña")
        }else if(password.value.length < 8){
            errores.push("Tiene que tener al menos 8 caracteres")
        }
 
        if(errores.length > 0){
            evento.preventDefault();
            let listaErrores = document.querySelector("div.errores ul")
            for(let i = 0; i < errores.length; i++){
                listaErrores.innerHTML += "<li>" + errores[i] + "</li>"
         }

        }

        
    })
})

