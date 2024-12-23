const Navlink = document.querySelectorAll ("nav > ul > li > a");

Navlink.forEach(link => {
    link.addEventListener("click",function (event) {
        event.preventDefault();

        Navlink.forEach(nav => nav.classList.remove("active"));
        
        this.classList.add("active");
    })
});