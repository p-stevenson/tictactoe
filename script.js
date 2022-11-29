const tictactoe = (() => {
  const _gameBoard = {
    board: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
  };

  const playerFactory = function(name) {
    return {name};
  };

  return {playerFactory};
})();

console.log('stop');