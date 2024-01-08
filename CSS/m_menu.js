
const m_burger = document.querySelector(".m_menu");
const m_menu = document.querySelector(".m_menu_list");

m_burger.addEventListener("click",() => {
    m_menu.classList.toggle('open');
})