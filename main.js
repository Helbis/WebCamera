let capture;
let canv;
let canv2

// let constraints = {
//     video: {
//         mandatory: {
//             minWidth: 1280,
//             minHeight: 720
//         },
//         optional: [{
//             maxFrameRate: 10
//         }]
//     },
//
//     audio: false
// };


function setup() {
    canv = createCanvas(480, 480);
    canv.id("MyCanvas");
    // canv2 = createCanvas(480, 480);
    // canv2.id("CANVAS_2");

    capture = createCapture(VIDEO);
    capture.size(480, 480);
    // capture.hide();
}

function savePhoto() {
    image(capture.get(), 0, 0, width, width * capture.height / capture.width);
}

function draw() {
    image(capture, 0, 0, width, width * capture.height / capture.width);
}
