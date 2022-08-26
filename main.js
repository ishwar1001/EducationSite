window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

const FAQs = document.querySelectorAll('.FAQ');

FAQs.forEach(FAQ => {
    FAQ.addEventListener('click', () => {
        FAQ.classList.toggle('open');

        const icon = FAQ.querySelector('.FAQicon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }else{
            icon.className = 'uil uil-plus'
        }
    })
})




const menu = document.querySelector(".navMenu");
const menuBtn = document.querySelector("#openMenu");
const closeBtn = document.querySelector("#closeMenu");


menuBtn.addEventListener('click', ()=> {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";

}

closeBtn.addEventListener('click', closeNav)