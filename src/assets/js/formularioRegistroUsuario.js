
/* Importación de módulos necesarios comunes */

import 'bootstrap/js/dist/collapse.js';

import '../scss/commonSCSS/estilo.scss';

import * as pag from './moduloDOMLoaded.js';
import { generateKeyPairSync } from 'crypto';

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
    checkeoIgualClave

} = pag;

/* selecciones de elementos para eventos y funcionalidades */

let elementos = [
    qsA("a.nav-link"),
    qs("a.navbar-brand"),
    // qsA("input"),
    qsA("input:not([data-Validation='notValidation'])"),
    qs("select"),
    qs("[data-Validation='Periodicidad']"),
    qs("#usuario-AceptacionServicios"),
    // qs("input[type='submit']")
    qs(".formulario-Registro"),
    qs("#usuario-Clave"),
    qs("#usuario-Clave2")
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
log(
    // _inputs,
    //  _select,
    //   _radio, 
    //   _AceptServicios,
      usuarioClave1,
      usuarioClave2)


/* Manejadores y Events Listeners Funcionalidades */

/* Funcionalidad Pagina Activa */

document.addEventListener("DOMContentLoaded", function (e) {
    /* función para recuperar string de la pagina donde nos encontramos cargada desde el modulo DOMloaded*/
    let stringPag = pagAct(document.location.href);

    let link = [..._links].filter(link => {
        
        return recuperadataSet(link) === stringPag
    })

    validacionInp();
    validacionInpValida();
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



function validacionInpSubmit() {

    for (let i = 0; i < _inputs.length; i++) {
    
        _inputs[i].dispatchEvent(new Event('valida', { 'bubbles': true }));
    
        // validationInput(_inputs[i], i)
    
    
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

usuarioClave2.addEventListener("blur",function() {
    checkeoIgualClave(usuarioClave1, usuarioClave2)
})



/* Evento Validación Forma Submit */

_formSubmit.addEventListener("submit",function (e) {
    log(`Submit form!!!!: ${e.target}`);
    e.preventDefault();
    validacionInpSubmit();
    disparaPais();
    let inputsOK = checkeoInputs(_inputs);
    let claves=checkeoIgualClave(usuarioClave1, usuarioClave2)

    // log(`Checkeo igual clave:!!!${checkeoIgualClave(usuarioClave1,usuarioClave2)}`)


    if (inputsOK &&
     _select.value!=="Elige..." &&
      _AceptServicios.checked &&
        claves) {
        log("los inputs estan rellenos!!!!")
    }
    
    else {
        log("los inputs no estan rellenos!!!!")

    }





    
})