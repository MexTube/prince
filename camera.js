// camera.js
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('liveCameraFeed');
  
    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Request access to the camera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          // Display the live camera feed in the video element
          video.srcObject = stream;
        })
        .catch(function (error) {
          console.error('Error accessing camera:', error);
        });
    } else {
      console.error('getUserMedia is not supported in this browser');
    }
  });
  