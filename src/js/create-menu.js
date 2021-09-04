import menu from '../menu.json'
import menuCards from '../templates/menu-cards.hbs'

const menuList = document.querySelector('.js-menu')

export default function createMenu() {
    menuList.insertAdjacentHTML('beforeend',menuCards(menu))
}