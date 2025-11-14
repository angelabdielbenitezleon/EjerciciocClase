//componentes mejorados

const productos = [
    {nombre:"pizza", precio:100,img:"https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg"},
    {nombre:"refresco", precio:40, img:"https://carnemart.com/wp-content/uploads/2025/10/wp-image-5046.jpg"}
];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod =>{
    const card = document.createElement("div");
    card.className= "card";

    card.innerHTML = `
        <img src="${prod}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card)

});