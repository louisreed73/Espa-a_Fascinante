
/* Importación de módulos necesarios comunes */

import 'bootstrap/js/dist/collapse.js';

import '../scss/commonSCSS/estilo.scss';

import * as pag from './moduloDOMLoaded.js';


/* declaración de variables importadas del modulo DOMLoaded */
let {
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
    Usuario,
    usuarios,
    datosUsuarios,
    
    genId

} = pag;

/* selecciones de elementos para eventos y funcionalidades */


let elementos = [
    qsA("a.nav-link"),
    qs("a.navbar-brand"),
    qsA("input:not([data-Validation='notValidation'])"),
    qs("select"),
    qs("[data-Validation='Periodicidad']"),
    qs("#usuario-AceptacionServicios"),
    qs(".formulario-Registro"),
    qs("#usuario-Clave"),
    qs("#usuario-Clave2"),
    qs("#usuario-Clave2"),
];




/* declaración en variables de los elementos seleccionados dentro del array Elementos */

let [
    _links,
    _linkLogo,
    _inputs,
    _select,
    _radio,
    _AceptServicios,
    _formSubmit,
    usuarioClave1,
    usuarioClave2
] = elementos;






/* Manejadores y Events Listeners Funcionalidades */

/* Funcionalidad Pagina Activa */

document.addEventListener("DOMContentLoaded", function (e) {

    /* función para recuperar string de la pagina donde nos encontramos cargada desde el modulo DOMloaded*/
    let stringPag = pagAct(document.location.href);

    let link = [..._links].filter(link => {
        
        return recuperadataSet(link) === stringPag
    })

    /* Carga de event listeners para handlers de errores de relleno campos */
    validacionInp();
    validacionInpValida();

    /* Función para destacar la página actual en el menu navegador */
    subrayaLink(link[0]);


});


/* Evento control validación Inputs */

function validacionInp() {
    for (let i = 0; i < _inputs.length; i++) {
    
        _inputs[i].addEventListener("blur", function (e) {
    
            validationInput(e.target, i)
        })
    
    }

}

/* Funcion que dispara la validación de los inputs en Submit dispatch valida */

function validacionInpValida() {
    for (let i = 0; i < _inputs.length; i++) {
    
        _inputs[i].addEventListener("valida", function (e) {
    
            validationInput(e.target, i)
            // log(e.target)
        })
    
    }

}


/* Función para validar los pag.inputsProp, mensajes rellenado correcto o error */

function validacionInpSubmit() {

    for (let i = 0; i < _inputs.length; i++) {
    
        _inputs[i].dispatchEvent(new Event('valida', { 'bubbles': true }));
    
    
    
    }
}

/* Evento que dispara la validación del seleccion del Pais */

_select.addEventListener("change",function(e){

    validacionSelPais(e.target);
    
})
_select.addEventListener("validaPais",function(e){
    
    validacionSelPais(e.target);
    
})



 /* función para Dispatch Event validation on Selección Pais */

 function disparaPais() {
     _select.dispatchEvent(new Event("validaPais",{
         bubbles:true
     }))
 }


/* Evento Validación Periodicidad */

_radio.addEventListener("click",function (e){
    log(e, e.target.value);

})

/* Evento Validación Aceptación Servicios */

_AceptServicios.addEventListener("click",function(e){
    log(this.checked)
})

/* Evento Validación checkeo clave2 on blur */

usuarioClave2.addEventListener("blur",function(e) {
    checkeoIgualClave(usuarioClave1, usuarioClave2)
})



/* Evento Validación Forma Submit */

_formSubmit.addEventListener("submit",function (e) {
    log(`Submit form!!!!: ${e.target}`);
    e.preventDefault();

    /* Validación trigger para mostrar los errores si el usuario submit form */
    validacionInpSubmit();

    /* Validación de error o no del blur en selección Pais */
    disparaPais();

    /* Función que dispara checkeo de inputs y devuelve boolean true si es todo correcto */
    let inputsOK = checkeoInputs(_inputs);

    /* Función para checkear, boolean, si la clave coincide en los dos campos */
    let claves=checkeoIgualClave(usuarioClave1, usuarioClave2)


/*     ----------------------------------------------------------------------------
    ---------------------------------------------------------------------------- */

    /* let usuariosId;

    function datosUsuariosId() {

        if (localStorage.getItem("_usuariosId") === null) {
            usuariosId = 0;
        }
        else {
            usuariosId = JSON.parse(localStorage.getItem("_usuariosid"));
            usuariosId=Number(usuariosId+0);
            log(`usuarios id es:${usuariosId}`)
            usuariosId=usuariosId+1;
            log(`usuarios id es:${usuariosId}`)
            
            localStorage.setItem("_usuariosId", JSON.stringify(usuariosId) );
            log(`El array usuarios es:     ${usuarios}      `)
        }

        // usuarios.push(usuario);


    } */


    /* Checkeamos que todos los inputs, dato del pais, y aceptación de condicciones sea correcto */

    if (inputsOK &&
     _select.value!=="Elige..." &&
      _AceptServicios.checked &&
        claves) {

        log("los inputs estan rellenos!!!!");

        /* creación objeto nuevo usuario */
        let usuario = Usuario(_inputs);

        /* Propiedad periodicidad ofertas */
        usuario.ofertas=qs("input[type='radio']:checked") ? qs("input[type='radio']:checked").value : "no rellenado" ;
        // usuario.ofertas="no rellenado";

        /* Selección de Pais */
        usuario.pais=_select.value;


        /* generador de id */
        //  _idGen.next().value;
        // usuario.id = _idGen.next().value;
      

        /* Inserción en el array de los datos del usuario */
        // usuarios.push(usuario);
        // datosUsuarios(usuario)

        // datosUsuariosId()
        
        // log(usuario,usuarios);
        window.location.href ="/loginPage/loginPage.html"
    }
    
    else {
        
        log("los inputs no estan rellenos!!!!")
        
    }





    
})



// log(_idGen.next().value)
// log(_idGen.next().value)
// log(_idGen.next().value)
// log(_idGen.next().value)
