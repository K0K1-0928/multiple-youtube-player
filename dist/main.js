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
    const wrapDiv = document.createElement('div');
    wrapDiv.classList.add('iframe-wrap');
    const playerDiv = document.createElement('div');
    playerDiv.id = `js-player-${childCount}`;
    wrapDiv.appendChild(playerDiv);
    colDiv.appendChild(wrapDiv);
    players === null || players === void 0 ? void 0 : players.appendChild(colDiv);
    changeColumnsSize('js-players');
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
const changeColumnsSize = (rowId) => {
    const row = document.getElementById(rowId);
    const children = row === null || row === void 0 ? void 0 : row.children;
    if (children == null) {
        return null;
    }
    let colSizes = [];
    if (children.length >= 5) {
        colSizes.push('col-4');
    }
    else if (children.length >= 3) {
        colSizes.push('col-6');
    }
    else if (children.length >= 1) {
        colSizes.push('col-12');
        colSizes.push('col-lg-6');
    }
    const childArray = Array.from(children);
    childArray.forEach((element) => {
        element.setAttribute('class', '');
        colSizes.forEach((col) => {
            element.classList.add(col);
        });
    });
};
