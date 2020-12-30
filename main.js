let capture;

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
    createCanvas(480, 480);
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
