function onYouTubeIframeAPIReady() {
  createYtPlayer('M7lc1UVf-VE');
  createYtPlayer('M7lc1UVf-VE');
}
const onPlayerReady = (event: YT.PlayerEvent) => {
  event.target.mute();
  event.target.playVideo();
};
const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
  if (event.data === YT.PlayerState.PAUSED && event.target.isMuted()) {
    event.target.unMute();
    event.target.playVideo();
  }
};
const createYtPlayer = (videoId: string) => {
  const players = document.getElementById('js-players');
  const childCount = players?.childElementCount;
  const div = document.createElement('div');
  div.id = `js-player-${childCount}`;
  players?.appendChild(div);
  return new YT.Player(`js-player-${childCount}`, {
    height: '360',
    width: '640',
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
};
