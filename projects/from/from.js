//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");

camContainer.style.opacity = "1";
blackscreen.style.opacity = "0";

const I = document.getElementById('I');
const GREW = document.getElementById('GREW');
const UP = document.getElementById('UP');
const IN = document.getElementById('IN');

I.style.opacity = "0";
GREW.style.opacity = "0";
UP.style.opacity = "0";
IN.style.opacity = "0";

const DALLAS = document.getElementById('DALLAS');
const ATLANTA = document.getElementById('ATLANTA');
const HUNTSVILLE = document.getElementById('HUNTSVILLE');
const MUNICH = document.getElementById('MUNICH');
const MADRID = document.getElementById('MADRID');

DALLAS.style.opacity = "0";
ATLANTA.style.opacity = "0";
HUNTSVILLE.style.opacity = "0";
MUNICH.style.opacity = "0";
MADRID.style.opacity = "0";

function border() {
    let tl = gsap.timeline();
    tl
    .to('#border', {
        duration: 2,
        borderTopWidth:15,
        borderRightWidth:15,
        borderBottomWidth:15, 
        borderLeftWidth:15,
    })
    .to('#project_container', {
        duration: 2,
        borderTopWidth:10,
        borderRightWidth:10,
        borderBottomWidth:10, 
        borderLeftWidth:10,
    }, '<-=0.5')
    return tl;
};
function text(el) {
    let tl = gsap.timeline();
    tl
    .to(I, {
        opacity: 1,
        duration: 2,
    })
    .to(GREW, {
        opacity: 1,
        duration: 2,
    })
    .to(UP, {
        opacity: 1,
        duration: 2,
    })
    .to(IN, {
        opacity: 1,
        duration: 2,
    })
    .to(I, {
        opacity: 0,
        duration: 2,
    }, '+=2')
    .to(GREW, {
        opacity: 0,
        duration: 2,
    }, '<')
    .to(UP, {
        opacity: 0,
        duration: 2,
    }, '<')
    .to(IN, {
        opacity: 0,
        duration: 2,
    }, '<')
    .to(el, {
        opacity: 1,
        duration: 2,
    })
    return tl;
}

function backToViewer() {
    let tl = gsap.timeline();
    tl
    .to(blackscreen, {
        opacity: 0,
        duration: 3,
    })
    return tl;
}

function blackout(el) {
    let tl = gsap.timeline();
    tl
    .to(blackscreen, {
        opacity: 1,
        duration: 3,
    })
    .to(el, {
        opacity: 0,
        duration: 0,
    })
    return tl;
}


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    .add(border(), '3')
    .add(text(DALLAS))
    .add(blackout(DALLAS), '+=3')
    .add(backToViewer(), '+=3')
    .add(text(ATLANTA))
    .add(blackout(ATLANTA), '+=3')
    .add(backToViewer(), '+=3')
    .add(text(HUNTSVILLE))
    .add(blackout(HUNTSVILLE), '+=3')
    .add(backToViewer(), '+=3')
    .add(text(MUNICH))
    .add(blackout(MUNICH), '+=3')
    .add(backToViewer(), '+=3')
    .add(text(MADRID))
    .add(blackout(MADRID), '+=3')
    // .add(backToViewer(), '+=3')
}
