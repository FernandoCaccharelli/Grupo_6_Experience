console.log("probando");
window.addEventListener("load",function(){
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", function(evento){
       
        let errores = [];

        let email = document.querySelector("input.email")
        if(email.value == ""){
            errores.push("Tenes que escribir un email")
        }else if( !/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com)+$/.test(email.value) ) {
         errores.push("Email inválido");
        }
      
        let password = document.querySelector("input.password")
        if(password.value == ""){
            errores.push("Tenes que escribir una contraseña")
        }
    
        let listaErrores = document.querySelector("div.errores") 
        listaErrores.style.color = "#F3832B";

        if(errores.length > 0){
            evento.preventDefault();
            listaErrores.innerHTML = errores.join("<br>")
        }

    })
    

})