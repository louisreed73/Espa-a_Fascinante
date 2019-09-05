
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
    qsA("input"),
    qs("select")
];


/* declaración en variables de los elementos seleccionados dentro del array Elementos */

let [
    _links,
    _linkLogo,
    _inputs,
    _select
] = elementos;
log(_inputs,_select)


/* Manejadores y Events Listeners Funcionalidades */



document.addEventListener("DOMContentLoaded", function (e) {
    /* función para recuperar string de la pagina donde nos encontramos cargada desde el modulo DOMloaded*/
    let stringPag = pagAct(document.location.href);

    let link = [..._links].filter(link => {
        
        return recuperadataSet(link) === stringPag
    })

    subrayaLink(link[0]);


});


for (let i = 0; i < _inputs.length; i++) {

    _inputs[i].addEventListener("blur", function (e) {

        validationInput(e.target, i)
    })

}
