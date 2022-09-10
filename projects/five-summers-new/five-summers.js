//project specific scripts
// const whitescreen = document.getElementById("whitescreen");
const blackscreen = document.getElementById("blackscreen");
const overallText = document.getElementById("overall_text");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

// ----------------------------------------------

const animateWord = 3;
const animateGapLong = '+=1';
const holdTextBeforeCut = '+=4';
const holdOnViewerBeforeFade = '+=5';
const holdOnBlack = '+=10';
const holdOnViewerBeforeFlash = '+=4';
const flashGap = '+=3';
const holdOnViewerBeforeCut = '+=1';

// whitescreen.style.opacity = "1";
blackscreen.style.opacity = "1";
overallText.style.opacity = "1";

one.style.opacity = "0";
two.style.opacity = "0";
three.style.opacity = "0";
four.style.opacity = "0";
five.style.opacity = "0";


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
        opacity: 0.5,
        duration: 5,
    }, holdOnViewerBeforeFade)
    .to(blackscreen, {
        opacity: 0,
        duration: 3,
    }, holdOnBlack)

    // ----------
    // Flashing Black - 4 flashes
    .to(blackscreen, {
        opacity: 1,
        duration: 0.1,
    }, holdOnViewerBeforeFlash)
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    })

    .to(blackscreen, {
        opacity: 1,
        duration: 0.1,
    }, flashGap)
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    })

    .to(blackscreen, {
        opacity: 1,
        duration: 0.1,
    }, flashGap)
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    })

    .to(blackscreen, {
        opacity: 1,
        duration: 0.1,
    }, flashGap)
    .to(blackscreen, {
        opacity: 0,
        duration: 0,
    })

    // ----------
    // hold on viewer 1s then cut to black
    .to(blackscreen, {
        opacity: 1,
        duration: 0,
    }, holdOnViewerBeforeCut)

    
    // ----------
    // Always have return statement here
    return tl;
};


//master fade function
function master_animation() {
    let mastertl = gsap.timeline();
    mastertl
    // Start after 1 seconds of black
    .add(set1(), '+=2')
}
