/* abrir e fecha o menu atraves dos toggles  'x' e  menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}
/* esconder o menu ao clica nos intens na pagina do menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
       nav.classList.remove('show')
    })
}
/*header------ escurecer o header e criar um sombra ao rolar a pagina*/ 
function darKengHeader(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrollY >= navHeight) {
        /* se maior ou igual a altura do header adciona*/
        header.classList.add('scroll') 
    } else {
        /*se menor do que a altura do header remove*/ 
        header.classList.remove('scroll')
    }
}

/*---testimonials----*/

const swiper = new Swiper ('.swiper-container', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    }, 
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/*---scrollReveal mostrar elementos quando der scrollna pagina----*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
   `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials
   #contacts .text, #contacts .links,
   footer .brand, footer .social
   `,
   { interval: 100 }
)

/*----Seta para voltar ao topo----*/

function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')    
     if (window.scrollY >= 2000) {
        backToTopButton.classList.add('show')
    } else{
         backToTopButton.classList.remove('show')
    }
}

/*----chamadas da mesma função scroll ---*/
window.addEventListener('scroll', function() {
    backToTop()
    darKengHeader()
})