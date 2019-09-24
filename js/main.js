window.onload = function() {
    var sidebar = document.getElementById('main-header');
    var offset = sidebar.getBoundingClientRect().top;

    window.onscroll = function() {
        var y = window.scrollY;

        if (y >= offset) sidebar.className = 'fixed';
        else sidebar.className = "";
    }
}
