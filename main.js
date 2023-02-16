window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >0)
})



// show hide faqs

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')

        // icon change
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className ='uil uil-minus'
        }
        else {
            icon.className ='uil uil-plus'
        }
        
    })
   
})

// nav menu show/hide

const menu = document.querySelector(".nav__menu");
const menuBtn=document.querySelector('#open-menu-btn')
const closeBtn=document.querySelector('#close-menu-btn')


menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display='inline-block';
    menuBtn.style.display = 'none';


})

//close nav

const closeNav = () =>{
    menu.style.display = 'none';
    closeBtn.style.display='none';
    menuBtn.style.display='inline-block'
}

closeBtn.addEventListener('click',closeNav)

// text animation

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" Safe", " Efficient", " Reliable", " FUN!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
