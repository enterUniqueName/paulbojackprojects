//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const whitescreen = document.getElementById("whitescreen");

const DONT = document.getElementById("DONT");
const BE = document.getElementById("BE");
const LIKE = document.getElementById("LIKE");
const BE2 = document.getElementById("BE2");
const LIKE2 = document.getElementById("LIKE2");
const INSTEADCONTAINER = document.getElementById("INSTEAD-CONTAINER");
const I = document.getElementById("I");
const N = document.getElementById("N");
const S = document.getElementById("S");
const T = document.getElementById("T");
const E = document.getElementById("E");
const A = document.getElementById("A");
const D = document.getElementById("D");

// ---------------------------------------------

camContainer.style.opacity = "1";
blackscreen.style.opacity = "1";

DONT.style.opacity = "0";
BE.style.opacity = "0";
LIKE.style.opacity = "0";
BE2.style.opacity = "0";
LIKE2.style.opacity = "0";
I.style.opacity = "0";
N.style.opacity = "0";
S.style.opacity = "0";
T.style.opacity = "0";
E.style.opacity = "0";
A.style.opacity = "0";
D.style.opacity = "0";

// ---------------------------------------------

function set1() {
    let tl = gsap.timeline();
    tl
    .to(DONT, {
        duration: 0,
        opacity: 1,
    }, '+=0.1')
    .to(BE, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(LIKE, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to('.scene-1', {
        duration: 0,
        opacity: 0,
    }, '+=1')
    return tl;
};

function set2() {
    let tl = gsap.timeline();
    tl
    .to(BE2, {
        duration: 0,
        opacity: 1,
    }, "+=0.1")
    .to(LIKE2, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to('.scene-2', {
        duration: 0,
        opacity: 0,
    }, '+=1')
    return tl;
}

function set3() {
    let tl = gsap.timeline();
    tl
    .to(I, {
        duration: 0,
        opacity: 1,
    }, "+=0.1")
    .to(N, {
        duration: 0,
        opacity: 1,
    }, '+=0.5')
    .to(S, {
        duration: 0,
        opacity: 1,
    }, '+=0.5')
    .to(T, {
        duration: 0,
        opacity: 1,
    }, '+=0.5')
    .to(E, {
        duration: 0,
        opacity: 1,
    }, '+=0.5')
    .to(A, {
        duration: 0,
        opacity: 1,
    }, '+=0.5')
    .to(D, {
        duration: 0,
        opacity: 1,
    }, '+=0.5')
    .to('.scene-3', {
        duration: 0,
        opacity: 0,
    }, '+=1')
    return tl;
};


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
function blackfade() {
    let tl = gsap.timeline();
    tl
    .to(blackscreen, {
        opacity: 1,
        duration: 6,
    })
    return tl;
}


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 2 seconds of black
    .add(set1(), '2')
    .add(cutToViewer())
    // Stay on viewer for 3 seconds, then cut to black
    .add(blackout(), '+=3')
    // after 1 second on black, start Set2
    .add(set2(), '+=1')
    .add(cutToViewer(),)
    // Stay on viewer for 3 seconds, then cut to black
    .add(blackout(), '+=3')
    // after 1 second on black, start Set3
    .add(set3(), '+=1')
    .add(cutToViewer())
    // Stay on viewer for 3 seconds, then FADE to black
    .add(blackfade(), '+=3')
}
