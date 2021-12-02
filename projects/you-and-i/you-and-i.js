//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const whitescreen = document.getElementById("whitescreen");

camContainer.style.opacity = "1";
blackscreen.style.opacity = "0";

const I = document.getElementById("I");
const DONT = document.getElementById("DONT");
const NEED = document.getElementById("NEED");

I.style.opacity = "0";
DONT.style.opacity = "0";
NEED.style.opacity = "0";

function story() {
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
    .add(story(), '3')
    .add(blackout(), '+=3')
}
