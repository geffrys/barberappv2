
const option = document.querySelector('#options');
const numeroCuotas = document.querySelector('#select-time')
const planSeleccionado = document.querySelector('#plan-selected')
//no son elementos select
const seccionPlan = document.querySelector('#plan')
const cuotas = document.querySelector('#cuotas');
const formulario = document.querySelector('#formulario')
//titulo para agregar precio
const letreroPagar = document.querySelector('letrero')


const validacion = () =>{
    switch(option.value){
        case "0":
            document.getElementById('cuotas').classList.add('hidden')
            break;
        case "1":
            document.getElementById('cuotas').classList.add('hidden')
            seccionPlan.classList.remove('hidden')
            break;    
        case "2":
            document.getElementById('cuotas').classList.remove('hidden')
            seccionPlan.classList.remove('hidden')
            break;
    }
}

const calcularPago = () => {
    //para pagos en efectivo
    if(option.value == "1"){
        if(planSeleccionado.value == "0"){
            document.getElementById('letrero').innerHTML = " ";
        }
        if(planSeleccionado.value == "1"){
            document.getElementById('letrero').innerHTML = "0$";
        }if(planSeleccionado.value == "2"){
            document.getElementById('letrero').innerHTML = "2'000.000$";
        }if(planSeleccionado.value == "3"){
            document.getElementById('letrero').innerHTML = "10'000.000$";
        }
    }if(option.value == "2"){
        if(numeroCuotas.value == "1"){
            if(planSeleccionado.value == "1"){
                document.getElementById('letrero').innerHTML = "0$";
            }if(planSeleccionado.value == "2"){
                document.getElementById('letrero').innerHTML = "666.666$/ mensual";
            }if(planSeleccionado.value == "3"){
                document.getElementById('letrero').innerHTML = "3'333.333$/ mensual";
            }
        }
        if(numeroCuotas.value == "2"){
            if(planSeleccionado.value == "1"){
                document.getElementById('letrero').innerHTML = "0$";
            }if(planSeleccionado.value == "2"){
                document.getElementById('letrero').innerHTML = "333.333$/ mensual";
            }if(planSeleccionado.value == "3"){
                document.getElementById('letrero').innerHTML = "1'666.666$/ mensual";
            }
        }
        if(numeroCuotas.value == "3"){
            if(planSeleccionado.value == "1"){
                document.getElementById('letrero').innerHTML = "0$ ";
            }if(planSeleccionado.value == "2"){
                document.getElementById('letrero').innerHTML = "166.666$/ mensual";
            }if(planSeleccionado.value == "3"){
                document.getElementById('letrero').innerHTML = "833.333$/ mensual";
            }
        }
    }
}

const opcionCambiada= () => {
    console.log("cambio");
    console.log(option.value)
    validacion();
}

option.addEventListener("change", opcionCambiada);
planSeleccionado.addEventListener("change", calcularPago)

