/* EJERCICIO SWITCH MODULARIZACIÓN
PARTE 1, con Selección de Producto 1 y 2 
*/

const pagina        = document.querySelector ("body");
const selectCant    = document.querySelector ("select");
const miImg         = document.querySelector ("#mi-img");
const miParrafo0    = document.querySelector ("#mi-parr0");
const miParrafo1    = document.querySelector ("#mi-parr1");
const miParrafo2    = document.querySelector ("#mi-parr2");
const miListaOrd    = document.querySelector ("#mi-ol1")

const IMAGEN_1      = "https://cronicaglobal.elespanol.com/uploads/s1/14/43/51/8/amazon-supermercado-online.png";

const PROD_1        = 1;
const PROD_2        = 2;
const DESC_PROD_1   = "Producto 1 Genérico";
const DESC_PROD_2   = "Producto 2 'Especial'";

const PR_PROD_1     = 500;
const PR_PROD_2     = 800;

const UNO           = "uno";
const TRES          = "tres";   
const SIETE         = "siete";

const CERO          = 0;
const NUM_1         = 1;
const NUM_3         = 3;
const NUM_7         = 7;

// Variables 
let productoTipo    = PROD_1;
let precioCorr      = PR_PROD_1;
let descProducto    = DESC_PROD_1;
let precioCompra    = 0; 
let totalCompra     = 0;
let cantProd        = 0;

// Inicializaciones Varias
miImg.src               = IMAGEN_1;
miParrafo0.textContent  = DESC_PROD_1;
miParrafo1.textContent  = "Precio = $" + PR_PROD_1 + ".-";
miParrafo2.textContent  = "Total Compra = $" + totalCompra + ".-";

/**
 * Cambio de Producto
 * @param {String} desc 
 * @param {Number} tipo 
 * @param {Number} precio 
 */
function cambProducto (desc, tipo, precio){
    miParrafo0.textContent = desc;
    descProducto    = desc;
    productoTipo    = tipo;
    precioCorr      = precio; 
    miParrafo1.textContent = "Precio = $" + precio + ".-";

}

/**
 * Boton "AGREGAR"
 */
function agregaCompra() {
    if (cantProd > 0){
    precioCompra = (cantProd * precioCorr);
    totalCompra += precioCompra;
    miParrafo2.textContent = "Total Compra = $" + totalCompra + ".-";     
    miListaOrd.innerHTML += `
         <li>${descProducto} (${cantProd})</li>  `
    }
}

/**
 * Boton "Producto Siguiente"
 */
function prodSiguiente() {
    if (productoTipo === PROD_1) {
        cambProducto (DESC_PROD_2, PROD_2, PR_PROD_2);
    }
    else {
        cambProducto (DESC_PROD_1, PROD_1, PR_PROD_1);
    }
}

/**
 * Manejo Selector de Cantidad
 */
function selccionaCantidad() {
    switch (selectCant.value) {
        case UNO:
            cantProd = NUM_1;
            break;
        case TRES:
            cantProd = NUM_3;
            break;
        case SIETE:
            cantProd = NUM_7;
            break;
        default:
            cantProd = CERO;
    }
}