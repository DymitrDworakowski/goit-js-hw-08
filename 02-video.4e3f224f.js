player.on("timeupdate",throttle((function(e){var t=JSON.stringify(e);localStorage.setItem(TIME_KEY,t)}),1e3)),function(){if(null!==JSON.parse(localStorage.getItem(TIME_KEY))){var e=JSON.parse(localStorage.getItem(TIME_KEY)).seconds;e&&player.setCurrentTime(e).then((function(e){})).catch((function(e){e.name}))}}();
//# sourceMappingURL=02-video.4e3f224f.js.map
