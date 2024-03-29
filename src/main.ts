let isYouTubeIframeAPIReady = false;
function onYouTubeIframeAPIReady() {
  isYouTubeIframeAPIReady = true;
  const viewButton = document.getElementById('viewButton')!;
  viewButton.addEventListener('click', viewButtonClick);
}
const viewButtonClick = () => {
  if (!isYouTubeIframeAPIReady) {
    return null;
  }
  const inputYouTubeUrlOrId = <HTMLInputElement>(
    document.getElementById('inputYouTubeUrlOrId')!
  );
  const youTubeId = extractYouTubeIdFromUrl(inputYouTubeUrlOrId.value);
  createYtPlayer(youTubeId);
  inputYouTubeUrlOrId.value = '';
};
const changeColumnsSize = (rowId: string) => {
  const row = document.getElementById(rowId);
  const children = row?.children!;
  let colSizes: string[] = [];
  if (children.length >= 5) {
    colSizes.push('col-4');
  } else if (children.length >= 3) {
    colSizes.push('col-6');
  } else if (children.length >= 1) {
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
const createYtPlayer = (videoId: string) => {
  const players = document.getElementById('js-players');
  const childCount = players?.childElementCount;
  const colDiv = document.createElement('div');
  const wrapDiv = document.createElement('div');
  wrapDiv.classList.add('iframe-wrap');
  const playerDiv = document.createElement('div');
  playerDiv.id = `js-player-${childCount}`;
  wrapDiv.appendChild(playerDiv);
  colDiv.appendChild(wrapDiv);
  players?.appendChild(colDiv);
  changeColumnsSize('js-players');
  return generateYtPlayerIframe(`js-player-${childCount}`, videoId);
};
const extractYouTubeIdFromUrl = (urlOrId: string) => {
  if (!isValidUrl(urlOrId)) {
    return urlOrId;
  }
  const url = new URL(urlOrId);
  if (urlOrId.startsWith('https://www.youtube.com/watch')) {
    const params = url.searchParams;
    return params.get('v')!;
  }
  if (urlOrId.startsWith('https://www.youtube.com/live')) {
    const pathname = url.pathname;
    return pathname.replace('/live/', '');
  }
  if (urlOrId.startsWith('https://youtu.be')) {
    const pathname = url.pathname;
    return pathname.replace('/', '');
  }
  return urlOrId;
};
const isValidUrl = (string: string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};
const generateYtPlayerIframe = (htmlId: string, videoId: string) => {
  return new YT.Player(htmlId, {
    height: '100%',
    width: '100%',
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
};
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
