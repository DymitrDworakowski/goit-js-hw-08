player.on("timeupdate",throttle((function(t){const e=JSON.stringify(t);localStorage.setItem(TIME_KEY,e)}),1e3)),function(){if(null===JSON.parse(localStorage.getItem(TIME_KEY)))return;const t=JSON.parse(localStorage.getItem(TIME_KEY)).seconds;t&&player.setCurrentTime(t).then((function(t){})).catch((function(t){t.name}))}();
//# sourceMappingURL=02-video.c2a6dc5a.js.map
