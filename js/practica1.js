var horas;
var minutos;
var segundos;
const boton = document.getElementById( 'btn-enviar' );
const inputNumero = document.getElementById( 'entero' );
const contenedorRespuesta = document.getElementById( 'contenedor-resp' );


tiempo = totalSeg => {
    horas = Math.floor( totalSeg / 3600 );
    totalSeg -= ( horas*3600 );

    minutos = Math.floor( totalSeg / 60 );
    totalSeg -= ( minutos*60 );

    segundos = totalSeg;
    contenedorRespuesta.classList.remove( 'ocultar' );
    contenedorRespuesta.innerHTML = `
        <p>${ horas }:${ minutos }:${segundos}</p>
    `;
}

boton.addEventListener( 'click' , function( event ) {
    event.preventDefault();

    let totalS = inputNumero.value;
    totalS = Math.trunc( totalS );

    tiempo( totalS );

});













