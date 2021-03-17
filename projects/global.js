//webcam function
var video = document.querySelector("#cam_element");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({video:true})
  .then(function (stream) {
    video.srcObject = stream;
    document.querySelector("cam_container").value="false";
  })
  .catch(function (err0r) {
    console.log("Something went wrong!");
  });
}