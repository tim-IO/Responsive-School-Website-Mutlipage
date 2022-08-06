// change navber style on scroll

window.addEventListener('scroll', () => {
    document.quarySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => (
    faq.addEventListener('click', () => (
        faq.classList.toggle('open')

        // const icon = faq.quarySelector('.faq-icon i');
        // if(icon.className === 'fa-plus') {
        //     icon.className = 'fa-minus';
        // } else {
        //     icon.className = 'fa-plus';
        // }
    ))
))