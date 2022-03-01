//project specific scripts

const camContainer = document.getElementById("cam_container");
const blackscreen = document.getElementById("blackscreen");
const whitescreen = document.getElementById("whitescreen");
const audioTrack1 = document.getElementById("audioTrack1");
const audioTrack2 = document.getElementById("audioTrack2");
const tunnelVid = document.getElementById("tunnelVid");

blackscreen.style.opacity = "1";
tunnelVid.style.opacity = "0";

// function set1() {
//     let tl = gsap.timeline();
//     tl
//     .to(I, {
//         duration: 0.1,
//         opacity: 1,
//     })
//     .to(I, {
//         duration: 0,
//         opacity: 0,
//     }, '+=1')
//     .to(DONT, {
//         duration: 0,
//         opacity: 1,
//     }, '+=1')
//     .to(DONT, {
//         duration: 0,
//         opacity: 0,
//     }, '+=1')
//     .to(NEED, {
//         duration: 0,
//         opacity: 1,
//     }, '+=1')
//     .to(NEED, {
//         duration: 0,
//         opacity: 0,
//     }, '+=1')
//     .to('#overall_text', {
//         duration: 0,
//         opacity: 0,
//     }, '+=1')
//     .to(whitescreen, {
//         duration: 0,
//         opacity: 0,
//     }, '<')
//     return tl;
// };
function playTrack1() {
    audioTrack1.play();
}
function playTrack2() {
    audioTrack2.play();
}
function playTunnelVid() {
    tunnelVid.play();
    tunnelVid.style.transition = 'opacity 0.5s ease';
    tunnelVid.style.opacity = '0.2';
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
function cutToViewer() {
    let tl = gsap.timeline();
    tl
    .set(blackscreen, {
        opacity: 0,
        duration: 0,
    })
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


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 2 seconds of black
    .call(playTrack1, [], '2')
    .add(cutToViewer(), '+=3.5') //2.5 seconds for audio, plus one second pause on black before cutting to viewer.
    .add(blackout(), '+=1')
    .add(cutToViewer(), '+=0.1')
    .add(blackout(), '+=1')
    .add(cutToViewer(), '+=0.1')
    .add(blackout(), '+=1')
    .add(cutToViewer(), '+=0.1')
    .add(blackout(), '+=1')
    .add(cutToViewer(), '+=0.1')
    .add(blackout(), '+=1')
    .add(cutToViewer(), '+=0.1')
    .add(blackout(), '+=1')
    .call(playTrack2, [], '<')
    .add(cutToViewer(), '+=5.75') //4.75 seconds for audio, plus one second pause on black before cutting to viewer.
    .call(playTunnelVid, [], '+=1')
    .add(blackFade(), '+=10')
}
