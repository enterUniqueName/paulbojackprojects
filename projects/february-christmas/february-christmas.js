//project specific scripts

const blackscreen = document.getElementById("blackscreen");
const treeVid = document.getElementById("treeVid");
const handsOldVid = document.getElementById("handsOldVid");
const bloodVid = document.getElementById("bloodVid");
const handsYoungVid = document.getElementById("handsYoungVid");
const iceVid = document.getElementById("iceVid");

// const vidOpacity = "0.5";
const vidOpacity = "0.65";

// Global Timing
const fade = 3000;
const viewerOnScreen = 2000;

// Video Times
// NOTES ON VIDEOS
// Gotta edit the videos.
//     - Tree vid - start at 2 second mark, run until end (edit down for even timing)
const treeVidTime = 13000 - fade;
//     - Old Hands video has to edit - stretch the first two frames of old hands into 6 total seconds.
const handsOldVidTime = 6000 - fade;
//     - Blood video starts at 13 second mark, and runs until the end (edit down for even timing)
const bloodVidTime = 12000 - fade;
//     - Young hands video is the same hands video but edit down - start at 4s end at 14s
const handsYoungVidTime = 10000 - fade - fade;
// Ice video is the only one with no edits, but add 4s to hold at the end
const iceVidTime = 5000 + 4000;

// Start
// Stay on viewer for 4 seconds
const openingScene = 4000;
// Start the Tree Video Fade after 4s on Viewer Opening Scene
const startFadeUpTree = openingScene;
// Fade lasts for 3s, Video lasts for ----, after that start Fade Out
const startFadeDownTree = startFadeUpTree + fade + treeVidTime;
// Fade out for 3s, Viewer on screen for 3s, then fade up hands video
const startFadeUpHandsOld = startFadeDownTree + fade + viewerOnScreen;
// Fade lasts for 3s, Video lasts for ----, after that start Fade Out
const startFadeDownHandsOld = startFadeUpHandsOld + fade + handsOldVidTime;
// Fade out for 3s, at the same time fade up Blood video {^}
// Blood video runs, then start Fade Down
const startFadeDownBlood = startFadeDownHandsOld + fade + bloodVidTime;
// Fade out for 3s, Viewer on screen for 3s, then fade up young hands vid
const startFadeUpHandsYoung = startFadeDownBlood + fade + viewerOnScreen;
// Fade lasts for 3s, Video lasts for ----, after that start Fade Out
const startFadeDownHandsYoung = startFadeUpHandsYoung + fade + handsYoungVidTime;
// Fade out for 3s, Viewer on screen for 3s, then fade up ice vid
const startFadeUpIce = startFadeDownHandsYoung + fade + viewerOnScreen;
// Fade lasts for 3s, Video lasts for ---- (includes freeze at end), then start Fade Out
const startFadeDownIce = startFadeUpIce + fade + iceVidTime;




blackscreen.style.opacity = "0";
treeVid.style.opacity = "0";
handsOldVid.style.opacity = "0";
bloodVid.style.opacity = "0";
handsYoungVid.style.opacity = "0";
iceVid.style.opacity = "0";

document.getElementById("audio_element").load();
treeVid.load();

function playAudio() {
    document.getElementById("audio_element").play();
}

//master fade function
function fade_function() {
    blackscreen.style.transition = "opacity 3s ease";
    treeVid.style.transition = "opacity 3s ease";
    handsOldVid.style.transition = "opacity 3s ease";
    bloodVid.style.transition = "opacity 3s ease";
    handsYoungVid.style.transition = "opacity 3s ease";
    iceVid.style.transition = "opacity 3s ease";
        
        setTimeout(function() {
            playAudio();
        }, startFadeUpTree - 2000)

        setTimeout(function() {
            treeVid.play()
            treeVid.style.opacity = vidOpacity;
        }, startFadeUpTree)

        setTimeout(function() {
            treeVid.style.opacity = "0";
        }, startFadeDownTree)

        setTimeout(function() {
            handsOldVid.play();
            handsOldVid.style.opacity = vidOpacity;
        }, startFadeUpHandsOld)

        setTimeout(function() {
            // handsOldVid.style.opacity = "0";
            bloodVid.play();
            bloodVid.style.opacity = vidOpacity;
        }, startFadeDownHandsOld)
        // Extra set timeout so old hands can stay under blood drip video
        setTimeout(function() {
            handsOldVid.style.opacity = "0";
        }, startFadeDownHandsOld + 3000)

        setTimeout(function() {
            bloodVid.style.opacity = "0";
        }, startFadeDownBlood)

        setTimeout(function() {
            handsYoungVid.play();
            handsYoungVid.style.opacity = vidOpacity;
        }, startFadeUpHandsYoung)

        setTimeout(function() {
            handsYoungVid.style.opacity = "0";
        }, startFadeDownHandsYoung)

        setTimeout(function() {
            iceVid.play();
            iceVid.style.opacity = vidOpacity;
        }, startFadeUpIce)

        setTimeout(function() {
            // iceVid.style.opacity = "0";
            blackscreen.style.opacity = "1";
            blackscreen.style.zIndex = "1";
        }, startFadeDownIce)

};
