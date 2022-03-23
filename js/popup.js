const popup = document.createElement('div');
popup.className = 'popup';

const illustration = document.createElement('span');
button_cancel = document.createElement('button');
button_cancel.className = 'canc';
button_cancel.innerText = 'Accept and close'
illustration.className = 'promo';
illustration.innerHTML = `
    <h3>Cookie Usage</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tellus non nibh varius cursus. Pellentesque consectetur, risus ut pellentesque finibus, massa mauris congue sapien, sit amet consequat justo nulla a risus. Cras sem massa, consectetur in eleifend vitae, tempor quis dui. Praesent placerat blandit mauris, in efficitur lectus consectetur quis. Nullam at pharetra enim.</p>
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



