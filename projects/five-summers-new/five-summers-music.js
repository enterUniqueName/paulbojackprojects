//project specific scripts
// const whitescreen = document.getElementById("whitescreen");
const blackscreen = document.getElementById("blackscreen");
const overallText = document.getElementById("overall_text");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const audioTrack = document.getElementById("audioTrack");

// audioTrack.load();

// ----------------------------------------------

const animateWord = 3;
const animateGapLong = '+=1';
const holdTextBeforeCut = '+=4';
const holdOnViewerBeforeFade = '+=5';
const holdOnBlack = '+=10';
const holdOnViewerBeforeFlash = '+=4';
const flashDuration = "+=2";
const flashGap = '+=2';
const holdOnViewerBeforeCut = '+=1';
const onesec = '+=1';

// whitescreen.style.opacity = "1";
blackscreen.style.opacity = "1";
overallText.style.opacity = "1";

one.style.opacity = "0";
two.style.opacity = "0";
three.style.opacity = "0";
four.style.opacity = "0";
five.style.opacity = "0";

// Function for Flash
function blackFlash(a, b) {
    let tl = gsap.timeline();
    tl
    .to(blackscreen, {
        opacity: 1,
        duration: 0,
    }, a)
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    }, b)
    return tl;
}
// Function for Music
function playTrack() {
    audioTrack.play();
}


// ----------------------------------------------

function set1() {
    let tl = gsap.timeline();
    tl
    .to(one, {
        duration: animateWord,
        opacity: 1,
    })
    .to(two, {
        duration: animateWord,
        opacity: 1,
    })
    .to(three, {
        duration: animateWord,
        opacity: 1,
    })
    .to(four, {
        duration: animateWord,
        opacity: 1,
    })
    .to(five, {
        duration: animateWord,
        opacity: 1,
    }, animateGapLong)
    
    // ----------
    // Cut to Viewer
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    }, holdTextBeforeCut)
    .to(overallText, {
        duration: 0,
        opacity: 0,
    }, '<')

    // ----------
    // 5s fade to half black, hold 10 on half black, 3s to 0 black, then cut to black
    .to(blackscreen, {
        opacity: 0.75,
        duration: 5,
    }, holdOnViewerBeforeFade)
    .to(blackscreen, {
        opacity: 0,
        duration: 3,
    }, holdOnBlack)

    // ----------
    // Flashing half Black - 46 seconds of flashing
    .add(blackFlash(holdOnViewerBeforeFlash, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))
    .add(blackFlash(flashGap, flashDuration))

    // ----------
    // Flashing half black - 1s on 1s off - 12s of flashing
    .add(blackFlash(onesec, onesec))
    .add(blackFlash(onesec, onesec))
    .add(blackFlash(onesec, onesec))
    .add(blackFlash(onesec, onesec))
    .add(blackFlash(onesec, onesec))
    .add(blackFlash(onesec, onesec))
    // abrubt cut to black
    .to(blackscreen, {
        opacity: 1,
        duration: 0,
    })

    
    // ----------
    // Always have return statement here
    return tl;
};


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 2 seconds of black
    .call(playTrack, [], '2')
    .add(set1(), '+=2.324')
}
