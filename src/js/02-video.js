

player.setCurrentTime(120.456).then(function(seconds) {
  // `seconds` indicates the actual time that the player seeks to
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
        // The time is less than 0 or greater than the video's duration
        break;
    default:
        // Some other error occurred
        break;
  }
});
console.log(player.setCurrentTime);