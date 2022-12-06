//cacheDOM
const el = document.querySelector('#boardContainer');
const cell = el.querySelectorAll('.cell');

const gameBoard = (function () {
  const _board = Array(9).fill('');
//  const _board = ["x", "x", "o", "o", "x", "o", "x", "o", "o"];

  const resetBoard = () => {
    for (let i = 0; i < _board.length; i++) {
      _board[i] = '';
    }
  };

  const render = () => {
    cell.forEach((cell) => {
      cell.textContent = _board[cell.id];
    });
  }
  return {
    resetBoard, render,
  };
})();

console.log('stop');