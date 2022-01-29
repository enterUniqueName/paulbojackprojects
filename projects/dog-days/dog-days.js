//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const whitescreen = document.getElementById("whitescreen");

const dog = document.getElementById("dog");
const days = document.getElementById("days");
const stripped = document.getElementById("stripped");
const of = document.getElementById("of");
const passion = document.getElementById("passion");
const we = document.getElementById("we");
const remain = document.getElementById("remain");
const naked = document.getElementById("naked");

blackscreen.style.opacity = "1";

dog.style.opacity = "0";
days.style.opacity = "0";
stripped.style.opacity = "0";
of.style.opacity = "0";
passion.style.opacity = "0";
we.style.opacity = "0";
remain.style.opacity = "0";
naked.style.opacity = "0";

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
    // below this line is specific to this project
    .set('.left-block', {
        opacity: 0,
        duration: 0,
    })
    .set('.right-block', {
        opacity: 0,
        duration: 0,
    })
    return tl;
}
function fadeToViewer() {
    let tl = gsap.timeline();
    tl
    .to(blackscreen, {
        opacity: 0,
        duration: 5,
    })
    .to('.center-block', {
        opacity: 0,
        duration: 5,
    }, '<')
    return tl;
}
function blackFade() {
    let tl = gsap.timeline();
    tl
    .to(blackscreen, {
        opacity: 1,
        duration: 3,
    })
    .to(tunnelVid, {
        opacity: 0,
        duration: 3,
    }, '<')
    return tl;
}
function set1() {
    let tl = gsap.timeline();
    tl
    .to(dog, {
        duration: 3,
        opacity: 1,
    })
    .to(days, {
        duration: 3,
        opacity: 1,
    }, '-=1')
    return tl;
};
function set2() {
    let tl = gsap.timeline();
    tl
    .to(stripped, {
        duration: 3,
        opacity: 1,
    })
    .to(of, {
        duration: 3,
        opacity: 1,
    }, '-=1')
    .to(passion, {
        duration: 3,
        opacity: 1,
    }, '-=1')
    return tl;
};
function set3() {
    let tl = gsap.timeline();
    tl
    .to(we, {
        duration: 3,
        opacity: 1,
    })
    .to(remain, {
        duration: 3,
        opacity: 1,
    }, "<")
    .to(naked, {
        duration: 3,
        opacity: 1,
    }, "<")
    return tl;
};


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 2 seconds of black
    .add(set1(), '2')
    // 2 second gap
    .add(set2(), '+=2')
    // 2 second gap
    .add(cutToViewer(), '+=2')
    // 3 seconds on viewer
    .add(blackout(), '+=3')
    // 2 second gap
    .add(set3(), '+=2')
    // 3 second gap
    .add(fadeToViewer(), '+=3')
    // 3 second gap
    .add(blackout(), '+=3')
}
