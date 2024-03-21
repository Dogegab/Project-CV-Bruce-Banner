const primaryNav = document.querySelector('#primary-nav_list');
const navToggle = document.querySelector('.mobile-nav-toggle');
/* const mq = window.matchMedia("(min-width: 720px)");

 function handleMediaChange(mq) {
    if (mq.matches) {
        primaryNav.setAttribute("data-visible" , "true");
        console.log("L'écran est large !");
    } else {
        primaryNav.setAttribute("data-visible" , "false");
        console.log("L'écran est petit !");
    }
} 

mq.addEventListener("change", handleMediaChange); */

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible" , "true");
        primaryNav.classList.toggle('sr-only');
        navToggle.setAttribute("aria-expanded" , "true");


    }  else {
        primaryNav.setAttribute("data-visible" , "false");
        primaryNav.classList.toggle('sr-only');
        navToggle.setAttribute("aria-expanded" , "false");
    }
})
