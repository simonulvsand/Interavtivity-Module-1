// @ts-nocheck
const cameraEl = document.getElementById("camera");
const canvasEl = document.getElementById("canvas");
const resultsEl = document.getElementById("results");
const poseColours = [];




// document.getElementById('btnFreeze').addEventListener('click', evt => {
//   if (cameraEl.paused) {
//     cameraEl.play();
//   } else {
//     cameraEl.pause();
//   }
// });

console.log("Loading posenet model");

// See docs for info on these parameters
// https://github.com/tensorflow/tfjs-models/tree/master/posenet
let model = null;
posenet
  .load({
    architecture: "ResNet50",
    outputStride: 32,
    inputResolution: 257,
    quantBytes: 4
  })
  .then(m => {
    model = m;
    console.log("Model loaded, starting camera");
    startCamera();
  });

cameraEl.addEventListener("play", () => {
  // Resize canvas to match camera frame sie
  canvasEl.width = cameraEl.videoWidth;
  canvasEl.height = cameraEl.videoHeight;

  // Start processing!
  window.requestAnimationFrame(process);

});

// Processes the last frame from camera
function process() {
  model
    .estimateMultiplePoses(canvasEl, {
      flipHorizontal: false,
      maxDetections: 5 /* max # poses */,
      scoreThreshold: 0.5,
      nmsRadius: 20
    })
    .then(processPoses); /* call processPoses with result */
}

function processPoses(poses) {
  // For debug purposes, draw points
  drawPoses(poses);
  

  // const leftShoulder1 = getKeypointPos(poses, 'leftShoulder', 1);
  // const rightShoulder1 = getKeypointPos(poses, 'rightShoulder', 1);

  // const leftShoulder2 = getKeypointPos(poses, 'leftShoulder', 2);
  // const rightShoulder2 = getKeypointPos(poses, 'rightShoulder', 2);

  //   const leftShoulder4= getKeypointPos(poses, 'leftShoulder', 4);
  //   const rightShoulder4 = getKeypointPos(poses, 'rightShoulder', 4);

  // const personDistance1= Math.abs(leftShoulder1.x - rightShoulder1.x);
  // const personDistance3= Math.abs(leftShoulder2.x - rightShoulder2.x);

  //   const personZ0= Math.floor(Math.abs(leftShoulder0.x-rightShoulder0.x) /2);
  //   const personZ1= Math.floor(Math.abs(leftShoulder1.x-rightShoulder1.x) /2);
  //   const personZ2= Math.floor(Math.abs(leftShoulder2.x-rightShoulder2.x) /2);
  //   const personZ3= Math.floor(Math.abs(leftShoulder3.x-rightShoulder3.x) /2);
  //   const personZ4= Math.floor(Math.abs(leftShoulder4.x-rightShoulder4.x) /2);


  let poseStrength = false;
<<<<<<< HEAD
    // let poseStrength = false;

  const audio0 = document.getElementById("sound0");
  const audio1 = document.getElementById("sound1");
  const audio2 = document.getElementById("sound2");

=======
 
  var audio = [document.getElementById("sound0"), document.getElementById("sound1"),document.getElementById("sound2")];
  // var audio1 = document.getElementById("sound1");
  // var audio2 = document.getElementById("sound2");
>>>>>>> f742fc17b88beb4d7ee585b74b5fb9cd73ae7df2


<<<<<<< HEAD


  if(poses.length > 1 ) {


    if(poses[0].score > 0.3 && poses[1].score > 0.3){
      const leftShoulder0 = getKeypointPos(poses, "leftShoulder", 0);
      const rightShoulder0 = getKeypointPos(poses, "rightShoulder", 0);
  
      const leftShoulder1 = getKeypointPos(poses, "leftShoulder", 1);
      const rightShoulder1 = getKeypointPos(poses, "rightShoulder", 1);

      let personDistance0 = Math.floor(Math.abs(leftShoulder0.x - rightShoulder0.x));
      let personDistance1 = Math.floor(Math.abs(leftShoulder1.x - rightShoulder1.x));

  
      let centralPoint0 = Math.floor(Math.abs(leftShoulder0.x - rightShoulder0.x)) /2;
      let centralPoint1 = Math.floor(Math.abs(leftShoulder1.x - rightShoulder1.x)) /2;
  
        
        
        
        
        
        // if(diffY01 < 30 && diffX01 <5 && diffZ01 < 30 ) {
        //   document.body.style.backgroundColor="red";
        // }else {
        //   document.body.style.backgroundColor="white";
        // }
  
        // console.log(diffY0);
    }


  };



  for(i=0; i< (poses.length); i++) {
    if (poses[i].score > 0.3){
      poseStrength = true;

    }else{
      poseStrength = false;
    }
  };

  

  if (poses.length > 1 && poses[1].score > 0.3) {
    const leftShoulder1 = getKeypointPos(poses, "leftShoulder", 1);
    const rightShoulder1 = getKeypointPos(poses, "rightShoulder", 1);

    const personDistance1 = Math.abs(leftShoulder1.x - rightShoulder1.x);
=======
  for(i=0; i< poses.length - 1; i++){
    if(poses[i].score > 0.3){

      const leftShoulder = getKeypointPos(poses, "leftShoulder", i);
      const rightShoulder = getKeypointPos(poses, "rightShoulder", i);
  
      const personDistance0 = Math.abs(leftShoulder.x - rightShoulder.x);
  
      audio[i].play();
  
      for (j = 0; j < personDistance0; j++) {
        audio[i].volume = j / 700;
      }
    } else {
      audio[i].volume = 0;
    };
  };

>>>>>>> f742fc17b88beb4d7ee585b74b5fb9cd73ae7df2


  //   // if (leftEye != null && rightEye != null) {
  //   //   const slouchFactor = Math.floor(Math.abs(leftEye.y - rightEye.y));

  //   //   var c = canvasEl.getContext('2d');
  //   //   c.fillStyle = 'black';
  //   //   c.fillText('Slouch factor: ' + slouchFactor, 100, 10);
  //   // }
  // }


  if( poses.length > 0){
    if(poses[0].score> 30 && poses[1].score> 30){
  const leftShoulder0 = getKeypointPos(poses, 'leftShoulder', 0);
  const rightShoulder0 = getKeypointPos(poses, 'rightShoulder', 0);

  const leftShoulder1 = getKeypointPos(poses, 'leftShoulder', 1);
  const rightShoulder1 = getKeypointPos(poses, 'rightShoulder', 1);

  const centralX0= Math.floor(Math.abs(leftShoulder0.x-rightShoulder0.x))/2;
  const centralY0= Math.floor(Math.abs(leftShoulder0.y-rightShoulder0.y))/2;

  const centralX1= Math.floor(Math.abs(leftShoulder1.x-rightShoulder1.x))/2;
  const centralY1= Math.floor(Math.abs(leftShoulder1.y-rightShoulder1.y))/2;



  const distance01= Math.sqrt(Math.pow((Math.abs(centralX1-centralX0)), 2)+Math.pow((Math.abs(centralY1 - centralY0))), 2);

  console.log(distance01);


    }
  }
  // Repeat, if not paused
  if (cameraEl.paused) {
    console.log("Paused processing");
    return;
  }
  window.requestAnimationFrame(process);
}

// Helper function to get a named keypoint position
function getKeypointPos(poses, name, poseIndex = 0) {
  // Don't return a value if overall score is low
  if (poses.score < 0.3) return null;
  if (poses.length < poseIndex) return null;

  const kp = poses[poseIndex].keypoints.find(kp => kp.part == name);
  if (kp == null) return null;

  return kp.position;
}

function drawPoses(poses) {
  // Draw frame to canvas
  var c = canvasEl.getContext("2d");
  c.drawImage(cameraEl, 0, 0, cameraEl.videoWidth, cameraEl.videoHeight);

  // Fade out image
  c.fillStyle = "rgba(255,0,0,0)";
  c.fillRect(0, 0, cameraEl.videoWidth, cameraEl.videoHeight);

  // Draw each detected pose
  for (var i = 0; i < poses.length; i++) {
    drawPose(i, poses[i], c);
  }

  // If there's no poses, draw a warning
  if (poses.length == 0) {
    c.textBaseline = "top";
    c.fillStyle = "red";
    c.fillText("No poses detected", 10, 10);
  }
}

// Draws debug info for each detected pose
function drawPose(index, pose, c) {
  // Lookup or generate random colour for this pose index
  if (!poseColours[index]) poseColours[index] = getRandomColor();
  const colour = poseColours[index];

  // Draw prediction info
  c.textBaseline = "top";
  c.fillStyle = colour;
  c.fillText(Math.floor(pose.score * 100) + "%", 10, index * 20 + 10);

  // Draw each pose part
  pose.keypoints.forEach(kp => {
    // Draw a dot for each keypoint
    c.beginPath();
    c.arc(kp.position.x, kp.position.y, 5, 0, 2 * Math.PI);
    c.fill();

    // Draw the keypoint's score (not very useful)
    //c.fillText(Math.floor(kp.score * 100) + '%', kp.position.x + 7, kp.position.y - 3);

    // Draw name of keypoint
    c.fillText(kp.part, kp.position.x - 3, kp.position.y + 6);
  });
}

// ------------------------
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Reports outcome of trying to get the camera ready
function cameraReady(err) {
  if (err) {
    console.log("Camera not ready: " + err);
    return;
  }
  console.log("Camera ready");
}

// Tries to get the camera ready, and begins streaming video to the cameraEl element.
function startCamera() {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
  if (!navigator.getUserMedia) {
    cameraReady("getUserMedia not supported");
    return;
  }
  navigator.getUserMedia(
    { video: { width: 640, height: 480 }, audio: false },
    stream => {
      try {
        cameraEl.srcObject = stream;
      } catch (error) {
        cameraEl.srcObject = window.URL.createObjectURL(stream);
      }
      cameraReady();
    },
    error => {
      cameraReady(error);
    }
  );
}
