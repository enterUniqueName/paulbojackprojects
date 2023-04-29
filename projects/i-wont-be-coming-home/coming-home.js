//project specific scripts

const camContainer = document.getElementById("cam_container");

const blackscreen = document.getElementById("blackscreen");
const text = document.getElementById("overall_text");

const fuck = document.getElementById("FUCK");
const like1 = document.getElementById('LIKE1');
const think = document.getElementById("THINK");
const like2 = document.getElementById('LIKE2');
const and = document.getElementById('AND');

const vid1 = document.getElementById("VID1");
const vid2 = document.getElementById("VID2");
const vid3 = document.getElementById("VID3");
const vid4 = document.getElementById("VID4");
const vid5 = document.getElementById("VID5");
const vid6 = document.getElementById("VID6");

blackscreen.style.opacity = "1";
vid1.style.opacity = "0";
vid2.style.opacity = "0";
vid3.style.opacity = "0";
vid4.style.opacity = "0";
vid5.style.opacity = "0";
vid6.style.opacity = "0";
fuck.style.opacity = "0";
like1.style.opacity = "0";
think.style.opacity = "0";
like2.style.opacity = "0";
and.style.opacity = "0";

function master_animation() {
    let tl = gsap.timeline();
    tl
    .add(function() {
        text.classList.toggle("font-one");
    })
    .to(fuck, {
        duration: 0.2,
        opacity: 1,
    }, '+=1')
    .to(like1, {
        duration: 0.2,
        opacity: 1,
    }, '+=1')
    .add(function() {
        vid1.play();
    }, '+=1')
    .to(vid1, {
        opacity: 1,
        duration: 0,
    })
    .to(fuck, {
        opacity: 0,
        duration: 0,
    }, '<')
    .to(like1, {
        opacity: 0,
        duration: 0,
    }, '<')
    // -----
    .to(vid1, {
        opacity: 0,
        duration: 0,
    }, `+=${vid1.duration}`)
    .to(and, {
        opacity: 1,
        duration: 0,
    }, '<')
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    }, '+=1.5')
    .to(and, {
        opacity: 0,
        duration: 0,
    }, '<')
    // 3.5 seconds on viewer
    .to(blackscreen, {
        opacity: 1,
        duration: 0,
    }, '+=3.5')
    .to(and, {
        opacity: 1,
        duration: 0,
    }, '+<')
    .add(function() {
        vid2.play();
    }, '+=1.5')
    .to(vid2, {
        opacity: 1,
        duration: 0,
    })
    .to(and, {
        opacity: 0,
        duration: 0,
    }, '<')
    // -----
    .to(vid2, {
        opacity: 0,
        duration: 0,
    }, `+=${vid2.duration}`)
    .to(blackscreen, {
        opacity: 1,
        duration: 0,
    }, '<')
    // --------------------
    .add(function() {
        text.classList.toggle("font-one");
        text.classList.toggle("font-two")
    })
    .to(think, {
        duration: 0.2,
        opacity: 1,
    }, '+=3')
    .to(like2, {
        duration: 0.2,
        opacity: 1,
    }, '+=1')
    .add(function() {
        vid3.play();
    }, '+=1')
    .to(vid3, {
        opacity: 1,
        duration: 0,
    }, '<')
    .to(think, {
        opacity: 0,
        duration: 0,
    }, '<')
    .to(like2, {
        opacity: 0,
        duration: 0,
    }, '<')
    // -----
    .to(vid3, {
        opacity: 0,
        duration: 0,
    }, `+=${vid3.duration}`)
    .to(and, {
        opacity: 1,
        duration: 0.2,
    }, '<')
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    }, '+=1.5')
    .to(and, {
        opacity: 0,
        duration: 0,
    }, '<')
    // 3.5 seconds on viewer
    .to(blackscreen, {
        opacity: 1,
        duration: 0,
    }, '+=3.5')
    .to(and, {
        opacity: 1,
        duration: 0,
    }, '<')
    .add(function() {
        vid4.play();
    }, '+=1.5')
    .to(vid4, {
        opacity: 1,
        duration: 0,
    })
    .to(and, {
        opacity: 0,
        duration: 0,
    }, '<')
    // -----
    .to(vid4, {
        opacity: 0,
        duration: 0,
    }, `+=${vid4.duration}`)
    // 3 second dissolve to viewer
    .to(blackscreen, {
        opacity: 0,
        duration: 3,
    }, '<')
    .add(function() {
        vid5.play();
    }, '-=3')
    .to(vid5, {
        opacity: 0.3,
        duration: 3,
    }, '<')
    .add(function() {
        vid6.play();
    })
    .to(vid6, {
        opacity: 0.3,
        duration: 3,
    }, '<')
    // -----
    .to(vid5, {
        opacity: 0,
        duration: 5,
    }, '+=5')
    .to(vid6, {
        opacity: 0,
        duration: 5,
    }, '<')
    .to(blackscreen, {
        opacity: 1,
        duration: 5,
    }, '<')
    return tl;
};
