//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const whitescreen = document.getElementById("whitescreen");

camContainer.style.opacity = "1";
blackscreen.style.opacity = "0";

const vid = document.getElementById("vid");
vid.style.opacity = "0";

const I = document.getElementById("I");
const DONT = document.getElementById("DONT");
const NEED = document.getElementById("NEED");
const BUT = document.getElementById("BUT");
const WANT = document.getElementById("WANT");
const ANY = document.getElementById("ANY");
const MORE = document.getElementById("MORE");

const fadeWant = document.getElementById("fadeWant");
const fadeNeed = document.getElementById("fadeNeed");



I.style.opacity = "0";
DONT.style.opacity = "0";
NEED.style.opacity = "0";
BUT.style.opacity = "0";
WANT.style.opacity = "0";
fadeWant.style.opacity = "0";
fadeNeed.style.opacity = "0";
ANY.style.opacity = "0";
MORE.style.opacity = "0";


function set1() {
    let tl = gsap.timeline();
    tl
    .add(function() {
        I.classList.toggle("fontDown");
        DONT.classList.toggle("fontDown");
        NEED.classList.toggle("fontDown");
    })
    .to(I, {
        duration: 0.1,
        opacity: 1,
    }, '<')
    .to(I, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(DONT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(DONT, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(NEED, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(NEED, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to('#overall_text', {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '<')
    .add(function() {
        I.classList.toggle("fontDown");
        DONT.classList.toggle("fontDown");
        NEED.classList.toggle("fontDown");
    }, '<')
    return tl;
};

function set2() {
    let tl = gsap.timeline();
    tl
    .set(whitescreen, {
        duration: 0,
        opacity: 1,
    })
    .set('#overall_text', {
        duration: 0,
        opacity: 1,
    }, '<')
    .add(function() {
        BUT.classList.toggle("fontUp");
        I.classList.toggle("fontUp");
        WANT.classList.toggle("fontUp");
    }, '<')
    .to(BUT, {
        duration: 0.1,
        opacity: 1,
    }, "+=0.5")
    .to(BUT, {
        duration: 0,
        opacity: 0
    }, '+=1')
    .to(I, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(I, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    // .to(fadeWant, {
    //     duration: 3,
    //     opacity: 1,
    // }, '+=1')
    // .to(fadeWant, {
    //     duration: 0,
    //     opacity: 0,
    // }, '+=1')
    .to(WANT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(WANT, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to('#overall_text', {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .add(function() {
        BUT.classList.toggle("fontUp");
        I.classList.toggle("fontUp");
        WANT.classList.toggle("fontUp");
    }, '<')
    return tl;
}

function set3() {
    let tl = gsap.timeline();
    tl
    .set(whitescreen, {
        duration: 0,
        opacity: 1,
    })
    .set('#overall_text', {
        duration: 0,
        opacity: 1,
    }, '<')
    .set(vid, {
        duration: 0,
        opacity: 0,
    }, '<')
    .add(function() {
        I.classList.toggle("fontDown");
        DONT.classList.toggle("fontDown");
        WANT.classList.toggle("fontDown");
    }, '<')
    .to(I, {
        duration: 0,
        opacity: 1,
    }, "+=0.5")
    .to(I, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(DONT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(DONT, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(WANT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(WANT, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to('#overall_text', {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '<')
    .add(function() {
        I.classList.toggle("fontDown");
        DONT.classList.toggle("fontDown");
        WANT.classList.toggle("fontDown");
    }, '<')
    return tl;
};

function set3_5() {
    let tl = gsap.timeline();
    tl
    .set(whitescreen, {
        duration: 0,
        opacity: 1,
    })
    .set('#overall_text', {
        duration: 0,
        opacity: 1,
    }, '<')
    .add(function() {
        ANY.classList.toggle("fontDown");
        MORE.classList.toggle("fontDown");
    }, '<')
    .to(ANY, {
        duration: 0,
        opacity: 1,
    }, "+=0.5")
    .to(ANY, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(MORE, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(MORE, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to('#overall_text', {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '<')
    .add(function() {
        ANY.classList.toggle("fontDown");
        MORE.classList.toggle("fontDown");
    }, '<')
    return tl;
};

function set4() {
    let tl = gsap.timeline();
    tl
    .set(whitescreen, {
        duration: 0,
        opacity: 1,
    })
    .set('#overall_text', {
        duration: 0,
        opacity: 1,
    }, '<')
    .add(function() {
        BUT.classList.toggle("fontDownDouble");
        I.classList.toggle("fontDownDouble");
        NEED.classList.toggle("fontDownDouble");
    }, '<')
    .to(BUT, {
        duration: 0.1,
        opacity: 1,
    }, "+=0.5")
    .to(BUT, {
        duration: 0,
        opacity: 0
    }, '+=1')
    .to(I, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(I, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    // .to(fadeNeed, {
    //     duration: 3,
    //     opacity: 1,
    // }, '+=1')
    // .to(fadeNeed, {
    //     duration: 0,
    //     opacity: 0,
    // }, '+=1')
    .to(NEED, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(NEED, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to('#overall_text', {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .add(function() {
        BUT.classList.toggle("fontDownDouble");
        I.classList.toggle("fontDownDouble");
        NEED.classList.toggle("fontDownDouble");
    }, '<')
    return tl;
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
function playVid() {
    vid.play();
    vid.style.transition = 'opacity 0.5s ease';
    vid.style.opacity = '0.5';
}


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 2 seconds of white
    .add(set1(), '2')
    .add(set2(), '+=3')
    .call(playVid, [], '+=3')
    .add(set3(), '+=6')
    .add(set3_5(), '+=1.5')
    .add(set4(), '+=3')
    .add(blackout(), '+=4')
}
