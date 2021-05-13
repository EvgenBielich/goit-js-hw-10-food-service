import menu from '../menu.json'
import menuTemplate from '../templates/menu.hbs';

const menuList = document.querySelector('.js-menu');
menuList.innerHTML = menuTemplate(menu);