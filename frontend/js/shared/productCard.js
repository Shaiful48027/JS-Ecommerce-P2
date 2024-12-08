import { sliceTitle } from "./sliceTitle.js";
import { sliceDes } from "./slicedescription.js";

function productCard(product){
    const {img, title, price, description, _id} = product;
    
    const htmlCode = `
            <div class="productCard">
                <img src="${img}" alt="">
                <h2>$${price}</h2>
                <h3>${sliceTitle(title)}<h3/>
                <p>${sliceDes(description)}</p>
                <a href="productDetail.html?id=${_id}">
                    <button>View Details</button>
                </a>
            </div>
    `;
    return htmlCode; 
}
 export default productCard; 

