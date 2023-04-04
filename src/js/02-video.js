

// player.setCurrentTime(120.456).then(function(seconds) {
//   // `seconds` indicates the actual time that the player seeks to
// }).catch(function(error) {
//   switch (error.name) {
//     case 'RangeError':
//         // The time is less than 0 or greater than the video's duration
//         break;
//     default:
//         // Some other error occurred
//         break;
//   }
// });
// console.log(player.setCurrentTime);

// var vdo_play = "";
// $(document).on('click', '.btn-video', function () {
//   if (vdo_play) {
//     clearInterval(vdo_play);
//   }
//   var player = new Vimeo.Player($(".mfp-iframe")[0]);
//   var currentPos, percentage, vdoEndTym = "";
//   vdo_play = setInterval(function () {
//     player.on('timeupdate', function (getAll) {
//       currentPos = getAll.seconds; //get currentime
//       vdoEndTym = getAll.duration; //get video duration
//       percentage = (getAll.percent * 100) + "%";
//       console.log('currentPos: ' + currentPos);
//       console.log('percentage: ' + percentage);
//     });
//     player.on('ended', function () {
//       clearInterval(vdo_play);
//     });
//   }, 1000);
// });

const onPlay = function (data) {
  const strigifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, strigifyData);
};
player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
    return;
  }
  const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
  if (paused) {
    player
      .setCurrentTime(paused)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
          default:
            break;
        }
      });
  }
}
resumePlayback();