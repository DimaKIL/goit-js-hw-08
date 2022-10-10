import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframeRef);

player.on('timeupdate', throttle(timeToUpdate, 1000));

const STORAGE_TIME = 'videoplayer - current - time';

savedVideoPlayingTime();

function timeToUpdate(data) {
  localStorage.setItem(STORAGE_TIME, JSON.stringify(data));
}

function savedVideoPlayingTime() {
  if (!localStorage.getItem(STORAGE_TIME)) {
    return;
  }
  const savedPlayedTime = JSON.parse(
    localStorage.getItem(STORAGE_TIME)
  ).seconds;

  player.setCurrentTime(savedPlayedTime).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
}

