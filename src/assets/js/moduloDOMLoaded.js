
let { log,dir } = console;

/* Función para recuperar string de location de pagina */
function pagAct(url) {


    let pagina = url.match(/\/(?<pagina>\w+).html/).groups.pagina;
    return pagina;
}

/* Función para recuperar data set de los links */

function recuperadataSet(elem) {
    let dataLocation = elem.dataset.location;
    return dataLocation
}

/* Funciones util para acortar querySelector - querySelectorAll */

let qs=(elem)=>{
    return document.querySelector.call(document,elem);
}
let qsA=(elem)=>{
    return document.querySelectorAll.call(document,elem);
};

/* función para añadir y quitar toggle clase link activo
 */

 function subrayaLink(elem) {
     elem.classList.add("linkActivo");
 }

//  Function para quitar subrayado el link



/* Función para validar cada input individual!!!! */
function validationInput(target,ind) {
    let exp = new RegExp(target.dataset.regex, "gi");
    let isValid = !!exp.exec(target.value)
    let elementoMensajeValid = target.parentElement.querySelector(".valid-feedback");
    let elementoMensajeInvalid = target.parentElement.querySelector(".invalid-feedback");

    if (ind===3) {
        let nac=new Date(target.value).getTime();
        let ahora=Date.now();
        let difEdad=new Date(ahora-nac);
        let edad = Math.abs(difEdad.getUTCFullYear() - 1970    );
       if (edad >=18) {
          target.classList.add("is-valid");
          target.classList.remove("is-invalid");
          
          target.parentElement.querySelector(".valid-feedback").textContent = "Es correcto... eres mayor de 18 años...";
          
        }

        else{
            target.classList.add("is-invalid");
            target.classList.remove("is-valid");
            
           target.parentElement.querySelector(".invalid-feedback").textContent = "Lo sentimos, no eres mayor de edad para iniciar Sesión";
       }

    }

    if ((target.value.length > 0 && isValid) && ind !== 3) {


        target.classList.add("is-valid");
        target.classList.remove("is-invalid");

    }
    else if ((target.value.length > 0 && !isValid) && ind !== 3 || (target.value.length ===0 && ind !== 3) ) {
        target.classList.add("is-invalid");
        target.classList.remove("is-valid");

    }
    



/* Mensajes de error y relleno correcto */
    switch (ind) {
        case 0:
            {
                elementoMensajeValid.textContent = "Es correcto... tu nombre";
                elementoMensajeInvalid.textContent = "Sólo letras y hasta un máximo 15 caracteres";
            }
            break;
        case 1:
            {
                elementoMensajeValid.textContent = "Es correcto... tus apellidos";
                elementoMensajeInvalid.textContent = "Sólo letras y hasta un máximo 30 caracteres";
            }
            break;
        case 2:
            {
                elementoMensajeValid.textContent = "Es correcto... tu email";
                elementoMensajeInvalid.textContent = "Este email no nos encaja... revísalo, por favor";
            }
            break;

        case 4:
            {
                elementoMensajeValid.textContent = "Es correcto... tu ciudad";
                elementoMensajeInvalid.textContent = "Sólo letras y hasta un máximo 15 caracteres";
            }
            break;
        case 5:
            {
                elementoMensajeValid.textContent = "Es correcto... tu Código Postal";
                elementoMensajeInvalid.textContent = "Este Código Postal no nos encaja... revísalo, por favor";
            }
            break;
        case 6:
            {
                elementoMensajeValid.textContent = "Es correcto... tu Nombre de Usuario";
                elementoMensajeInvalid.textContent = "Sin caracteres especiales y hasta un máximo de 15 ";
            }
            break;
        case 7:
            {
                elementoMensajeValid.textContent = "Es correcta... tu Clave";
                elementoMensajeInvalid.textContent = "8 caracteres con al menos una May., Minuscula, número y carácter especial";
            }
            break;
        case 8:
            {
                elementoMensajeValid.textContent = "Es correcta... tu Clave";
                elementoMensajeInvalid.textContent = "No es la misma Clave, inténtalo otra vez, por favor...";
            }
            break;

        default:
            break;
    }
}

/* Función para validación de Aceptación de Condiciones  */

function validacionAccept(existe,target) {
    if (existe) {
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");
        target.parentElement.querySelector(".valid-feedback").textContent = "Gracias, por aceptar los servicios"
        return true
    }
    else {
        target.classList.remove("is-valid");
        target.classList.add("is-invalid");
        target.parentElement.querySelector(".invalid-feedback").textContent = "Para acceder a tu ingreso, necesitamos tu aceptación de las condiciones"

        return false

    }
}

/* Función para validación de Pais  */

function validacionSelPais(target) {
    if (target.value !== "Elige...") {
        target.classList.remove("is-invalid")
        target.classList.add("is-valid")
        return true
    }
    else {
        target.classList.remove("is-valid")
        target.classList.add("is-invalid")

        return false

    }
}

/* Funcion para Submit de checkeo de todos los inputs */

function checkeoInputs(elems) {
    let inputsValidos=[...elems].every(input=>{
        return  input.classList.contains("is-valid")
    })
    return inputsValidos
}

/* Función para el checkeo de igualdad de la clave en los dos campos de password */

function checkeoIgualClave(target,target2) {

    /* Función para el checkeo de igualdad de la clave en los dos campos de password */
    
    if(target.value===target2.value && !!target.value && target2.value) {
        target2.classList.remove("is-invalid");
        target2.classList.add("is-valid");
        return true
    }

    else {

        target2.classList.remove("is-valid");
        target2.classList.add("is-invalid");
        return false

    }
}


function submitLogin(_usuario, _clave) {

    let loginUsuario = usuarios.filter(logUsuario => {
        let { usuario, clave } = logUsuario;
        return usuario === _usuario && clave === _clave;
    })

    if (loginUsuario.length > 0) {

        return loginUsuario[0];
    }
    else {
        return false;
    }
}

/* Exportaciones de funciones y variables del modulo */

export {
    log,
    pagAct,
    recuperadataSet,
    qs,
    qsA,
    subrayaLink,
    validationInput,
    checkeoInputs,
    validacionSelPais,
    checkeoIgualClave,
    validacionAccept
   
}
