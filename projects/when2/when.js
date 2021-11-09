//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const audioTrack = document.getElementById("audioTrack");
const whiteVid = document.getElementById("whiteVid");
const blackVid = document.getElementById("blackVid");


// Global Timing
const fadeTime = 3000;
const viewerOnScreen = 2000;


camContainer.style.opacity = "1";
blackscreen.style.opacity = "1";
blackscreen.style.zIndex = "1";
whiteVid.style.opacity = "0";
blackVid.style.opacity = "0";

const openingGap = 2000;
const cutToViewer1 = openingGap + 12500;
const fadeToBlack1 = cutToViewer1 + viewerOnScreen;
const cutToViewer2 = openingGap + 25500;
const fadeToBlack2 = cutToViewer2 + viewerOnScreen;
const cutToViewer3 = openingGap + 45000;
const fadeToBlack3 = cutToViewer3 + viewerOnScreen;
const cutToViewer4 = openingGap + 55000;
const addFrame = cutToViewer4 + viewerOnScreen;
const partialFade = addFrame + 8000;
const finalFade = partialFade + 8000;

function cut() {
    blackscreen.style.zIndex = "-2";
    blackscreen.style.opacity = "0";
}
function fade() {
    blackscreen.style.zIndex = "1";
    blackscreen.style.opacity = "1";
}

//master fade function
function master_animation() {
    blackscreen.style.transition = "opacity 3s ease";

    setTimeout(function() {
        audioTrack.play();
    }, openingGap)

    setTimeout(function() {
        cut();
    }, cutToViewer1)

    setTimeout(function() {
        fade();
    }, fadeToBlack1)

    setTimeout(function() {
        cut();
    }, cutToViewer2)

    setTimeout(function() {
        fade();
    }, fadeToBlack2)

    setTimeout(function() {
        cut();
    }, cutToViewer3)

    setTimeout(function() {
        fade();
    }, fadeToBlack3)

    // setTimeout(function() {
    //     cut();
    // }, cutToViewer4)

    // setTimeout(function() {
    //     camContainer.style.transition = "all 1s ease";
    //     camContainer.style.boxSizing = "border-box";
    //     camContainer.style.border = "8px solid #ffff00";
    //     // camContainer.style.borderRadius = "12px";
    // }, addFrame)

    // setTimeout(function() {
    //     blackscreen.style.zIndex = "1";
    //     blackscreen.style.transition = "opacity 0s ease";
    //     blackscreen.style.opacity = "0.7";
    // }, partialFade)

    // setTimeout(function() {
    //     blackscreen.style.transition = "opacity 0s linear";
    //     blackscreen.style.opacity = "1";
    // }, finalFade)

    setTimeout(function() {
        whiteVid.style.opacity = '0.35';
        blackscreen.style.zIndex = "-2";
        blackscreen.style.opacity = "0";
        whiteVid.play();
    }, cutToViewer4)

    setTimeout(function() {
        whiteVid.style.transition = "opacity 0.5s ease";
        whiteVid.style.opacity = '0';
        blackVid.style.transition = "opacity 0.5s ease";
        blackVid.style.opacity = "0.35";
        blackVid.play()
    }, cutToViewer4 + 5000 + 5000)

    setTimeout(function() {
        cut();
        blackVid.style.opacity = "0";
    }, cutToViewer4 + 10000 + 10000)

    setTimeout(function() {
        blackscreen.style.zIndex = "1";
        blackscreen.style.transition = "opacity 5s ease";
        blackscreen.style.opacity = "1";
    }, cutToViewer4 + 20000 + 4000)

}
