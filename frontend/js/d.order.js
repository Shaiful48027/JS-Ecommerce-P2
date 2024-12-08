function loadOrders(){
    const url = 'http://localhost:5000/all-order';
    fetch(url)
    .then(res => res.json())
    .then(res => printOrders(res));
}
loadOrders();

function printOrders(orders){

    let tableCode = '';

    orders.forEach((order, index) => {
       tableCode += htmlcodes(order, index);
    });

   document.getElementById('tbody').innerHTML = tableCode;
};

function htmlcodes(order, index){
    const {name, email, phone, date, productId} = order;
    const htmlcode = `
    <tr>
        <td>${index + 1}</td>
        <td>${productId}</td>
        <td>${date}</td>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
    </tr>
    `;
    return htmlcode;
}


