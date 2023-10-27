//project specific scripts

const camContainer = document.getElementById("cam_container");

const background = document.getElementById("background");
const text = document.getElementById("overall_text");

const i = document.getElementById("I");
const was = document.getElementById('WAS');
const mugged = document.getElementById("MUGGED");
const by = document.getElementById('BY');
const a = document.getElementById('A');
const an = document.getElementById('AN');
const white = document.getElementById('WHITE');
const black = document.getElementById('BLACK');
const hispanic = document.getElementById('HISPANIC');
const asian = document.getElementById('ASIAN');
const guy = document.getElementById('GUY');
const period = document.getElementById('PERIOD');

background.style.opacity = "1";

const allText = [
    i, was, mugged, by, a, an, white, black, hispanic, asian, guy, period
]

function hideText() {
    for (var c = 0; c < allText.length; c++) {
        var selectedText = allText[c];

        selectedText.style.opacity = '0';
        selectedText.style.display = 'none';
    }
}

hideText();

function toggleClass(a, b) {
    a.classList.toggle(b);
}

function cutToViewer() {
    background.opacity = "0";
}
 
function muggedPattern() {
    let tl = gsap.timeline();
    tl
    .call(toggleClass, [background, 'fill-black'])
    .to(background, {
        duration: 1,
        opacity: 1,
    })
    .to(i, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, '+=1')
    .to(was, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, '+=0.5')
    .to(mugged, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, '+=0.5')
    .to(background, {
        duration: 0,
        opacity: 0,
    }, '+=1')
    .call(hideText,[], '<')
    return tl;
}

function perpPattern(byPause, articlePause, article, ethnicity) {
    let tl = gsap.timeline();
    tl
    .call(toggleClass, [background, 'fill-black'])
    .to(background, {
        duration: 0,
        opacity: 1,
    }, '+=0.1')
    .to(by, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, '+=0.5')
    .to(article, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, byPause)
    .to(ethnicity, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
        // 2 second pause after article before ethnicity
    }, articlePause)
    .to(guy, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, '+=0.5')
    .to(background, {
        duration: 0,
        opacity: 0,
        // 1 second pause before wiping the text and background
    }, '+=1')
    .call(hideText,[], '<')
    return tl;
}

function finalPattern() {
    let tl = gsap.timeline();
    tl
    .call(toggleClass, [background, 'fill-black'])
    .to(background, {
        duration: 1,
        opacity: 1,
    })
    .to(i, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, '+=1')
    .to(was, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, '+=0.5')
    .to(mugged, {
        display: 'block',
        duration: 0.5,
        opacity: 1,
    }, '+=0.5')
    .to(period, {
        display: 'block',
        opacity: 1,
        duration: 0.5,
    }, "+=3.5")
    .to(background, {
        duration: 0.1,
        opacity: 0,
    }, '+=1')
    .call(hideText,[], '<')
    .to(background, {
        duration: 0.1,
        opacity: 1,
        background: '#000000',
    }, '+=4')
    return tl;
}


function master_animation() {
    let tl = gsap.timeline();
    tl
    .add(muggedPattern)
    .add(perpPattern('+=0.5', '+=2', a, white), "+=11")
    .add(muggedPattern, "+=5")
    .add(perpPattern('+=0.5', '+=2', a, black), "+=11")
    .add(muggedPattern, "+=5")
    .add(perpPattern('+=0.5', '+=2', a, hispanic), "+=11")
    .add(muggedPattern, "+=5")
    .add(perpPattern('+=2', '+=0.5', an, asian), "+=11")
    .add(finalPattern, "+=5")
    return tl;
};
