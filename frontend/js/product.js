import productCard from "./shared/productCard.js";

function loadproduct(){
    const url = 'http://localhost:5000/api/product';

    fetch(url)
    .then(res => res.json())
    .then(res => printData(res))
};
loadproduct();

function printData(product){
    const div = document.getElementById('our-product-container');
    let htmlCode = ``;

    product.forEach(product =>{
        const code = productCard(product);
        htmlCode += code;
    });

    div.innerHTML = htmlCode;
};


