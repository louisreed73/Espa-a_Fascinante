
/* Importación de módulos necesarios comunes */

import 'bootstrap/js/dist/collapse.js';

import '../scss/commonSCSS/estilo.scss';

import * as pag from './moduloDOMLoaded.js';




/* declaración de variables importadas del modulo DOMLoaded */
let {
    log,
    qs,
    qsA,
    subrayaLink,
    pagAct,
    recuperadataSet
   

} = pag;

/* selecciones de elementos para eventos y funcionalidades */


let elementos = [
    qsA("a.nav-link"),
    qs("#usuario-NombreUs"),
    qs("#usuario-Clave"),
    qs("input[type='submit']"),

];

/* declaración en variables de los elementos seleccionados dentro del array Elementos */

let [
    _links,
    _usuario,
    _clave,
    _buttonLogin

] = elementos;








/* Funcionalidad Pagina Activa */

document.addEventListener("DOMContentLoaded", function (e) {

    /* función para recuperar string de la pagina donde nos encontramos cargada desde el modulo DOMloaded*/
    let stringPag = pagAct(document.location.href);

    let link = [..._links].filter(link => {

        return recuperadataSet(link) === stringPag
    })


    /* Función para destacar la página actual en el menu navegador */
    subrayaLink(link[0]);


});
let usuarios=[
    {
        usuario:"Espa_FascinanteUsuario1",
        clave:"aW3$df78",
    },
    {
        usuario:"Espa_FascinanteUsuario2",
        clave:"aW3$dfdf",
    },
    {
        usuario:"Espa_FascinanteUsuario3",
        clave:"aW3$56df",
    }
]












_buttonLogin.addEventListener("click",function(e){
    // log("Ingreso!!!")
    log(_usuario.value,_clave.value);

    let pasoCorrecto = submitLogin(_usuario.value, _clave.value);
    log(pasoCorrecto)
    e.preventDefault()
    if (pasoCorrecto ) {
        let numUsu = _usuario.value.match(/\d+$/);
        log(numUsu)
        log("Correcto te voy a redirigir a tu página de Entrada!!!");
        window.location.href = `/usuariosEntrada/entradaUsuario${numUsu[0]}.html`;
        // log(url)

        
    }

    else {
        log("No coincide el usuario con la clave!!!")
        _usuario.classList.add("is-invalid");
        log(_usuario.parentElement.querySelector(".invalid-feedback").textContent="No coincide este usuario con esta clave, revisa y cambia o el usuario o la clave, por favor...")

    }

/*     if( !pasoCorrecto.length>0   ) {
        log("No coincide el usuario con la clave!!!")

    } */
})





function submitLogin(_usuario,_clave) {

    let loginUsuario=usuarios.filter(logUsuario=>{
        let {usuario,clave}=logUsuario; 
        return usuario === _usuario && clave ===_clave;
    })
    
    if (loginUsuario.length>0) {
    
        // log(loginUsuario[0])
        return loginUsuario[0];
    }
    else {
        return false;
    }
}


// let usuario=usuarios