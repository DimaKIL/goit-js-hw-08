import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframeRef);

player.on('timeupdate', throttle(timeToUpdate, 1000));

const keyContainer = 'videoplayer - current - time';

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

