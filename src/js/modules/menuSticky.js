const stickMenu = (menuElem, selectorSectionToSticky, ...cb) => {
    [cbAfter, cbBefore] = cb;
    window.addEventListener("scroll", () => {
        const targetMenu = document.querySelector(menuElem);
        const targetSection = document.querySelector(selectorSectionToSticky);
        if(window.scrollY >= targetMenu.offsetTop){
            targetMenu.classList.remove("header-bottom");
            targetMenu.classList.add("header-top");
            try{cbAfter()} catch {null}
        }
        if(targetSection.offsetHeight-targetMenu.offsetHeight>=window.scrollY){
            targetMenu.classList.add("header-bottom");
            targetMenu.classList.remove("header-top");
            try{cbBefore()} catch {null}
        }
    });
}

export default stickMenu;