const yumevt = new Audio("../static/media/audio/dadada.mp3");

function playAudio() {
    yumevt.pause();
    yumevt.currentTime = 0;
    yumevt.play();
}