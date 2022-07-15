//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const whitescreen = document.getElementById("whitescreen");
const track1 = document.getElementById("track1"); // 2.266 seconds
const track2 = document.getElementById("track2"); // 2.194 seconds
const track3 = document.getElementById("track3"); // 1.704 seconds
const track4 = document.getElementById("track4"); // 1.632 seconds

blackscreen.style.opacity = "1";

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
    // 2.266 seconds for audio track length
    .add(cutToViewer(), '+=2.266')
    // Start playing after 2 second of being on viewer
    .call(playTrack2, [], '<+=2')
    // 2.194 seconds for audio track length
    // 5 seconds of time on viewer after track finishes playing
    .add(blackout(), '+=7.194')
    // 2 seconds of black, then start track
    .call(playTrack3, [], '+=2')
    // 1.704 seconds for audio track length
    .add(cutToViewer(), '+=1.704')
    // Start playing after 2 second of being on viewer
    .call(playTrack4, [], '<+=2')
    // 1.632 seconds for audio track length
    // 5 seconds of time on viewer after track finishes playing
    .add(blackout(), '+=6.632')
}
