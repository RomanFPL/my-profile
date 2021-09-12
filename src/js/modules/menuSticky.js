const stickMenu = (menuElem, selectorSectionToSticky) => {
    window.addEventListener("scroll", () => {
        const targetMenu = document.querySelector(menuElem);
        const targetSection = document.querySelector(selectorSectionToSticky);
        if(window.scrollY >= targetMenu.offsetTop){
            targetMenu.classList.remove("header-bottom");
            targetMenu.classList.add("header-top");
        }
        if(targetSection.offsetHeight-targetMenu.offsetHeight>=window.scrollY){
            targetMenu.classList.add("header-bottom");
            targetMenu.classList.remove("header-top");
        }
    });
}

export default stickMenu;