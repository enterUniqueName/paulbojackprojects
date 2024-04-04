//project specific scripts

const camContainer = document.getElementById("cam_container");

const background = document.getElementById("background");
const cloudVid = document.getElementById("vid");

const audio1 = document.getElementById("audioTrack1");
const audio2 = document.getElementById("audioTrack2");
const audio3 = document.getElementById("audioTrack3");
const audio4 = document.getElementById("audioTrack4");
const audio5 = document.getElementById("audioTrack5");
const audio6 = document.getElementById("audioTrack6");

background.style.opacity = "0";
cloudVid.style.opacity = "1";

function cutToViewer() {
    background.opacity = "0";
};

function playAudio(a) {
    a.play();
};

function playVideo() {
    cloudVid.play();
};

function toggleClass(a, b) {
    a.classList.toggle(b);
}
 
function audioAnimation() {
    let tl = gsap.timeline();
    tl
    // play video
    .call(playVideo())
    // after 3 seconds of video, cut to 50% over top of viewer
    .to(cloudVid, {
        duration: 2,
        opacity: 0.7,
    }, "+=3")
    //after 1 second of viewer, kick off first audio
    .call(playAudio, [audio1], ">1")
    //at end of audio1, cut to red screen and kill cloud video
    .to(background, {
        duration: 0.1,
        opacity: 1,
    }, '>' + audio1.duration)
    .to(cloudVid, {
        duration: 0.1,
        opacity: 0,
    }, "<")
    //after 4 seconds on red, bring in audio2 (still on red)
    .call(playAudio, [audio2], ">4")
    //when that audio finishes, cut to viewer & next audio
    .to(background, {
        duration: 0.1,
        opacity: 0,
    }, '>' + audio2.duration)
    .call(playAudio, [audio3], ">")
    //after audio finishes, cut to red & next audio.
    .to(background, {
        duration: 0.1,
        opacity: 1,
    }, '>' + audio3.duration)
    .call(playAudio, [audio4], ">")
    //after audio finishes, cut to red & next audio.
    .to(background, {
        duration: 0.1,
        opacity: 0,
    }, '>' + audio4.duration)
    .call(playAudio, [audio5], ">")
    //after audio finishes, cut to red & next audio.
    .to(background, {
        duration: 0.1,
        opacity: 1,
    }, '>' + audio5.duration)
    .call(playAudio, [audio6], ">")
    //after audio finishes, cut to viewer for 4 seconds, then fade to black.
    .to(background, {
        duration: 0.1,
        opacity: 0,
    }, '>' + audio6.duration)
    .call(toggleClass, [background, 'red'], '+=4')
    .to(background, {
        duration: 5,
        opacity: 1,
    }, '>')

    return tl;
};




function master_animation() {
    let tl = gsap.timeline();
    tl
    .add(audioAnimation)
    return tl;
};
