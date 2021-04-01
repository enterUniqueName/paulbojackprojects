//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const eyeOpenVid = document.getElementById("eyeOpenVid");
const lettersVid = document.getElementById("lettersVid");
const redVid = document.getElementById("redVid");
const greenVid = document.getElementById("greenVid");
const blueVid = document.getElementById("blueVid");
const posterVid = document.getElementById("posterVid");
const colorBurstVid = document.getElementById("colorBurstVid");
const gateVid = document.getElementById("gateVid");
const eyeCloseVid = document.getElementById("eyeCloseVid");

const vidOpacity = "0.4";

// Global Timing
const fade = 2000;
const viewerOnScreen = 2000;

// Video Times
// NOTES ON VIDEOS
// Gotta edit the videos.
// 1. eyeOpenVid - no edit, no const
// 2. lettersVid - no edit
const lettersVidDuration = 9000 - fade;
// 3. redVid - no edit
const redVidDuration = 8080 - fade;
// 4. greenVid - edit down to first 11 seconds
const greenVidDuration = 11000 - fade;
// 5. blueVid - edit down: from 7 to 19
const blueVidDuration = 12000 - fade;
// 6. posterVid - no edit
const posterVidDuration = 6120 - fade;
// 7. colorBurstVid - edit down to first 6 seconds
const colorBurstVidDuration = 6000 - fade;
// 8. gateVid - dont play video, just use the first frame as a freeze frame. let it run for 4 seconds.
const gateVidDuration = 4000;
// 9. eyeCloseVid - edit down: from 3 second mark until after the eye closes. I chose to edit down to 5 total seconds, from the 2.20 mark. The const will have to be adjusted for when the eye starts to close.
const eyeCloseVidDuration = 2560;





// Start
// Opens with the closed eye. Eye on screen for 4s, then cut to vid of viewer.
const cutToViewer = 4000;
// stay on viewer for 2s then fade up letters
const fadeUpLetters = cutToViewer + viewerOnScreen;
// play the letters vid, then crossfade up red video;
const fadeUpRed = fadeUpLetters + lettersVidDuration
// play red vid, then crossfade up green vid
const fadeUpGreen = fadeUpRed + redVidDuration;
// play green vid, then crossfade up blue vid
const fadeUpBlue = fadeUpGreen + greenVidDuration;
// play blue vid, then crossfade up poster vid
const fadeUpPoster = fadeUpBlue + blueVidDuration;
// play poster vid, then crossfade up color burst vid
const fadeUpColorBurst = fadeUpPoster + posterVidDuration;
// play color burst vid, then crossfade up gate vid
const fadeUpGate = fadeUpColorBurst + colorBurstVidDuration;
// play gate vid, then crossfade up eye closing vid
const fadeUpEyeClose = fadeUpGate + gateVidDuration;
//  let eye vid play for 5 seconds, then quick fade to match when the eye closes.
const fadeToBlack = fadeUpEyeClose + eyeCloseVidDuration;





camContainer.style.opacity = "0";
blackscreen.style.opacity = "0";
eyeOpenVid.style.opacity = "0";
lettersVid.style.opacity = "0";
redVid.style.opacity = "0";
greenVid.style.opacity = "0";
blueVid.style.opacity = "0";
posterVid.style.opacity = "0";
colorBurstVid.style.opacity = "0";
gateVid.style.opacity = "0";
eyeCloseVid.style.opacity = "0";

//master fade function
function fade_function() {
    blackscreen.style.transition = "opacity 2s ease";
    eyeOpenVid.style.transition = "opacity 2s ease";
    lettersVid.style.transition = "opacity 2s ease";
    redVid.style.transition = "opacity 2s ease";
    greenVid.style.transition = "opacity 2s ease";
    blueVid.style.transition = "opacity 2s ease";
    posterVid.style.transition = "opacity 2s ease";
    colorBurstVid.style.transition = "opacity 2s ease";
    gateVid.style.transition = "opacity 2s ease";
    eyeCloseVid.style.transition = "opacity 2s ease";

    setTimeout(function() {
        eyeOpenVid.play()
        eyeOpenVid.style.opacity = vidOpacity;
    }, 0)

    setTimeout(function() {
        eyeOpenVid.style.transition = "opacity 0s linear";
        eyeOpenVid.style.opacity = "0";
        camContainer.style.opacity = "1";
    }, cutToViewer)

    setTimeout(function() {
        lettersVid.play();
        lettersVid.style.opacity = vidOpacity;
    }, fadeUpLetters)

    setTimeout(function() {
        lettersVid.style.opacity = "0";
        redVid.play();
        redVid.style.opacity = vidOpacity;
    }, fadeUpRed)

    setTimeout(function() {
        redVid.style.opacity = "0";
        greenVid.play();
        greenVid.style.opacity = vidOpacity;
    }, fadeUpGreen)

    setTimeout(function() {
        greenVid.style.opacity = "0";
        blueVid.play();
        blueVid.style.opacity = vidOpacity;
    }, fadeUpBlue)

    setTimeout(function() {
        blueVid.style.opacity = "0";
        posterVid.play();
        posterVid.style.opacity = vidOpacity;
    }, fadeUpPoster)

    setTimeout(function() {
        posterVid.style.opacity = "0";
        colorBurstVid.play();
        colorBurstVid.style.opacity = vidOpacity;
    }, fadeUpColorBurst)

    setTimeout(function() {
        colorBurstVid.style.opacity = "0";
        // gateVid.play();
        gateVid.style.opacity = vidOpacity;
    }, fadeUpGate)

    setTimeout(function() {
        gateVid.style.opacity = "0";
        eyeCloseVid.play();
        eyeCloseVid.style.opacity = vidOpacity;
    }, fadeUpEyeClose)

    setTimeout(function() {
        blackscreen.style.transition = "opacity 0.5s ease";
        blackscreen.style.opacity = "1";
        blackscreen.style.zIndex = "1";
    }, fadeToBlack)

}
