/* EJERCICIO SWITCH MODULARIZACIÓN
PARTE 1, con Selección de Producto 1 y 2 
Se agrega la parte III
Producto 1: 3 Unid. 10% de desc. 7 unid. 25%
Producto 2: 3 unid. 15% de desc. 7 unid  30%
 */

const pagina        = document.querySelector ("body");
const selectCant    = document.querySelector ("select");
const miImg         = document.querySelector ("#mi-img");
const miCompra      = document.querySelector ("#mi-compra")
const miParrafo0    = document.querySelector ("#mi-parr0");
const miParrafo1    = document.querySelector ("#mi-parr1");
const miParrafo2    = document.querySelector ("#mi-parr2");
const miListaOrd    = document.querySelector ("#mi-ol1")
const miCantidad    = document.querySelector ("#mi-cant");

const IMAGEN_1      = "https://cronicaglobal.elespanol.com/uploads/s1/14/43/51/8/amazon-supermercado-online.png";

const PROD_1        = 1;
const PROD_2        = 2;
const DESC_PROD_1   = "Producto 1 Genérico";
const DESC_PROD_2   = "Producto 2 'Especial'";

const PR_PROD_1     = 500;
const PR_PROD_2     = 800;

const DESC_P1_3UN   = 10/100 ;
const DESC_P1_7UN   = 25/100 ;
const DESC_P2_3UN   = 15/100 ;
const DESC_P2_7UN   = 30/100 ;

const UNO           = "uno";
const TRES          = "tres";   
const SIETE         = "siete";

const CERO          = 0 ;
const NUM_1         = 1 ;
const NUM_3         = 3 ;
const NUM_7         = 7 ;

// Variables 
let productoTipo    = PROD_1;
let descProducto    = DESC_PROD_1;
var precioCorr      = PR_PROD_1;
var precioCompra    = 0; 
var totalCompra     = 0;
let cantProd        = 0;

// Inicializaciones Varias
miCantidad.textContent  = "Cantidad?  Hoy descuento por 3 y 7 unidades"
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
 * Calcula el descuento del precio de la compra
 * @param {Number} tipo 
 * @param {Number} cant 
 * @param {Number} compra 
 * @returns Number
 */
function calculaDesc (tipo, cant, compra) {
    if (tipo == PROD_1) {
        if      (cant == NUM_3) {return (compra * (1-DESC_P1_3UN));}
        else if (cant == NUM_7) {return (compra * (1-DESC_P1_7UN));}
        else    {return (compra);}
    }
    else { /*  Producto 2 */
        if      (cant == NUM_3) {return (compra * (1-DESC_P2_3UN));}
        else if (cant == NUM_7) {return (compra * (1-DESC_P2_7UN));}
        else    {return (compra);}
    }
}

/**
 * Anticipa el precio de la compra con el descuento
 */
function muestraCompra() {
    let compra  = 0;
    compra = (cantProd * precioCorr);
    compra = calculaDesc (productoTipo, cantProd, compra);
    compra = ((Math.round(compra*100))/100);
    miCompra.textContent = "Precio de la compra con descuento $" +compra+".- Agrega?";                           
}


/**
 * Boton "AGREGAR"
 */
function agregaCompra() {
    if (cantProd > 0){
    precioCompra = (cantProd * precioCorr);
    precioCompra = calculaDesc (productoTipo, cantProd, precioCompra);
    totalCompra += ((Math.round(precioCompra*100))/100);
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
    muestraCompra ();
}

/**
 * Manejo Selector de Cantidad
 */
function selccionaCantidad() {
    switch (selectCant.value) {
        case UNO:
            cantProd = NUM_1;
            muestraCompra ();
            break;
        case TRES:
            cantProd = NUM_3;
            muestraCompra ();
            break;
        case SIETE:
            cantProd = NUM_7;
            muestraCompra ();
            break;
        default:
            cantProd = CERO;
            miCompra.textContent = "Elija una cantidad y le anticipamos el precio con descuento";
    }
 }