document.addEventListener("DOMContentLoaded", (event) => {
    

    //Seleccionar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobilebtn");
    let mobile_menu = document.querySelector(".menumobile");

    //Al hacer click en el boton del menú, mostrar el menú de navegación
    mobile_btn.addEventListener("click", () => {
        let show = document.querySelector(".menumobile__show");

        if(show){
            mobile_menu.classList.remove("menumobile__show");
        }else{
            mobile_menu.classList.add("menumobile__show");
        }
    });

    //Al redimensionar la pantalla por debajo de 1000px, ocultar el menú
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if(window_width >= 999){
            mobile_menu.classList.remove("menumobile__show");
        }
    });

    //Cerrar el menú con el boton X
    let btn_close = document.querySelector(".menumobile__close")

    btn_close.addEventListener("click", () => {
        let show = document.querySelector(".menumobile__show");

        show.classList.remove("menumobile__show");
        
    });
});