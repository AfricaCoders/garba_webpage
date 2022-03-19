const mobile_menu_open = document.createElement('div');
mobile_menu_open.className = 'mobile-menu';
document.querySelector('body').appendChild(mobile_menu_open);

const menu = document.querySelector('.menu-bar-menu');
const menu_container = document.querySelector('.menu-bar');

menu.addEventListener('click', showMenu);

function showMenu(e){
    console.log('clicked');
    if (mobile_menu_open.style.right == '0'){
        mobile_menu_open.style.right = '-100%';
    }
    else {
        mobile_menu_open.style.right = '0';
    }    
        
    menu_container.innerHTML = `<img src="materials/img/cross-sign.png" class="menu-bar-menu" alt="close menue"/>`;   
    e.preventDefault();
}