console.log("probando");
window.addEventListener("load",function(){
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", function(evento){
        let errores = [];

        let email = document.querySelector("input.email")
        if(email.value == ""){
            errores.push("Tenes que escribir un email")
        }  
        valor = document.getElementById("email").value;
        if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
         errores.push("email inválido");
      }
      
        let password = document.querySelector("input.password")
        if(password.value == ""){
            errores.push("Tenes que escribir una contraseña")
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