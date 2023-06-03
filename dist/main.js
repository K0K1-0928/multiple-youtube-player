"use strict";
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: { autoplay: 1, mute: 1, controls: 1 },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}
const onPlayerReady = (event) => {
    event.target.mute();
    event.target.playVideo();
};
const onPlayerStateChange = (event) => {
    if (event.data === YT.PlayerState.PAUSED && event.target.isMuted()) {
        event.target.unMute();
        event.target.playVideo();
    }
};
