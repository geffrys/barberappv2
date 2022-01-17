const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const textarea = document.getElementById('floatingTextarea');

const form = document.getElementById('formulario');
//const inputs = document.querySelectorAll('#formulario input');

//Validacion del formulario

form.addEventListener('submit', (ev)=>{
    //para evitar que por defecto se envie el formulario
    ev.preventDefault();
    validacionFormulario();
    
});

//funcion de validacion principal
let validacionFormulario = () => {

    //validacion del nombre
    if(tiene_numeros(nombre.value) === false){
        nombre.classList.remove('is-invalid'); 
        document.getElementById('invalid-name').innerHTML = "";
        nombre.classList.add('is-valid');
    }else if(tiene_numeros(nombre.value) === true){
        nombre.classList.remove('is-valid');
        nombre.classList.add('is-invalid');
        document.getElementById('invalid-name').innerHTML = "El nombre no puede contener numeros";
    }

    //validacion del apellido
    if (tiene_numeros(apellido.value) === false) {
        apellido.classList.remove('is-invalid'); 
        document.getElementById('invalid-apellido').innerHTML = "";
        apellido.classList.add('is-valid');
    } else if(tiene_numeros(apellido.value) === true){
        apellido.classList.remove('is-valid');
        apellido.classList.add('is-invalid');
        document.getElementById('invalid-apellido').innerHTML = "El apellido no puede contener numeros";
    }

    //validacion de correo etselente
    if(hayArroba(email.value) === true){
        email.classList.remove('is-invalid');
        document.getElementById('invalid-mail').innerHTML = "";
        email.classList.add('is-valid');
    }else{
        email.classList.remove('is-valid');
        email.classList.add('is-invalid'); 
        document.getElementById('invalid-mail').innerHTML = "El correo debe contener @ o no puede estar vacio"
    }
}



//funciones auxiliares que nos retornaran booleanos en caso de encontrar los valores definidos

const hayArroba = (expresion) => {
    let bandera = false;
    for(let i = 0;i<expresion.length; i++){
        if(expresion[i]==='@'){
            bandera = true;
        }
    }
    return bandera;
}

let hayNumero = (expresion) => {
    let bandera = false;
    for(let i = 0;i<expresion.length; i++){
        if(Number.isNaN(expresion[i]) === false){
            bandera = true;
        }
    }
    return bandera;
}

var numeros="0123456789";

let tiene_numeros =(texto)=>{
    for(i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return true;
       }
    }
    return false;
 }