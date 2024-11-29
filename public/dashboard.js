$(document).ready(function () {
    // Map video selections to corresponding video paths
    const videoPaths = {
        dm: {
            video1: "videos/dm/dm1.mp4",
            video2: "videos/dm/dm2.mp4",
            video3: "videos/dm/dm3.mp4",
            video4: "videos/dm/dm4.mp4",
            video5: "videos/dm/dm5.mp4"
        },
        ss: {
            video1: "videos/ss/ss1.mp4",
            video2: "videos/ss/ss2.mp4",
            video3: "videos/ss/ss3.mp4",
            video4: "videos/ss/ss4.mp4",
            video5: "videos/ss/ss5.mp4"
        },
        od: {
            video1: "videos/od/od1.mp4",
            video2: "videos/od/od2.mp4",
            video3: "videos/od/od3.mp4",
            video4: "videos/od/od4.mp4",
            video5: "videos/od/od5.mp4"
        }
    };

    // Event listener for dropdown selection
    $("#videoSelect").on("change", function () {
        const selectedVideo = $(this).val(); // Get selected video (e.g., "video1")

        // Update and play Decision Making video
        $("#dmVideo source").attr("src", videoPaths.dm[selectedVideo]);
        const dmVideo = $("#dmVideo")[0];
        dmVideo.load();
        dmVideo.play();

        // Update and play Semantic Segmentation video
        $("#ssVideo source").attr("src", videoPaths.ss[selectedVideo]);
        const ssVideo = $("#ssVideo")[0];
        ssVideo.load();
        ssVideo.play();

        // Update and play Output video
        $("#odVideo source").attr("src", videoPaths.od[selectedVideo]);
        const odVideo = $("#odVideo")[0];
        odVideo.load();
        odVideo.play();
    });
});
