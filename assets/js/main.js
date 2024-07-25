/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav--link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm =document.getElementById('contact-form')
contactMessage = document.getElementById('contact-message')


const sentEmail=(e)=>{
e.preventDefault()

// serviceID - templateID - #form - publicKey
emailjs.sendForm('service_kqfoodj','template_x3z1erp','#contact-form','dxeGyiEiLoVl_efCo')
.then(()=>{

    // Show sent message
    contactMessage.textContent = ' Message sent successfully ✅'

    // Remove message after five seconds
    setTimeout(()=>{
        contactMessage.textContent = ''
    },5000)

    contactForm.reset()
}, ()=>{
     // Show error message
     contactMessage.textContent='Message not sent (service error) ❌'
     
})
}

contactForm.addEventListener('submit',sentEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
