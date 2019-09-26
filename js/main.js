// Fixed sidebar on scroll for smaller
window.onload = function() {
    var sidebar = document.getElementById("main-header");
    var y = window.scrollY;
    var stop = 65;

    if (window.innerWidth <= 736) stop = 45;
    if (y > stop) sidebar.className = "fixed";

    window.onscroll = function() {
        if (window.innerWidth <= 736) stop = 45;
        else stop = 65;

        y = window.scrollY;

        if (y > stop) sidebar.className = "fixed";
        else sidebar.className = "";
    }
}
