//project specific scripts
const whitescreen = document.getElementById("whitescreen");
const overallText = document.getElementById("overall_text");
const first = document.getElementById("first");
const second = document.getElementById("second");
const secondFirst = document.getElementById("second-first");
const secondSecond = document.getElementById("second-second");

whitescreen.style.opacity = "1";
overallText.style.opacity = "1";
first.style.opacity = "0";
second.style.opacity = "1";
secondFirst.style.opacity = "0";
secondSecond.style.opacity = "0";

function set1() {
    let tl = gsap.timeline();
    tl
    .to(first, {
        duration: 3,
        opacity: 1,
    })
    .to(whitescreen, {
        duration: 5,
        opacity: 0,
    }, '+=2')
    .to(secondFirst, {
        duration: 2,
        opacity: 1,
    }, '+=5')
    .to(secondSecond, {
        duration: 2,
        opacity: 1,
    }, '+=5')
    .to(whitescreen, {
        duration: 0,
        opacity: 1,
    }, '+=5')
    .to(overallText, {
        duration: 0,
        opacity: 0,
    }, '<')
    return tl;
};


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 2 seconds of white
    .add(set1(), '+=2')
}
