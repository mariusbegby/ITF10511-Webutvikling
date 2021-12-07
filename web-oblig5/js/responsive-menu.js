function responsiveMenu() {
    let navbar = document.getElementById("navbar");
    let mobile_icon = document.getElementById("nav-mobile-icon");

    if (navbar.className === "responsive-menu") {
        navbar.className += " mobile";
        mobile_icon.className = "fa-regular fa-xmark"
    }
    else {
        navbar.className = "responsive-menu";
        mobile_icon.className = "fa-regular fa-bars"
    }
}