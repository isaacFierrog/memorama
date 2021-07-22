const d = document
    pilaCoincidencias = [];
let numCoincidencias = 0;

const evaluarCoincidencias = pila => {
    if(pila[1].textContent === pila[0].textContent){
        setTimeout(() => {
            numCoincidencias++;
            pila.forEach(el => el.classList.add("main__card--hidde"))
            pila.splice(0);
        }, 300);
    }else{
        setTimeout(() => {
            pila.forEach(el => {
                el.classList.toggle("main__card--turn");
                el.classList.toggle("main__card--paint");
            });
            pila.splice(0);
        }, 800);
    }
};

const girarTarjeta = selecTarjeta => {
    d.addEventListener("click", e => {
        if(e.target.matches(selecTarjeta)){
            e.target.classList.toggle("main__card--turn");
            e.target.classList.toggle("main__card--paint");
            pilaCoincidencias.push(e.target);

            if(pilaCoincidencias.length === 2){
                evaluarCoincidencias(pilaCoincidencias);
            }
        }
    });
};

d.addEventListener("DOMContentLoaded", e => {
    girarTarjeta(".main__card");
});