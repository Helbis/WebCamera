let capture;

// function setup() {
//     createCanvas(800, 400);
//
//     let constraints = {
//         video: {
//             mandatory: {
//                 minWidth: 1280,
//                 minHeight: 720
//             },
//             optional: [{
//                 maxFrameRate: 10
//             }]
//         },
//         audio: true
//     };
//
//     createCapture(constraints, stream => {
//         console.log(stream);
//     });
// }
//
// function draw() {
//     background(0);
//     image(capture, 0, 0, width, width * capture.height / capture.width);
// }

function setup() {
  createCanvas(480, 480);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  filter(INVERT);
}
