window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

var oldTimeout;

function setClassLove() {
    clearTimeout(oldTimeout);

    oldTimeout = setTimeout(() => {
        document.getElementById("yumevt").className = "love";
    }, 400);
}