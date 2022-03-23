const popup = document.createElement('div');
popup.className = 'popup';

const illustration = document.createElement('span');
button_cancel = document.createElement('button');
button_cancel.className = 'canc';
button_cancel.innerText = 'Accepter'
illustration.className = 'promo';
illustration.innerHTML = `
    <h3>Usage de Cookies</h3>
    <p>Nous et certains tiers utilisons des cookies ou des technologies similaires à des fins techniques et, avec votre consentement, à d'autres fins pour mieux vous offrir une meilleure expérience, comme indiqué dans la politique en matière de cookies.

    Vous pouvez consentir à l'utilisation de ces technologies en utilisant le bouton "Accepter". En fermant cet avis, vous continuez sans accepter.</p>
    `;

const cancel_popup = document.createElement('div');

cancel_popup.innerHTML = `<a href="#"> <img src="materials/img/cross.png" /></a>`;

cancel_popup.className = "cancel-popup";

popup.appendChild(illustration);
popup.appendChild(cancel_popup);
popup.appendChild(button_cancel);

button_cancel.addEventListener('click', closePopup);

const timer= 2500;

window.addEventListener('load', ()=> {
    setTimeout(function(){
        popup.style.display = 'block';
        document.querySelector('body').appendChild(popup);
    }, timer);
})

function closePopup(e){
    popup.remove();
    e.preventDefault();
}

cancel_popup.addEventListener('click', (e)=> {
    popup.remove();
    e.preventDefault();
});



