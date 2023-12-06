//project specific scripts
// const whitescreen = document.getElementById("whitescreen");
const blackscreen = document.getElementById("blackscreen");
const overallText = document.getElementById("overall_text");

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const a1 = document.getElementById("a1");
const b1 = document.getElementById("b1");
const c1 = document.getElementById("c1");
const d1 = document.getElementById("d1");

const a2 = document.getElementById("a2");
const b2 = document.getElementById("b2");
const c2 = document.getElementById("c2");
const d2 = document.getElementById("d2");
const e2 = document.getElementById("e2");
const f2 = document.getElementById("f2");

const a3 = document.getElementById("a3");
const b3 = document.getElementById("b3");
const c3 = document.getElementById("c3");
const d3 = document.getElementById("d3");

// ----------------------------------------------

const animateWordOne = 1;
const animateWordOnePointTwo = 1.2;
const animateWordOnePointFive = 1.5;
const animateWordTime = 2.2;
const slowAnimateWordTime = 1.5;

// whitescreen.style.opacity = "1";
blackscreen.style.opacity = "1";
overallText.style.opacity = "1";

first.style.opacity = "1";
second.style.opacity = "1";
third.style.opacity = "1";

a1.style.opacity = "0";
b1.style.opacity = "0";
c1.style.opacity = "0";
d1.style.opacity = "0";

a2.style.opacity = "0";
b2.style.opacity = "0";
c2.style.opacity = "0";
d2.style.opacity = "0";
e2.style.opacity = "0";
f2.style.opacity = "0";

a3.style.opacity = "0";
b3.style.opacity = "0";
c3.style.opacity = "0";
d3.style.opacity = "0";


// ----------------------------------------------

function set1() {
    let tl = gsap.timeline();
    tl
    .to(a1, {
        duration: animateWordOne,
        opacity: 1,
    })
    .to(b1, {
        duration: animateWordOnePointFive,
        opacity: 1,
    })
    .to(c1, {
        duration: animateWordOnePointFive,
        opacity: 1,
    })
    // 1 second pause between "you" and "transparent"
    .to(d1, {
        duration: animateWordTime,
        opacity: 1,
    }, '+=1')
    // -----
    .to(a2, {
        duration: animateWordOnePointTwo,
        opacity: 1,
    }, "+=2")
    .to(b2, {
        duration: animateWordOnePointTwo,
        opacity: 1,
    })
    .to(c2, {
        duration: animateWordTime,
        opacity: 1,
    })
    .to(d2, {
        duration: animateWordOnePointTwo,
        opacity: 1,
    })
    .to(e2, {
        duration: animateWordOnePointTwo,
        opacity: 1,
    })
    .to(f2, {
        duration: 3,
        opacity: 1,
    })
    // ----- hold for 4 seconds, then 3 second fade to viewer (fade text at same time)
    .to(blackscreen, {
        opacity: 0,
        duration: 3,
    }, '+=4')
    .to(overallText, {
        duration: 3,
        opacity: 0,
    }, '<')
    // ----- hold for three seconds on viewer before fading text/black back up
    .to(blackscreen, {
        opacity: 1,
        duration: 3,
    }, "+=3")
    .to(overallText, {
        duration: 3,
        opacity: 1,
    }, '<')
    // ----- wait a second then fade out both sets
    .to(first, {
        opacity: 0,
        duration: 3,
    }, "+=1")
    .to(second, {
        opacity: 0,
        duration: 3,
    }, "<")
    // -----
    .to(a3, {
        duration: animateWordOnePointTwo,
        opacity: 1,
    }, "+=2")
    .to(b3, {
        duration: animateWordTime,
        opacity: 1,
    })
    .to(c3, {
        duration: animateWordOnePointFive,
        opacity: 1,
    })
    .to(d3, {
        duration: 3,
        opacity: 1,
    })
    // ----- hold on these for 6.5 seconds, then 5 second dissolve to half dark screen
    .to(blackscreen, {
        opacity: 0.75,
        duration: 5,
    }, "+=6.5")
    .to(third, {
        duration: 5,
        opacity: 0,
    }, '<')
    // ----- hold on viewer and half dark for 5 seconds then cut to black
    .to(blackscreen, {
        opacity: 1,
        duration: 0,
    }, "+=5")
    return tl;
};


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 2 seconds of black
    .add(set1(), '+=2')
}
