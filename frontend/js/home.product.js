// ekhane product card import kora hoyechilo and static information guli show koriye chiclo. ekhn dynamic bhabe mongdb theke informatin asbe.
import productCard from "./shared/productCard.js";

function loadproduct (){
    const url = 'http://localhost:5000/api/porducts'; //product link from backend of mongodb.
    fetch(url)
    .then(res => res.json())
    .then (res => printData(res))
}
loadproduct();

function printData(products){
    const div = document.getElementById('productSection');
    
    let htmlCode = '';
    
    products.forEach(product => {
        htmlCode +=  productCard(product);
    });
    div.innerHTML = htmlCode;
};
