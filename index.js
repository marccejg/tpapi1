let principal = document.getElementById("principal");
let botonDatos = document.getElementById("botonDatos");
let divProducto = document.getElementById("divProducto");

botonDatos.addEventListener("click", api);

async function api() {

    try {
        let resultado = await fetch('https://fakestoreapi.com/products');
        let data = await resultado.json();
        //console.log(data);
        renderizarInfo(data);
    } catch (error) {
        console.log(error);
    }
}
let contador = 0;
function renderizarInfo(datos) {


    let i = contador++


    let product = datos[i].title;
    console.log(product);
    let category = datos[i].category;
    console.log(category);


    let description = datos[i].description;
    console.log(description);

    //
    let price = datos[i].price;
    console.log(price);




    let nameProduct = document.createElement("h2");
    nameProduct.innerText = datos[i].title

    let nameCategory = document.createElement("h3")
    nameCategory.innerText = datos[i].category

    let nameDescription = document.createElement("p")
    nameDescription.innerText = datos[i].description

    let namePrice = document.createElement("h3")
    namePrice.innerText = datos[i].price

    divProducto.appendChild(nameProduct);
    divProducto.appendChild(nameCategory);
    divProducto.appendChild(nameDescription);
    //  let texto = "el precio es $ ";
    divProducto.appendChild(namePrice);
};
