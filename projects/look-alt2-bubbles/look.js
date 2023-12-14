//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const blackscreenLeft = document.getElementById("blackscreen-left");
const blackscreenRight = document.getElementById("blackscreen-right");
const whitescreen = document.getElementById("whitescreen");

camContainer.style.opacity = "1";
blackscreen.style.opacity = "0";

const vid = document.getElementById("vid");
vid.style.opacity = "0";

const I1 = document.getElementById("I1");
const DONT = document.getElementById("DONT");
const NEED = document.getElementById("NEED");
const BUT = document.getElementById("BUT");
const I2 = document.getElementById("I2");
const WANT = document.getElementById("WANT");
const ANYMORE = document.getElementById("ANYMORE");

// ---------------------

I1.style.opacity = "0";
DONT.style.opacity = "0";
NEED.style.opacity = "0";
BUT.style.opacity = "0";
I2.style.opacity = "0";
WANT.style.opacity = "0";
ANYMORE.style.opacity = "0";

whitescreen.classList.toggle("red-bg");
blackscreenLeft.classList.toggle("red-bg");
blackscreenRight.classList.toggle("red-bg");

const clock1 = document.getElementById("clockVid1");
const clock2 = document.getElementById("clockVid2");

clock1.style.opacity = "0";
clock2.style.opacity = "0";

function playClock(src) {
    src.style.transition = "opacity 3s";
    src.style.opacity = '0.35';
    src.play();
}
 

function set1() {
    let tl = gsap.timeline();
    tl
    .to(whitescreen, {
        duration: 0,
        opacity: 1,
    }, '+=0.1')
    .to(I1, {
        duration: 0,
        opacity: 1,
    })
    .to(DONT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(NEED, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(I1, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(whitescreen, {
        duration: 0,
        opacity: 1,
    }, '+=5')
    // Remove remaining text
    .to(DONT, {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(NEED, {
        duration: 0,
        opacity: 0,
    }, '<')
    return tl;
};

function set2() {
    let tl = gsap.timeline();
    tl
    .to(whitescreen, {
        duration: 0,
        opacity: 1,
    }, '+=0.1')
    .to(BUT, {
        duration: 0,
        opacity: 1,
    }, "+=0.5")
    .to(I2, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(WANT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(BUT, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '<')
    // Remove remaining text
    .to(I2, {
        duration: 0,
        opacity: 0,
    }, '+=5')
    .to(WANT, {
        duration: 0,
        opacity: 0,
    }, '<')
    // Remove Left and Right
    .to(blackscreenLeft, {
        duration: 1,
        width: 0,
        opacity: 0,
    }, '<')
    .to(blackscreenRight, {
        duration: 1,
        opacity: 0,
        width: 0,
    }, '<')
    .add(function() {
        whitescreen.classList.toggle("red-bg");
        blackscreenLeft.classList.toggle("red-bg");
        blackscreenRight.classList.toggle("red-bg");
    }, '+=1')
    return tl;
}

function set3() {
    let tl = gsap.timeline();
    tl
    .to(clock1, {
        duration: 0,
        opacity: 0,
    }, '+=0.1')
    .add(function() {
        clock1.style.transition = "opacity 0s linear";
    }, '<')
    .to(whitescreen, {
        duration: 0,
        opacity: 1,
    }, '<')
    .add(function() {
        whitescreen.classList.toggle("red-bg");
        blackscreenLeft.classList.toggle("red-bg");
        blackscreenRight.classList.toggle("red-bg");
    }, '<')
    // Add Back Left and Right
    .to(blackscreenLeft, {
        duration: 0,
        opacity: 1,
        width: "25%",
    }, '<')
    .to(blackscreenRight, {
        duration: 0,
        opacity: 1,
        width: "25%",
    }, '<')
    .to(I1, {
        duration: 0,
        opacity: 1,
    }, '+=2')
    .to(DONT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(WANT, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(I1, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(ANYMORE, {
        duration: 0,
        opacity: 1,
    }, '+=1.5')
    // Remove remaining text when adding ANYMORE
    .to(DONT, {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(WANT, {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(ANYMORE, {
        duration: 0,
        opacity: 0,
    }, '+=7')
    // Remove Left and Right
    .to(blackscreenLeft, {
        duration: 1,
        opacity: 0,
        width: 0,
    }, '<')
    .to(blackscreenRight, {
        duration: 1,
        opacity: 0,
        width: 0,
    }, '<')
    .add(function() {
        whitescreen.classList.toggle("red-bg");
        blackscreenLeft.classList.toggle("red-bg");
        blackscreenRight.classList.toggle("red-bg");
    }, '+=1')
    return tl;
};

function set4() {
    let tl = gsap.timeline();
    tl
    .to(clock2, {
        duration: 0,
        opacity: 0,
    }, '+=0.1')
    .add(function() {
        clock2.style.transition = "opacity 0s linear";
    }, '<')
    .to(whitescreen, {
        duration: 0,
        opacity: 1,
    }, '<')
    .add(function() {
        whitescreen.classList.toggle("blue-bg");
        blackscreenLeft.classList.toggle("blue-bg");
        blackscreenRight.classList.toggle("blue-bg");
        clock2.style.opacity = "0";
    }, '<')
    // Add Back Left and Right
    .to(blackscreenLeft, {
        duration: 0,
        opacity: 1,
        width: "25%",
    }, '<')
    .to(blackscreenRight, {
        duration: 0,
        opacity: 1,
        width: "25%",
    }, '<')
    .add(function() {
        BUT.classList.toggle("secondFont");
        I2.classList.toggle("secondFont");
        NEED.classList.toggle("secondFont");
    }, '<')
    .to(BUT, {
        duration: 0,
        opacity: 1,
    }, "+=2")
    .to(I2, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(NEED, {
        duration: 0,
        opacity: 1,
    }, '+=1')
    .to(BUT, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .to(whitescreen, {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(whitescreen, {
        duration: 0,
        opacity: 1,
        // timing here is the gap before the "blackout"
    }, '+=9')
    // Remove remaining text
    .to(I2, {
        duration: 0,
        opacity: 0,
    }, '<')
    .to(NEED, {
        duration: 0,
        opacity: 0,
    }, '<')
    .add(function() {
        whitescreen.classList.toggle("blue-bg");
        blackscreenLeft.classList.toggle("blue-bg");
        blackscreenRight.classList.toggle("blue-bg");
    }, '<')
    return tl;
}

function blackout() {
    let tl = gsap.timeline();
    tl
    .set(blackscreen, {
        opacity: 1,
        duration: 4,
    })
    return tl;
}
function flash() {
    let tl = gsap.timeline();
    tl
    .to(whitescreen, {
        opacity: 0,
        duration: 0.2,
    }, '+=1')
    .to(whitescreen, {
        opacity: 1,
        duration: 0.2
    }, '+=1')
    .to(whitescreen, {
        opacity: 0,
        duration: 0.2,
    }, '+=1')
    .to(whitescreen, {
        opacity: 1,
        duration: 0.2
    }, '+=1')
    .to(whitescreen, {
        opacity: 0,
        duration: 0.2,
    }, '+=1')
    .to(whitescreen, {
        opacity: 1,
        duration: 0.2
    }, '+=1')
    .to(whitescreen, {
        opacity: 0,
        duration: 0.2,
    }, '+=1')
    return tl;
}
function playVid() {
    vid.play();
    vid.style.transition = 'opacity 3s ease';
    // change back to 0.3 if we go back to first vid
    vid.style.opacity = '0.5';
}


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 2 seconds of white
    .add(set1(), '2')
    .add(set2(), '+=0.1')
    // .add(flash(), '+=0.1')
    .call(playClock, [clock1], '-=2')
    .add(set3(), '+=9')
    // .add(flash(), '+=0.1')
    .call(playClock, [clock2], '-=2')
    .add(set4(), '+=9')
    // fade to black after 8 seconds
    // .add(blackout(), '+=8')
}
