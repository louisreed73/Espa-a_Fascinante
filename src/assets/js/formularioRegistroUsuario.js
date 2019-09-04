
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
    validationInput
} = pag;

/* selecciones de elementos para eventos y funcionalidades */

let elementos = [
    qsA("a.nav-link"),
    qs("a.navbar-brand"),
    qsA("input")
];


/* declaración en variables de los elementos seleccionados dentro del array Elementos */

let [
    _links,
    _linkLogo,
    _inputs
] = elementos;
log(_inputs)


/* Manejadores y Events Listeners Funcionalidades */



document.addEventListener("DOMContentLoaded", function (e) {
    /* función para recuperar string de la pagina donde nos encontramos cargada desde el modulo DOMloaded*/
    let stringPag = pagAct(document.location.href);

    let link = [..._links].filter(link => {
        
        return recuperadataSet(link) === stringPag
    })

    subrayaLink(link[0]);


});

_inputs.forEach((input,ind)=>{
    input.addEventListener("blur",function(e) {

     validationInput(e.target,ind)

        // this.parentElement.querySelector(".valid-feedback").textContent="Muy bien hijo de puta!!"
    })
})


