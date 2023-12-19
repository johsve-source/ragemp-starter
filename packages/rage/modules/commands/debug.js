"use strict";

mp.events.add("playerDeath", (player, reason, killer) => {
  setTimeout(() => {
    player.spawn(player.position);
  }, 3000);
});
