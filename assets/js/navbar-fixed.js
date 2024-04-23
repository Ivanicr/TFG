document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.querySelector('.menu__navbar');

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        let sticky = parseInt(document.body.clientWidth);

        if(sticky >= 1000){
            if(scroll > 90){
                navbar.classList.add("menu__navbarfixed");
            }else{
                navbar.classList.remove("menu__navbarfixed");
            }
        }
    });
});