// querySelector

const heading = document.querySelector('.header__texto h2'); // 0 o 1 elemento
heading.textContent = 'Que pasa chavales?';
// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a')
//console.log(enlaces)

// getElementById

const heading2 = document.getElementById('heading');
//console.log(heading2);

// Generar un nuevo enlace con codigo de JS

const nuevoEnlace = document.createElement('A'); // Escribir en mayuscula

nuevoEnlace.href = 'https://www.youtube.com/';

nuevoEnlace.textContent = 'Youtube';

nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


// Eventos 

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
// Eventos de los inputs y textarea
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    datos[e.target.id] = e.target.value;
    console.log(datos)

}

window.addEventListener('load', function(){ // load espera a que los archivos
     //esten listos

});

document.addEventListener('DOMContentLoaded', () => {
// Espera que se descarge el html pero no lo demas
});

// Seleccionar elementos y asociarles un evento

//const btnEnviar = document.querySelector('.boton--primario')
//
//btnEnviar.addEventListener('click', function(evento){
//    evento.preventDefault();
//
//    // Validar formilario
//
//
//});

//submit es para un formulario

const formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar Formulario

    const {nombre, email, mensaje} = datos;
    
    if (nombre == '' || email == '' || mensaje == '') {
        Error404('Todos los campos son obligatorios');
        return;
    }
    Exito('Formulario enviado con éxito');
    return;
})

function Error404(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild( error );

    setTimeout(() =>{
        error.remove();
    }, 5000);
}

function Exito(mensaje){
    const exito = document.createElement('P');
    exito.textContent = mensaje;
    exito.classList.add('correcto');
    formulario.appendChild( exito );

    setTimeout(() =>{
        exito.remove();
    }, 5000);
}



