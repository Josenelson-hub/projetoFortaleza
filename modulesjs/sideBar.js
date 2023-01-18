export default function sideBar(){
const navbar = document.querySelector('.navBarLateral')
const botao = document.querySelector('[data-js="botao"]')

function sideBarActive(e){
e.preventDefault();
navbar.classList.toggle('ativo')
}

botao.addEventListener('click', sideBarActive)
}