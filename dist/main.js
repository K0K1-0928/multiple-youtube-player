"use strict";
function onYouTubeIframeAPIReady() {
    createYtPlayer('M7lc1UVf-VE');
    createYtPlayer('M7lc1UVf-VE');
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
const createYtPlayer = (videoId) => {
    const players = document.getElementById('js-players');
    const childCount = players === null || players === void 0 ? void 0 : players.childElementCount;
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-12');
    colDiv.classList.add('col-md-6');
    colDiv.classList.add('col-lg-4');
    const wrapDiv = document.createElement('div');
    wrapDiv.classList.add('iframe-wrap');
    const playerDiv = document.createElement('div');
    playerDiv.id = `js-player-${childCount}`;
    wrapDiv.appendChild(playerDiv);
    colDiv.appendChild(wrapDiv);
    players === null || players === void 0 ? void 0 : players.appendChild(colDiv);
    return new YT.Player(`js-player-${childCount}`, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
};
