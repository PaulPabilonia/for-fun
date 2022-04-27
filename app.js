const noButton = document.querySelector('#btn_no');
const content =document.querySelector('#h1_text');
const backg  = document.querySelector('.container');

//this will randomly change the position of the button
var counter = 0;
document.querySelector('#btn_no').onclick = () => {
    noButton.style.position = 'absolute';
    noButton.style.top = Math.ceil(Math.random()*550)+'px';
    noButton.style.left = Math.ceil(Math.random()*1250)+'px';
    counter++;
    if (counter == 1){
        content.innerHTML = `<img src="pic (5).jpg" alt=""> 
        <div>SARAP MONG SAPAKIN!! KUTUSAN KITA E!!!</div>`;
        backg.style.background = 'blue';
    }else if(counter == 2){
        content.style.color = "red"
        content.innerHTML = `<img src="pic (2).jpg" alt=""> 
        <div>MAS PANGIT KA!!</div>`;
        backg.style.background = 'black';
    }else if(counter == 3){
        content.innerHTML = `<img src="pic (6).jpg" alt=""> 
        <div>Welcome sa Langit!!!! bleee!!!</div>`;
        h1_text.style.color = 'black'
        backg.style.background = 'white';
    }else if(counter == 4){
        content.innerHTML = `<img src="pic (3).jpg" alt=""> 
        <div>HHAHAHAA TAWANAN NATIN! Welcome to Hell!!</div>`;
        backg.style.background = 'red';
    }else{
        content.innerHTML = `<img src="pic (1).jpg" alt=""> 
        <div>Suko na ko, Tang ina mo! Di sana masarap ulam nyo!</div>`;
        backg.style.background = 'silver';
        counter = 0
    }
};

document.querySelector('#btn_yes').onclick = ()=>{
    noButton.style.position = 'relative';
    noButton.style.top = 0+'px';
    noButton.style.left = 0+'px';
    backg.style.background = 'green';
    counter = 0
    content.innerHTML = `<img src="pic (4).jpg" alt=""> 
        <div>Diba gwapo ko?! Thank You!</div>`;
}