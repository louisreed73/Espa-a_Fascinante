
let { log } = console;

/* Función para recuperar string de location de pagina */
function pagAct(url) {

    let pagina = url.match(/\/(?<pagina>\w+).html/).groups.pagina
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

/* Exportaciones de funciones y variables del modulo */

export {
    log,
    pagAct,
    recuperadataSet,
    qs,
    qsA,
    subrayaLink
}