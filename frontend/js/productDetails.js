import { useParams } from "./shared/sliceTitle.js";

//const params = useParams();
// const {id} = useParams();

function loadData(){
    const {id} = useParams();

    const url = `http://localhost:5000/productid/${id}`; 
    
    fetch(url)
    .then(res => res.json())
    .then(res => printData(res))};

loadData();

const printData = (product) =>{
    
    const {description, img, productId, price, title} = product;

    const htmlCode = `
        <div class="productDetails">
            <img src="${img}" alt="">

            <h4>Product id : ${productId}</h4>
            <h2> Price : $${price}</h2>
            <h3>Title : ${title}</h3>
            <p>${description}</p>

            <a href="shipingForm.html?productId=${productId}"><button>buy Now</button></a>
        </div>
    `;

    document.getElementById('productSection').innerHTML = htmlCode;
};



