import { useParams } from "./shared/sliceTitle.js"; 

const form = document.getElementById('form');


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const {productId} = useParams();

    const date = new Date();
    const today = date.toLocaleDateString();


    const data ={
        // name : name,
        // email : email,
        // phone : phone,
        // productId : productId,
        // date : today
        name,
        email,
        phone,
        productId,
        date : today
    } 
    
    const url = 'http://localhost:5000/new-order';

    fetch(url, {
        method : "post",
        headers :{
            'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if (res.acknowledged) {
            alert('Oreder Submit Succesfully :)');
            window.location.href = '/frontend/html/index.html'
        }
    })
    
});
