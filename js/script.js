document.querySelectorAll('.question').forEach(item=>{

item.addEventListener('click',()=>{

const answer=item.nextElementSibling;
const toggle=item.querySelector('.faq-toggle');

answer.style.display=
answer.style.display==='block'
?'none'
:'block';

if(toggle){
toggle.textContent=answer.style.display==='block'?'˄':'˅';
}

});

});
const langBtn = document.querySelector(".lang-btn");
const langMenu = document.querySelector(".lang-menu");

langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {

    if(!e.target.closest(".language-selector")){
        langMenu.classList.remove("show");
    }

});