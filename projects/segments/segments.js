//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const countdown = document.getElementById('countdownVid');
const countup = document.getElementById('countupVid');

camContainer.style.opacity = "1";
blackscreen.style.opacity = "0";
countdown.style.opacity = "0";
countup.style.opacity = "0";

function timerOne() {
    let tl = gsap.timeline();
    tl
    .call(play, [countup, 7])
    .call(pause, [countup], 14.2)
    return tl;
};
function timerTwo() {
    let tl = gsap.timeline();
    tl
    .call(play, [countdown, 3.8])
    .call(pause, [countdown], 15)
    return tl;
}
function timerThree() {
    let tl = gsap.timeline();
    tl
    .call(play, [countup, 38])
    .call(pause, [countup], 22)
    return tl;
};
function timerFour() {
    let tl = gsap.timeline();
    tl
    .call(play, [countdown, 46])
    .call(pause, [countdown], 13)
    return tl;
}

function play(el, time) {
    el.currentTime = time;
    el.play();
    el.style.opacity = '1';
}
function pause(el) {
    el.style.opacity = '0';
    el.pause();
}

function blackout() {
    let tl = gsap.timeline();
    tl
    .set(blackscreen, {
        opacity: 1,
        duration: 0,
    })
    return tl;
}


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // starting after 3 seconds on the viewer
    .add(timerOne(), '3')
    .add(timerTwo(), '+=3')
    .add(timerThree(), '+=3')
    .add(timerFour(), '+=3')
    .add(blackout())
}
