const antes = document.getElementById('anterior');
const sig= document.getElementById('siguiente');
const progreso = document.getElementById('progreso');
const circulos = document.querySelectorAll(".circle");
let activo = 1;

function actualizar(){
    circulos.forEach((circle,idx) =>{
        if(idx < activo){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const activos = document.querySelectorAll('.active')

    progreso.style.width= (activos.length - 1) / (circulos.length - 1)*100 + '%'

    if (activo === 1){
        antes.disabled= true;
    } else if (activo === circulos.length){
        sig.disabled = true;
    }else {
        antes.disabled = false;
        sig.disabled=false;
    }

}
sig.addEventListener('click', ()=> {
    activo++
    if(activo>circulos.length){
        activo = circulos.length
    }
    actualizar();
})

antes.addEventListener('click', () => {
    activo--

    if (activo < 1 ){
        activo = 1
    }
    actualizar();
})
