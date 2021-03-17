//project specific scripts

const blackscreen = document.getElementById("blackscreen");
const text1 = document.getElementById("t1");
const text2 = document.getElementById("t2");
const text3 = document.getElementById("t3");
const diamond = document.getElementById("diamond");
const videoEmbed = document.getElementById("videoEmbed");

const fade = 3000;
const fade2 = 2000;
const onScreenTwo = 2000;
const onScreenTwoPointFive = 2500;
const onScreenThree = 3000;
const onScreenThreePointFive = 3500;
// Stay on black for 1 seconds
const openingGap = 1000;
//then there is a 3 second fade in to text and text on screen for 2s
const startFadeOut = openingGap + fade + onScreenTwo;
// Allow for 3s fadeout, then cut to video
const cutToVideo = startFadeOut + fade;
// Stay on vid for 3 seconds, then cut to black and second word
const secondWord = cutToVideo + onScreenThree;
// Allow for 3s fade and 2s on screen before starting fade down
const secondStartFade = secondWord + fade + onScreenTwo;
// allow for 3s fade down, then cut to vid
const cutToVideo2 = secondStartFade + fade;
// Video on screen for 2s, then fade up diamond (2s fade)
const fadeUpDiamond = cutToVideo2 + onScreenTwo;
// include 2s fade and Stay on diamond for 3 seconds, then cut to black with text
const thirdCutToBlack = fadeUpDiamond + fade2 + onScreenThree;
// Keep text up for 3.5 seconds, then cut to vid
const cutToVideo3 = thirdCutToBlack + onScreenThreePointFive;
// Stay on vid for 3 seconds, then fade up videoEmbed
const fadeUpEmbed = cutToVideo3 + onScreenThree;
// 10 second video, cut to black
const onScreenTen = 10000;
const finalCutToBlack = fadeUpEmbed + onScreenTen;




window.onload = function() {
    blackscreen.style.opacity = "1";
    text1.style.opacity = "0";
    text2.style.opacity = "0";
    text3.style.opacity = "0";
    diamond.style.opacity = "0";
    videoEmbed.style.opacity = "0";
};

//fadein functions for each word set
function fadein_1() {
    text1.style.transition = "opacity 3s ease";
    text1.style.opacity = "1";
}
function fadein_2() {
    text2.style.transition = "opacity 3s ease";
    text2.style.opacity = "1";
}
function fadein_3() {
    text3.style.opacity = "1";
}
function fadeout_1() {
    text1.style.opacity = "0";
}
function fadeout_2() {
    text2.style.opacity = "0";
}
function fadeout_3() {
    text3.style.opacity = "0";
}
function fadein_diamond() {
    diamond.style.transition = "opacity 2s ease";
    // Diamond opacity set to 30%
    diamond.style.opacity = "0.3";
}
function fadein_videoEmbed() {
    videoEmbed.style.transition = "opacity 3s ease";
    videoEmbed.style.opacity = "0.5";
}
function cutToVid() {
    blackscreen.style.opacity = "0";
    text1.style.opacity = "0";
    text2.style.opacity = "0";
    text3.style.opacity = "0";
}
function cutToBlack() {
    blackscreen.style.opacity = "1";
}

//master fade function
function fade_function() {
    setTimeout(function() {
        fadein_1();
    }, openingGap)

    setTimeout(function() {
        fadeout_1();
    }, startFadeOut)

    setTimeout(function() {
        cutToVid();
    }, cutToVideo)

    setTimeout(function() {
        cutToBlack();
        fadein_2();
    }, secondWord)

    setTimeout(function() {
        fadeout_2();
    }, secondStartFade)

    setTimeout(function() {
        cutToVid();
    }, cutToVideo2)

    setTimeout(function() {
        fadein_diamond();
        diamond.play();
    }, fadeUpDiamond)

    setTimeout(function() {
        diamond.style.transition = "opacity 0s linear";
        diamond.style.opacity = "0";
        cutToBlack();
        fadein_3();
    }, thirdCutToBlack)

    setTimeout(function() {
        cutToVid();
    }, cutToVideo3)

    setTimeout(function() {
        fadein_videoEmbed();
        videoEmbed.play();
    }, fadeUpEmbed)

    setTimeout(function() {
        cutToBlack();
        blackscreen.style.zIndex = "1";
    }, finalCutToBlack)
}