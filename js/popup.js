const popup = document.createElement('div');
popup.className = 'popup';

const illustration = document.createElement('span');
illustration.className = 'promo';
illustration.innerHTML = `<img src="materials/img/disc.jpg"/>`;

const cancel_popup = document.createElement('div');

cancel_popup.innerHTML = `<a href="#"> <img src="materials/img/cross.png" /></a>`;

cancel_popup.className = "cancel-popup";

popup.appendChild(illustration);
popup.appendChild(cancel_popup);


const timer= 2500;

window.addEventListener('load', ()=> {
    setTimeout(function(){
        popup.style.display = 'block';
        document.querySelector('body').appendChild(popup);
    }, timer);
})

cancel_popup.addEventListener('click', (e)=> {
    popup.remove();
    e.preventDefault();
});



