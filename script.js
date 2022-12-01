const gameBoard = (function () {
  const _board = Array(9).fill('');

  const resetBoard = () => {
    for (let i = 0; i < _board.length; i++) {
      _board[i] = '';
    }
  };

  return {
    resetBoard
  };
})();

console.log('stop');