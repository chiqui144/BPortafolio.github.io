        //Oculto todos los textos excepto el texto inicial
        document.getElementById("texto1").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("texto3").style.display = "none";
        document.getElementById("texto4").style.display = "none";

        function seleccion() {

            if (document.getElementById("blanco").selected == true) {
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto2").style.display = "none";
                document.getElementById("texto3").style.display = "none";
                document.getElementById("texto4").style.display = "none";
                document.getElementById("blanco1").style.display = "block";

            }

            if (document.getElementById("opcion1").selected == true) {

                document.getElementById("texto2").style.display = "none";
                document.getElementById("texto3").style.display = "none";
                document.getElementById("texto4").style.display = "none";
                document.getElementById("blanco1").style.display = "none";
                document.getElementById("texto1").style.display = "block";

                console.log("Has seleccionado Opcion 1");

            } else if (document.getElementById("opcion2").selected == true) {

                document.getElementById("blanco1").style.display = "none";
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto4").style.display = "none";
                document.getElementById("texto3").style.display = "none";
                document.getElementById("texto2").style.display = "block";
                console.log("Has seleccionado Opcion 2");

            } else if (document.getElementById("opcion3").selected == true) {

                document.getElementById("blanco1").style.display = "none";
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto2").style.display = "none";
                document.getElementById("texto3").style.display = "block";
                document.getElementById("texto4").style.display = "none";
                console.log("Has seleccionado Opción 3");

            } else if (document.getElementById("opcion4").selected == true) {

                document.getElementById("blanco1").style.display = "none";
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto2").style.display = "none";
                document.getElementById("texto3").style.display = "none";
                document.getElementById("texto4").style.display = "block";
                console.log("Has seleccionado Opción 4");

            } 
        }




$(document).ready(function(){

$('#Select').on('change', function(){

var SelectValor = '#' + $(this).val();
$('#fila1').children('div').hide();
$('#fila1').children(SelectValor).show();


});
});

 /*ESTRUCTURA*/

$(document).ready(function(){
    $("#EXTREMO-INFERIOR").click(function(){
        $("#EXTREMO-INFERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-SUPERIOR").click(function(){
        $("#EXTREMO-SUPERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-DERECHO").click(function(){
        $("#EXTREMO-DERECHOMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-IZQUIERDO").click(function(){
        $("#EXTREMO-IZQUIERDOMODAL").modal();
    });
});

 /*FIN ESTRUCTURA*/

/*INTERNO*/

$(document).ready(function(){
    $("#INTERNO-IZQUIERDO").click(function(){
        $("#INTERNO-IZQUIERDOMODAL").modal();
    });
});

$(document).ready(function(){
    $("#INTERNO-DERECHO").click(function(){
        $("#INTERNO-DERECHOMODAL").modal();
    });
});

/*FIN INTERNO*/

/*COLGAROPA*/

$(document).ready(function(){
    $("#COLGAROPA").click(function(){
        $("#COLGAROPAMODAL").modal();
    });
});

/*FIN COLGAROPA*/

/*SQUADS*/

$(document).ready(function(){
    $("#SQUADS").click(function(){
        $("#SQUADSMODAL").modal();
    });
});

/*FIN SQUADS*/

/*RIGHT SECTION*/
$(document).ready(function(){
    $("#DERECHO-DIVISION1").click(function(){
        $("#DERECHO-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DERECHO-DIVISION2").click(function(){
        $("#DERECHO-DIVISIONMODAL").modal();
    });
});

/*FIN RIGHT SECTION*/

/*CENTER SECTION*/

$(document).ready(function(){
    $("#CENTRAL-DIVISION1").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CENTRAL-DIVISION2").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CENTRAL-DIVISION3").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});

/*FIN CENTER SECTION*/

/*LEFT SECTION*/

$(document).ready(function(){
    $("#IZQUIERDO-DIVISION1").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#IZQUIERDO-DIVISION2").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#IZQUIERDO-DIVISION2").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

/*FIN LEFT SECTION*/

/*TORNILLOS*/

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOSMADERA").click(function(){
        $("#TORNILLOSMADERAMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOSMADERA2").click(function(){
        $("#TORNILLOSMADERAMODAL2").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOMETALICO").click(function(){
        $("#TORNILLOMETALICOMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOMETALICO2").click(function(){
        $("#TORNILLOMETALICO2MODAL").modal();
    });
});

/*FIN-TORNILLOS*/

/*PUERTAS*/
$(document).ready(function(){
    $("#PUERTA-EXTREMO-IZQUIERDA1").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-INTERNA-IZQUIERDA2").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-CENTRAL1").click(function(){
        $("#PUERTA-CENTRAL-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-INTERNA-DERECHA1").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-EXTREMO-DERECHA2").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});

/*FIN PUERTAS*/

/*--CERRADURA - CAJONES*/
$(document).ready(function(){
    $("#LOCK").click(function(){
        $("#CERRADURA1").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#BOX").click(function(){
        $("#CAJONES1").modal();
    });
});

/*--FIN CERRADURA - CAJONES*/

/*SLIDER*/

$(document).ready(function(){
    $("#SLIDER").click(function(){
        $("#SLID").modal();
    });
});

/*FIN SLIDER*/

/*MANIJAS*/

$(document).ready(function(){
    $("#MANIJA").click(function(){
        $("#MANIJAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#MANIJA-CAJON").click(function(){
        $("#MANIJA-CAJONMODAL").modal();
    });
});

/*FIN MANIJAS*/

/*TRIPLEX*/

$(document).ready(function(){
    $("#TRIPLEX-IZQUIERDO").click(function(){
        $("#TRIPLEX-IZQUIERDOMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TRIPLEX-CENTRAL").click(function(){
        $("#TRIPLEX-CENTRALMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TRIPLEX-DERECHO").click(function(){
        $("#TRIPLEX-IZQUIERDOMODAL").modal();
    });
});

/*FIN TRIPLEX*/

/*ESPECIFICACION TRIPLEX*/
$(document).ready(function(){
    $("#CIRCULO1").click(function(){
        $("#CIRCULO").modal();
    });
});

$(document).ready(function(){
    $("#CIRCULO2").click(function(){
        $("#CIRCULO").modal();
    });
});

$(document).ready(function(){
    $("#CIRCULO3").click(function(){
        $("#CIRCULO").modal();
    });
});

/*FIN ESPECIFICACION TRIPLEX*/

/*SELECTOR1*/
function listenToClicks(){
    const botones = document.querySelectorAll(".clickable-g");



    botones.forEach((g) => {
    g.addEventListener("click", () => {
        activateBoxes(g.id);
    });
   });
}

   function activateBoxes(gId){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        if (box.classList.contains(gId)) {
            box.dataset.active = true;
        }else{
            box.dataset.active = false;
        }
    });
   }

 listenToClicks();
 /*FIN SELECTOR1*/



const btnDepartamentos = document.getElementById('btn-departamentos'),
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      grid = document.getElementById('grid'),
      contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
      esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
    if(!esDispositivoMovil()){
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    if(!esDispositivoMovil()){
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if(!esDispositivoMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            });
        };
    });
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
});



btnCerrarMenu.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';
});



/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

/* MANUAL-INSTRUCCIONES-MUEBLE-COCINA*/

/*INICIO-PIEZAS*/

/*MODALES*/

/*MODALES-MADERA-PIEZAS*/

$(document).ready(function(){
    $("#DIVISION-VERTICAL-INTERNA").click(function(){
        $("#DIVISION-VERTICAL-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#LATERALES").click(function(){
        $("#LATERALESMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BASE-TECHO").click(function(){
        $("#BASE-TECHOMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TABLITA").click(function(){
        $("#TABLITAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-MUEBLE").click(function(){
        $("#SOPORTE-MUEBLEMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED5").click(function(){
        $("#SOPORTE-PARED5MODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TRIPLEX").click(function(){
        $("#TRIPLEXMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTAS-2").click(function(){
        $("#PUERTAS-2MODAL").modal();
    });
});

/*FIN-MADERA-PIEZAS*/

/*ACCESORIOS-MUEBLE*/

$(document).ready(function(){
    $("#PUNTILLAS").click(function(){
        $("#PUNTILLASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#MANIJAS").click(function(){
        $("#MANIJASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA").click(function(){
        $("#TORNILLERIAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BISAGRAS").click(function(){
        $("#BISAGRASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTES-2").click(function(){
        $("#SOPORTES-2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-4").click(function(){
        $("#TORNILLERIA-SOPORTE-4MODAL").modal();
    });
});

/*FIN ACCESORIOS-MUEBLE*/

/*ESPECIFICACIONES-MUEBLE*/

$(document).ready(function(){
    $("#CORTE-SOPORTE-DETALLADO-PARED").click(function(){
        $("#CORTE-SOPORTE-DETALLADO-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CORTE-SOPORTE-DETALLADO-MUEBLE").click(function(){
        $("#CORTE-SOPORTE-DETALLADO-MUEBLEMODAL").modal();
    });
});

/*FIN ESPECIFICACIONES-MUEBLE*/

/*FIN MODALES*/

/*MODALES-MADERA-PIEZAS*/

$(document).ready(function(){
    $("#DIVISION-VERTICAL-INTERNA1").click(function(){
        $("#DIVISION-VERTICAL-INTERNAMODAL1").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-VERTICAL-INTERNA2").click(function(){
        $("#DIVISION-VERTICAL-INTERNA2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#LATERALES1").click(function(){
        $("#LATERALESMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BASE-TECHO1").click(function(){
        $("#BASE-TECHOMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TABLITA1").click(function(){
        $("#TABLITAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-MUEBLE1").click(function(){
        $("#SOPORTE-MUEBLEMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED1").click(function(){
        $("#SOPORTE-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA1").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TRIPLEX1").click(function(){
        $("#TRIPLEXMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA1").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTAS-21").click(function(){
        $("#PUERTAS-2MODAL").modal();
    });
});

/*FIN-MADERA-PIEZAS*/

/*ACCESORIOS-MUEBLE*/

$(document).ready(function(){
    $("#PUNTILLAS1").click(function(){
        $("#PUNTILLASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#MANIJAS1").click(function(){
        $("#MANIJASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA1").click(function(){
        $("#TORNILLERIAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BISAGRAS1").click(function(){
        $("#BISAGRASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTES-21").click(function(){
        $("#SOPORTES-2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-41").click(function(){
        $("#TORNILLERIA-SOPORTE-4MODAL").modal();
    });
});

/*FIN ACCESORIOS-MUEBLE*/

/*ESPECIFICACIONES-MUEBLE*/

$(document).ready(function(){
    $("#CORTE-SOPORTE-DETALLADO-PARED1").click(function(){
        $("#CORTE-SOPORTE-DETALLADO-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CORTE-SOPORTE-DETALLADO-MUEBLE1").click(function(){
        $("#CORTE-SOPORTE-DETALLADO-MUEBLEMODAL").modal();
    });
});

/*FIN ESPECIFICACIONES-MUEBLE*/

/*FIN-PIEZAS*/



/*ACCESORIOS-MUEBLE*/

$(document).ready(function(){
    $("#LATERAL-DERECHA").click(function(){
        $("#LATERAL-DERECHAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#LATERAL-IZQUIERDA").click(function(){
        $("#LATERAL-IZQUIERDAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#BASE").click(function(){
        $("#BASEAMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TECHO").click(function(){
        $("#TECHOMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA1").click(function(){
        $("#TORNILLERIAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-EXTREMA-IZQUIERDA").click(function(){
        $("#DIVISION-HORIZONTAL-EXTREMA-IZQUIERDAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA-DERECHA").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNA-DERECHAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-EXTREMA-DERECHA").click(function(){
        $("#DIVISION-HORIZONTAL-EXTREMA-DERECHAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-HORIZONTAL-INTERNA-IZQUIERDA").click(function(){
        $("#DIVISION-HORIZONTAL-INTERNA-IZQUIERDAMODAL").modal();
    });
});

/*FIN ACCESORIOS-MUEBLE*/

/*ESPECIFICACIONES-MUEBLE*/

$(document).ready(function(){
    $("#DIVISION-VERTICAL-IZQUIERDA").click(function(){
        $("#DIVISIONES-VERTICAL-IZQUIERDAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-CENTRAL").click(function(){
        $("#DIVISIONES-VERTICAL-CENTRALMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DIVISION-VERTICAL-DERECHA").click(function(){
        $("#DIVISIONES-VERTICAL-DERECHAMODAL").modal();
    });
});



$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-1").click(function(){
        $("#TORNILLERIA-SOPORTE1MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-2").click(function(){
        $("#TORNILLERIA-SOPORTE2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-3").click(function(){
        $("#TORNILLERIA-SOPORTE3MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-SOPORTE-45").click(function(){
        $("#TORNILLERIA-SOPORTE4MODAL").modal();
    });
});


$(document).ready(function(){
    $("#SOPORTES3").click(function(){
        $("#SOPORTES3MODAL").modal();
    });
});

$(document).ready(function(){
    $("#TABLITA-DELANTERA").click(function(){
        $("#TABLITA-DELANTERAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TABLITA-TRASERAS").click(function(){
        $("#TABLITA-TRASERASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TABLITA-TRASERA-ESCONDIDA").click(function(){
        $("#TABLITA-TRASERA-ESCONDIDAMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-10").click(function(){
        $("#TORNILLERIA-EXTERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-6").click(function(){
        $("#TORNILLERIA-EXTERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-5").click(function(){
        $("#TORNILLERIA-EXTERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-1").click(function(){
        $("#TORNILLERIA-EXTERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-2").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-3").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-4").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-7").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-8").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});
$(document).ready(function(){
    $("#TORNILLERIA-EXTERNA-9").click(function(){
        $("#TORNILLERIA-EXTERIOR-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLERIA-TABLITA-BACK-LEFT").click(function(){
        $("#TORNILLERIA-TABLITAS-TRASERA-LEFTMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TORNILLOS-COLGADOR20").click(function(){
        $("#TORNILLOS-COLGADOR20MODAL").modal();
    });
});


$(document).ready(function(){
    $("#TORNILLERIA-TABLITA-BACK-RIGHT").click(function(){
        $("#TORNILLERIA-TABLITAS-TRASERA-RIGHTMODAL").modal();
    });
});


$(document).ready(function(){
    $("#TORNILLERIA-TABLITA-DELANTERA").click(function(){
        $("#TORNILLERIA-TABLITA-DELANTERAMODAL").modal();
    });
});
/*FIN ESPECIFICACIONES-MUEBLE*/

/*ESPECIFICACIONES-PUERTAS*/
$(document).ready(function(){
    $("#TABLITA-PUERTA").click(function(){
        $("#TABLITA-PUERTAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTA-IZQUIERDA-EXTREMA").click(function(){
        $("#PUERTA-IZQUIERDA-EXTREMAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTA-DERECHA-EXTREMA").click(function(){
        $("#PUERTA-DERECHA-EXTREMAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTA-DERECHA-INTERNA").click(function(){
        $("#PUERTA-DERECHA-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUERTA-IZQUIERDA-INTERNA").click(function(){
        $("#PUERTA-IZQUIERDA-INTERNAMODAL").modal();
    });
});

$(document).ready(function(){
    $("#MANIJAS-PUERTAS").click(function(){
        $("#MANIJAS-PUERTASMODAL").modal();
    });
});

/*FIN ESPECIFICACIONES-PUERTAS*/

/*FIN-PIEZAS*/


/*ESPECIFICACIONES-PUERTAS*/
$(document).ready(function(){
    $("#TABLITAS-TRASERAS").click(function(){
        $("#TABLITAS-TRASERASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PUNTILLAS5").click(function(){
        $("#PUNTILLAS5MODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-MUEBLE2").click(function(){
        $("#SOPORTE-MUEBLE2MODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-MUEBLE10").click(function(){
        $("#SOPORTE-MUEBLE10MODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED").click(function(){
        $("#SOPORTE-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED1").click(function(){
        $("#SOPORTE-PARED1MODAL").modal();
    });
});

$(document).ready(function(){
    $("#SOPORTE-PARED10").click(function(){
        $("#SOPORTE-PARED10MODAL").modal();
    });
});

$(document).ready(function(){
    $("#PROCESO-SOPORTE-MUEBLE").click(function(){
        $("#PROCESO-SOPORTE-MUEBLEMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PROCESO-PUNTILLAS").click(function(){
        $("#PROCESO-PUNTILLASMODAL").modal();
    });
});

$(document).ready(function(){
    $("#PROCESO-SOPORTE-PARED").click(function(){
        $("#PROCESO-SOPORTE-PAREDMODAL").modal();
    });
});

$(document).ready(function(){
    $("#TRIPLEX5").click(function(){
        $("#TRIPLEX5MODAL").modal();
    });
});
/*FIN ESPECIFICACIONES-PUERTAS*/

/*FIN-PIEZAS*/













/* INCLUSION DE SONIDO PRIMER MANUAL INSTRUCTIVO*/

/* -------------------------------------------------*/

/*LOW SIDE SOUND*/
let sound = new Audio("./SOUND/PIEZAS/low.mp3");

playBtn.addEventListener('click', ()=>{
    sound.play()
    });

pauseBtn.addEventListener('click', ()=>{
    sound.pause()
});
pauseBtnClose.addEventListener('click', ()=>{
    sound.pause()
});
/*LOW SIDE SOUND*/

let sound1 = new Audio("./SOUND/PIEZAS/top.mp3");

playBtn1.addEventListener('click', ()=>{
    sound1.play()
    });

pauseBtn1.addEventListener('click', ()=>{
    sound1.pause()
});
pauseBtnClose1.addEventListener('click', ()=>{
    sound1.pause()
});

let sound2 = new Audio("./SOUND/PIEZAS/right.mp3");

playBtn2.addEventListener('click', ()=>{
    sound2.play()
    });

pauseBtn2.addEventListener('click', ()=>{
    sound2.pause()
});
pauseBtnClose2.addEventListener('click', ()=>{
    sound2.pause()
});

let sound3 = new Audio("./SOUND/PIEZAS/left.mp3");

playBtn3.addEventListener('click', ()=>{
    sound3.play()
    });

pauseBtn3.addEventListener('click', ()=>{
    sound3.pause()
});
pauseBtnClose3.addEventListener('click', ()=>{
    sound3.pause()
});


let sound4 = new Audio("./SOUND/PIEZAS/internal-left.mp3");

playBtn4.addEventListener('click', ()=>{
    sound4.play()
    });

pauseBtn4.addEventListener('click', ()=>{
    sound4.pause()
});

pauseBtnClose4.addEventListener('click', ()=>{
    sound4.pause()
});


let sound5 = new Audio("./SOUND/PIEZAS/internal-right.mp3");

playBtn5.addEventListener('click', ()=>{
    sound5.play()
    });

pauseBtn5.addEventListener('click', ()=>{
    sound5.pause()
});
pauseBtnClose5.addEventListener('click', ()=>{
    sound5.pause()
});


let sound6 = new Audio("./SOUND/PIEZAS/hanger");

playBtn6.addEventListener('click', ()=>{
    sound6.play()
    });

pauseBtn6.addEventListener('click', ()=>{
    sound6.pause()
});
pauseBtnClose6.addEventListener('click', ()=>{
    sound6.pause()
});



let sound7 = new Audio("./SOUND/SELECTOR/2.mp3");

playBtn7.addEventListener('click', ()=>{
    sound1.play()
    });

pauseBtn7.addEventListener('click', ()=>{
    sound7.pause()
});

pauseBtnClose7.addEventListener('click', ()=>{
    sound7.pause()
});


/*-------------------------------------------------*/
/* INCLUSION DE SONIDO PRIMER MANUAL INSTRUCTIVO*/