//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const audioTrack = document.getElementById("audioTrack");
const audioTrack2 = document.getElementById("audioTrackTwo")

camContainer.style.opacity = "1";
blackscreen.style.opacity = "1";
blackscreen.style.zIndex = "1";

const openingGap = 2000;
const cutToViewer1 = openingGap + 5420;
// Subtracting a second from the end of the line - the fade to black has a second that looks like nothing is happening, so you have to bring it in sooner. Actual time of the end of the line is 9500
const fadeToBlack1 = openingGap + 8500;
const cutToViewer2 = openingGap + 23950;
const bringInZoom = cutToViewer2 + openingGap;
const partialFade = bringInZoom + 8000;
const cutToViewer3 = partialFade + 8000;
const finalFade = cutToViewer3 + 6000;

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
        camContainer.style.transition = "all 1s ease";
        camContainer.style.boxSizing = "border-box";
        camContainer.style.border = "8px solid #ffff00";
        // camContainer.style.borderRadius = "12px";
    }, bringInZoom)

    setTimeout(function() {
        blackscreen.style.zIndex = "1";
        blackscreen.style.transition = "opacity 0s ease";
        blackscreen.style.opacity = "0.6";
    }, partialFade)

    setTimeout(function() {
        audioTrack2.play();
    }, partialFade + 4000)

    // setTimeout(function() {
    //     blackscreen.style.zIndex = "-2";
    //     blackscreen.style.transition = "opacity 0s linear";
    //     blackscreen.style.opacity = "0";
    // }, cutToViewer3)

    // setTimeout(function() {
    //     blackscreen.style.zIndex = "1";
    //     blackscreen.style.transition = "opacity 0s linear";
    //     blackscreen.style.opacity = "1";
    // }, finalFade)

    setTimeout(function() {
        blackscreen.style.zIndex = "1";
        blackscreen.style.transition = "opacity 0s linear";
        blackscreen.style.opacity = "1";
    }, partialFade + 4000 + 14000)

}
