//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");

camContainer.style.opacity = "1";
blackscreen.style.opacity = "1";

function cardOne() {
    let tl = gsap.timeline();
    tl
    .to('#cherish-bright', {
        duration: 3,
        opacity: 1,
    })
    .to('#every', {
        duration: 3,
        opacity: 1,
    })
    .to('#moment', {
        duration: 3,
        opacity: 1,
    })
    .to('#cherish-bright', {
        duration: 3,
        opacity: 0,
    })
    .to('#cherish-dark', {
        duration: 3,
        opacity: 1,
    }, '<')
    .to('.card.one', {
        opacity: 0,
        duration: 3,
    }, "+=1")
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    })
    return tl;
};
function cardTwo() {
    let tl = gsap.timeline();
    tl
    .set(blackscreen, {
        opacity: 1,
        duration: 0,
    })
    .to('#except-bright', {
        duration: 3,
        opacity: 1,
    }, '+=1')
    .to('#that', {
        duration: 3,
        opacity: 1,
    })
    .to('#one', {
        duration: 3,
        opacity: 1,
    })
    .to('#except-bright', {
        duration: 3,
        opacity: 0,
    })
    .to('#except-dark', {
        duration: 3,
        opacity: 1,
    }, '<')
    .to('.card.two', {
        opacity: 0,
        duration: 3,
    }, "+=1")
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    })
    return tl;
};
function cardThree() {
    let tl = gsap.timeline();
    tl
    .set(blackscreen, {
        opacity: 1,
        duration: 0,
    })
    .to('#afew', {
        duration: 2,
        opacity: 1,
    }, '+=1')
    .to('#and', {
        duration: 2,
        opacity: 1,
    })
    .to('#comma', {
        duration: 2,
        opacity: 1,
    })
    .to('#maybe', {
        duration: 2,
        opacity: 1,
    })
    .to('#others', {
        duration: 2,
        opacity: 1,
    }, '+=1')
    .to('.card.three', {
        opacity: 0,
        duration: 3,
    }, "+=2")
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    })
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
    .add(cardOne(), '2')
    .add(cardTwo(), '+=3')
    .add(cardThree(), '+=3')
    .add(blackout(), '+=3')
}
