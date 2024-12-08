function loadReport(){
    const url = ('http://localhost:5000/report');
    fetch(url)
    .then(res => res.json())
    .then(res => {
        document.getElementById('todaysOrder').innerHTML = res.todaysOrder;
        document.getElementById('totalProduct').innerHTML = res.totalProduct;
        document.getElementById('totalOrdres').innerHTML = res.totalOrdres;
        document.getElementById('totalSlider').innerHTML = res.totalSlider;
    })
}
loadReport();