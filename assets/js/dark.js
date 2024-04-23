document.addEventListener("DOMContentLoaded", () => {
    let swticher = document.querySelector(".switcher__btn");
    let light = document.querySelector(".switcher__light");
    let dark = document.querySelector(".switcher__dark");

    swticher.addEventListener("click", () => {
        let head = document.head

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/Dark.css";
        link.id = "theme-dark"

        let themeDark = document.querySelector("#theme-dark");
        if(themeDark){
            themeDark.remove();
            light.style.display = "block";
            dark.style.display = "none";

        }else{
            head.appendChild(link);
            light.style.display = "none";
            dark.style.display = "block";
        }
        
    });
});