let motion = false;
let ios = false;

if (typeof DeviceMotionEvent.requestPermission === 'function')
  document.body.addEventListener('click', function() {
   DeviceMotionEvent.requestPermission()                              
    .then(function(){
      console.log('DeviceMotionEvent enabled');
      motion = true;
      ios = true;
  })
  .catch(function(error) {
  console.warn('DeviceMotionEvent not enabled', error);
  })
})

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(225);
}

function draw() {
  fill(rotationX,rotationY,rotationZ);
  
  let zMotion = round(width / 5 * abs(radians(rotationZ) - PI))
  
  let yMotion = round(height / 2 + rotationX * 10)
  let xMotion = round(height / 2 + rotationY * 10)
  
  circle(xMotion, yMotion, zMotion);
  stroke("pink");
  strokeWeight(3);
}