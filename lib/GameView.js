const Game = require("./Game");

const GameView = function (game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.game.draw(ctx);
};

module.exports = GameView;