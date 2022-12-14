//////// variables 
let Muzzarela = {
    id: 1,
    nombre: 'Muzzarela',
    precio:500,
    ingredientes:['masa de trigo','pure de tomate','queso muzzarela','y condimentos'],
}
let Fugazeta = {
    id: 2,
    nombre: 'Fugazeta',
    precio:900,
    ingredientes:['masa de trigo','43 kilos de cebolla','queso cremoso','y condimentos'],
}
let Especial = {
    id: 3,
    nombre: 'Especial',
    precio:1100,
    ingredientes:['masa de trigo','pure de tomate','queso muzzarela','condimentos','una feta de jamon','y un morron a medio pudrir'],
}
let Cochina = {
    id: 4,
    nombre: 'Cochina',
    precio:800,
    ingredientes:['masa de trigo','pure de tomate','queso muzzarela','queso chedar','papas fritas','huevos fritos','y condimentos'],
}
let Vegana = {
    id: 5,
    nombre: 'Vegana',
    precio:4600,
    ingredientes:['masa de trigo vegano','pure de tomate vegano','queso muzzarela vegano','y condimentos veganos'],
}
let Cuatroquesos = {
    id: 6,
    nombre: 'Cuatro quesos',
    precio:400,
    ingredientes:['masa de trigo','queso muzzarela','queso roquefort','queso fontina','queso parmesano','y condimentos'],
}

const pizzas = [Muzzarela,Fugazeta,Especial,Cochina,Vegana,Cuatroquesos]

const cards = document.getElementById('pizza--cards');
const form = document.getElementById('pizza--form');
const numeroped = document.getElementById('id-pizza')
const error = form.querySelector('small')

let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

//////////////////////////////funciones///////////////////////////////////////////// 
 const init = () => {
    primerrender()
    form.addEventListener('submit', sumbiteador);
}
////////////////////////////////////////////////////////////////////////////////////
const primerrender = () => {
    for (let cosa of pedidos){
        cards.insertAdjacentHTML('beforeend',`<div class="pizza-card"> <h2> ${pizzas[cosa-1].nombre} </h2> <h4> ${pizzas[cosa-1].precio} </h4></div>`);
    }    
}
////////////////////////////////////////////////////////////////////////////////////
const sumbiteador = (e) => {
    e.preventDefault();
    if (pedidovalido(numeroped.value)){
        error.classList.remove("show");
        agregarpedido(numeroped.value);
        form.reset();
        setearlocal();
        iniciarrender();
    }
    else {    
        error.classList.add("show");
    }
}
////////////////////////////////////////////////////////////////////////////////////
const pedidovalido = (numero) => {
    if (numero >= 7 || numero <= 0){
        return false;
    }
    else {
        return true;
    }
}
////////////////////////////////////////////////////////////////////////////////////
const agregarpedido = (numerow) => {
    pedidos = [
        ...pedidos,
        numerow
    ]
}
////////////////////////////////////////////////////////////////////////////////////
const setearlocal = () => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
};
////////////////////////////////////////////////////////////////////////////////////
const iniciarrender = () => {
    cards.insertAdjacentHTML('beforeend',renderizador(pedidos));
}
////////////////////////////////////////////////////////////////////////////////////
const renderizador = (ped) => {
    return `<div class="pizza-card"> <h2> ${pizzas[ped[ped.length-1]-1].nombre} </h2> <h4> ${pizzas[ped[ped.length-1]-1].precio} </h4></div>`;     
}



init ();

////ya se que no era con cards pero queria probar ekisde




