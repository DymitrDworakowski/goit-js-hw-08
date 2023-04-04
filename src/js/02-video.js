
// const onPlay = function (data) {
//   const strigifyData = JSON.stringify(data);
//   localStorage.setItem(TIME_KEY, strigifyData);
// };
// player.on('timeupdate', throttle(onPlay, 1000));

// function resumePlayback() {
//   if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
//     return;
//   }
//   const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
//   if (paused) {
//     player
//       .setCurrentTime(paused)
//       .then(function (seconds) {})
//       .catch(function (error) {
//         switch (error.name) {
//           case 'Error':
//             break;
//           default:
//             break;
//         }
//       });
//   }
// }
// resumePlayback();

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime).catch(error => {
    console.error(error);
  });
}

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));