
let { log } = console;

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


    if (target.value.length > 2 && isValid) {

        target.classList.add("is-valid");
        target.classList.remove("is-invalid");
        log(ind)

    }
    else if (target.value.length > 2 && !isValid) {
        target.classList.add("is-invalid");
        target.classList.remove("is-valid");

    }
    // log(ind, this.parentElement)

    let elementoMensajeValid = target.parentElement.querySelector(".valid-feedback");
    let elementoMensajeInvalid = target.parentElement.querySelector(".invalid-feedback");



    log(elementoMensajeValid, elementoMensajeInvalid)

    switch (ind) {
        case 0:
            {
                elementoMensajeValid.textContent = "Muy bien el nombre hijo de puta!!";
                elementoMensajeInvalid.textContent = "Muy mal  el nombre hijo de puta!!";
            }
            break;
        case 1:
            {
                log("es este!!")
                elementoMensajeValid.textContent = "Muy bien el apelllido hijo de puta!!";
                elementoMensajeInvalid.textContent = "Muy mal  el apellido hijo de puta!!";
            }
            break;

        default:
            break;
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
    validationInput
}
