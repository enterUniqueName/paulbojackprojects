//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const whitescreen = document.getElementById("whitescreen");
const track1 = document.getElementById("track1");
const track2 = document.getElementById("track2");
const track3 = document.getElementById("track3");
const track4 = document.getElementById("track4");

blackscreen.style.opacity = "1";

var track1duration;
var track2duration;
var track3duration;
var track4duration;

track1.addEventListener('canplaythrough', (event) => {
    track1duration = '+=' + track1.duration;
});
track2.addEventListener('canplaythrough', (event) => {
    track2duration = '+=' + (track2.duration + 5);
});
track3.addEventListener('canplaythrough', (event) => {
    track3duration = '+=' + track3.duration;
});
track4.addEventListener('canplaythrough', (event) => {
    track4duration = '+=' + (track4.duration + 5);
});

// ---------------------------------------------

function playTrack1() {
    track1.play();
}
function playTrack2() {
    track2.play();
}
function playTrack3() {
    track3.play();
}
function playTrack4() {
    track4.play();
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

function cutToViewer() {
    let tl = gsap.timeline();
    tl
    .set(blackscreen, {
        opacity: 0,
        duration: 0,
    })
    return tl;
}

function fadeOutVideo() {
    let tl = gsap.timeline();
    tl
    .to(tunnelVid, {
        opacity: 0,
        duration: 3,
    })
    return tl;
}

function blackFade() {
    let tl = gsap.timeline();
    tl
    .to(blackscreen, {
        opacity: 1,
        duration: 3,
    })
    return tl;
}

// ---------------------------------------------

//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start playing after 2 seconds of black
    .call(playTrack1, [], '2')
    // 2.370 seconds for audio track length
    .add(cutToViewer(), track1duration)
    // Start playing after 2 second of being on viewer
    .call(playTrack2, [], '<+=2')
    // 2.984 seconds for audio track length
    // 5 seconds of time on viewer after track finishes playing
    .add(blackout(), track2duration)
    // 2 seconds of black, then start track
    .call(playTrack3, [], '+=2')
    // 2.231 seconds for audio track length
    .add(cutToViewer(), track3duration)
    // Start playing after 2 second of being on viewer
    .call(playTrack4, [], '<+=2')
    // 2.872 seconds for audio track length
    // 5 seconds of time on viewer after track finishes playing
    .add(blackout(), track4duration)
}
