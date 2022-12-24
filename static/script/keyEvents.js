window.addEventListener("keydown", function (event) {
    if (event.repeat) return;
    playAudio();
    document.getElementById("yumevt").className = "mad";
    setClassLove();
}, false);