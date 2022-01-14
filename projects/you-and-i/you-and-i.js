//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const whitescreen = document.getElementById("whitescreen");

camContainer.style.opacity = "1";
blackscreen.style.opacity = "0";

const I = document.getElementById("I");
const DONT = document.getElementById("DONT");
const NEED = document.getElementById("NEED");
const BUT = document.getElementById("BUT");
const IWANT = document.getElementById("IWANT");
const WANT = document.getElementById("WANT");
const INEED = document.getElementById("INEED");

const fadeWant = document.getElementById("fadeWant");
const fadeNeed = document.getElementById("fadeNeed");



I.style.opacity = "0";
DONT.style.opacity = "0";
NEED.style.opacity = "0";
BUT.style.opacity = "0";
IWANT.style.opacity = "0";
WANT.style.opacity = "0";
INEED.style.opacity = "0";

function set1() {
    let tl = gsap.timeline();
    tl
    .to(I, {
        duration: 0.1,
        opacity: 1,
    })
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
    .to(BUT, {
        duration: 0.1,
        opacity: 1,
    }, "+=0.5")
    .to(BUT, {
        duration: 0,
        opacity: 0
    }, '+=1')
    .to(IWANT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(fadeWant, {
        duration: 3,
        opacity: 1,
    }, '+=1')
    .to(IWANT, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(fadeWant, {
        duration:0,
        opacity: 0,
    }, '<')
    .to('#overall_text', {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
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
    .to(BUT, {
        duration: 0.1,
        opacity: 1,
    }, "+=0.5")
    .to(BUT, {
        duration: 0,
        opacity: 0
    }, '+=1')
    .to(INEED, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(fadeNeed, {
        duration: 3,
        opacity: 1,
    }, '+=1')
    .to(INEED, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(fadeNeed, {
        duration:0,
        opacity: 0,
    }, '<')
    .to('#overall_text', {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
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


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 3 seconds of white
    .add(set1(), '3')
    .add(set2(), '+=3')
    .add(set3(), '+=3')
    .add(set4(), '+=3')
    .add(blackout(), '+=4')
}
