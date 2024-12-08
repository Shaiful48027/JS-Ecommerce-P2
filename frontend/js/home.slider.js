
//function call korete hobe slider er jonno fodi url theke img nite hoy

function loadData(){
    const url = 'http://localhost:5000/sliders'; //url ba file connect kortehobe.
    
    fetch(url)
    .then(res => res.json())
    .then(sliderImg => {   // ekhane json er name dite hobe.. jemon sliderImg .. 
        
        let index = 0;

        function changeIMG(){
            const container = document.getElementById('slider-container');
            const htmlCode = ` <img src='${sliderImg[index].img}' />`;
            container.innerHTML = htmlCode;
        
            if(index <sliderImg.length -1){
                index++;
            }
            else{
                index = 0;
            }
        }
        changeIMG();
        setInterval(changeIMG, 3000);
    })
}
loadData();





















