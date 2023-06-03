let player: YT.Player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}
const onPlayerReady = (event: YT.PlayerEvent) => {
  event.target.playVideo();
};
let done = false;
const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
};
const stopVideo = () => {
  player.stopVideo();
};
