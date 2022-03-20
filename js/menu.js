const mobile_menu_open = document.createElement('div');
const cross = document.createElement('div');
const nav_container_mobile = document.createElement('div');
const ul = document.createElement('ul');

cross.className = 'cross-container';
cross.innerHTML = `<img src="materials/img/cross-sign.png" class="cross-sign-menu" />`;

ul.innerHTML = `
    <li>
        <a href="index.html">Home</a>
    </li>
    <li>
        <a href="about.html">About</a>
    </li>`;
nav_container_mobile.className="nav-mobile";
mobile_menu_open.className = 'mobile-menu';


mobile_menu_open.appendChild(cross);
nav_container_mobile.appendChild(ul);
mobile_menu_open.appendChild(nav_container_mobile);

document.querySelector('body').appendChild(mobile_menu_open);

const menu = document.querySelector('.menu-bar-menu');
const menu_container = document.querySelector('.menu-bar');

menu.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);

function showMenu(e){
    console.log('clicked');
    mobile_menu_open.style.right = '0';
         
    e.preventDefault();
}

function hideMenu(e){
    mobile_menu_open.style.right = '-100%';
    e.preventDefault();
}

