/*==================== SHOW MENU ====================*/

const showMenu = (toggleId, navId) => {
    const showMenu = document.getElementById(toggleId),
    navId = document.getElementById(navId);

    /*==================== validar variavel ====================*/

    if(toggleId && nav) {
        toggleId.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.getQuerySelector('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //quando clicar em nav-link, remover a classe show-menu
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== change background header ====================*/


function scrollHeader() {
    const nav = document.getElementById('header')
    //quando o scroll é maior que 200 viewport altura, adicione a classe scroll-header à tag header
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


/*==================== SHOW scroll top ====================*/

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    //quando o scroll é maior que 560 viewport altura, adicione a classe scroll-top à tag a com a classe scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//we validate if the user previously chose a topic

if(selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

//activate / deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll Reveal Animation
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr.reveal(`.home__data, .home__img,
//             .about__data, .about__img,
//             .services__content, .menu__content,
//             .app__data, .app__img,
//             .contact__data, .contact__button,
//             .footer__content`, {
//     interval: 200
