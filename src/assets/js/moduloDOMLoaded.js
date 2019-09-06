
let { log,dir } = console;

/* Función para recuperar string de location de pagina */
function pagAct(url) {

    log(url)

    let pagina = url.match(/\/(?<pagina>\w+).html/).groups.pagina;
    // log(pagina)
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
log("Esta es la fecha de Nacimiento!!!!",target.value,edad);
       if (edad >=18) {
          log( "Si!!!!");
          target.classList.add("is-valid");
          target.classList.remove("is-invalid");
          
          target.parentElement.querySelector(".valid-feedback").textContent = "Es correcto... eres mayor de 18 años...";
          
        }

        else{
            log( "No!!!!");
            target.classList.add("is-invalid");
            target.classList.remove("is-valid");
            
           target.parentElement.querySelector(".invalid-feedback").textContent = "Lo sentimos, no eres mayor de edad para iniciar Sesión";
       }

    }

    if ((target.value.length > 0 && isValid) && ind !== 3) {


        target.classList.add("is-valid");
        target.classList.remove("is-invalid");
        log(ind)

    }
    else if ((target.value.length > 0 && !isValid) && ind !== 3 || (target.value.length ===0 && ind !== 3) ) {
        target.classList.add("is-invalid");
        target.classList.remove("is-valid");

    }
    



    log(elementoMensajeValid, elementoMensajeInvalid)

    switch (ind) {
        case 0:
            {
                elementoMensajeValid.textContent = "Es correcto... tu nombre";
                elementoMensajeInvalid.textContent = "Sólo letras y hasta un máximo 15 caracteres";
            }
            break;
        case 1:
            {
                log("es este!!")
                elementoMensajeValid.textContent = "Es correcto... tus apellidos";
                elementoMensajeInvalid.textContent = "Sólo letras y hasta un máximo 30 caracteres";
            }
            break;
        case 2:
            {
                log("es este!!")
                elementoMensajeValid.textContent = "Es correcto... tu email";
                elementoMensajeInvalid.textContent = "Este email no nos encaja... revísalo, por favor";
            }
            break;

        case 4:
            {
                log("es este!!")
                elementoMensajeValid.textContent = "Es correcto... tu ciudad";
                elementoMensajeInvalid.textContent = "Sólo letras y hasta un máximo 15 caracteres";
            }
            break;
        case 5:
            {
                log("es este!!")
                elementoMensajeValid.textContent = "Es correcto... tu Código Postal";
                elementoMensajeInvalid.textContent = "Este Código Postal no nos encaja... revísalo, por favor";
            }
            break;
        case 6:
            {
                log("es este!!")
                elementoMensajeValid.textContent = "Es correcto... tu Nombre de Usuario";
                elementoMensajeInvalid.textContent = "Sin caracteres especiales y hasta un máximo de 15 ";
            }
            break;
        case 7:
            {
                log("es este!!")
                elementoMensajeValid.textContent = "Es correcta... tu Clave";
                elementoMensajeInvalid.textContent = "8 caracteres con al menos una May., Minuscula, número y carácter especial";
            }
            break;
        case 8:
            {
                log("es este!!")
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
    log(inputsValidos);
    return inputsValidos
}

/* Función para el checkeo de igualdad de la clave en los dos campos de password */

function checkeoIgualClave(target,target2) {
    /* Función para el checkeo de igualdad de la clave en los dos campos de password */
    
    log(target,target2)
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

        // log(loginUsuario[0])
        return loginUsuario[0];
    }
    else {
        return false;
    }
}

/* Array con las propiedades exactas del objeto de los inputs */

/* let inputsProp=[
    "nombre",
    "apellidos",
    "email",
    "fechaNacimiento",
    "ciudad",
    "codigoPostal",
    "usuario",
    "clave"    
] */

/* Función para la creación y retorno de un objeto con los datos del usuario */

/* function Usuario(inputs) { 
    // log(inputs)

    log("Hola!!!")

    let usuario= {};
    
    for(let i=0; i <inputs.length;i++) {
        log(inputs[i],inputsProp[i])
        usuario[inputsProp[i]]=inputs[i].value

  
    }

    return usuario

} */

/* Variable usuarios y el localStorage para almacenar los usuarios en localStorage */

// let usuarios;

/* function datosUsuarios(usuario) {

    if(localStorage.getItem("usuarios")===null) {
        usuarios=[];
    }
    else {
        usuarios=JSON.parse(localStorage.getItem("usuarios"))
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    log(   `El array usuarios es:     ${usuarios}      `      )

} */



// localStorage.clear();


/* Función generator de id */
// let _id;

/* function genId() {

    function* _genr() {

        if(!_id) {
            _id=0;
        }

        while (_id <3000) {
    
            yield  _id++;
        }
    }
    



    return _genr
} */



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
    // Usuario,
    // inputsProp,
    // usuarios
    // datosUsuarios
    // genId,
   
}
