const primaryNav = document.querySelector('#primary-nav_list');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");;

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



