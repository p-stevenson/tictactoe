// eslint-disable-next-line no-unused-vars
const tictactoe = (function () {
  // cacheDOM
  const el = document.querySelector('#mainContainer')
  const cell = el.querySelectorAll('.cell')
  const button = el.querySelectorAll('.button')

  // bind events
  button.forEach((button) => {
    button.addEventListener('click', _getID, { once: true })
  })

  cell.forEach((cell) => {
    cell.addEventListener('click', _getID, { once: true })
  })

  function _getID () {
    console.log(this.id)
    return this.id
  }

  const gameBoard = function () {
    // const _board = Array(9).fill('');
    const _board = ['x', 'x', 'o', 'o', 'x', 'o', 'x', 'o', 'o']

    const getCell = () => {}

    const render = () => {
      cell.forEach((cell) => {
        cell.textContent = _board[cell.id]
      })
    }
    const resetBoard = () => {
      for (let i = 0; i < _board.length; i++) {
        _board[i] = ''
      }
    }
    return {
      getCell,
      render,
      resetBoard
    }
  }
  return { gameBoard }
})()

console.log('stop')
