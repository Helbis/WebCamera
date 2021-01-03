(function() {
    if (
        !"mediaDevices" in navigator ||
        !"getUserMedia" in navigator.mediaDevices
    ) {
        alert("Camera API is not available in your browser");
        return;
    }

    // get page elements
    const vidBack = document.querySelector("#videoInputBack");
    const btnCameraBack = document.querySelector("#getCameraBack");
    const btnGrabFrame = document.querySelector("#grabFrameButton");
    const canvas = document.querySelector("#grabFrameCanvas");

    // video constraints
    const constraintsBack = {
        video: {
            width: {
                min: 1280,
                ideal: 1920,
                max: 2560,
            },
            height: {
                min: 720,
                ideal: 1080,
                max: 1440,
            },
            facingMode: "environment"
        },
    };

    // current video stream
    let videoStreamBack;

    // handle events
    // play
    // btnCameraFront.addEventListener("click", () => {
    //     video.play();
    //     btnPlay.classList.add("is-hidden");
    //     btnPause.classList.remove("is-hidden");
    // });

    // pause
    // btnCameraBack.addEventListener("click", () => {
    //     video.pause();
    //     btnPause.classList.add("is-hidden");
    //     btnPlay.classList.remove("is-hidden");
    // });

    // take screenshot
    btnGrabFrame.addEventListener("click", () => {
        const img = document.createElement("img");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        img.src = canvas.toDataURL("image/png");
        screenshotsContainer.prepend(img);
    });

    // stop video stream
    function stopVideoStream() {
        if (videoStreamBack) {
            videoStreamBack.getTracks().forEach(track => {
                track.stop();
            });
        }
    }

    // initialize
    async function initializeCamera() {
        try {
            videoStreamBack = await navigator.mediaDevices.getUserMedia(constraintsBack);
            vidBack.srcObject = videoStreamBack;
        } catch (err) {
            alert("Could not access the camera");
        }
    }

    initializeCamera();
})();
