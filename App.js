// change navber style on scroll

window.addEventListener('scroll', () => {
    document.quarySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})