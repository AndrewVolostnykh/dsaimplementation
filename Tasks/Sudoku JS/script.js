const game = new Sudoku(`
    1 0 0   0 0 5   0 0 0
    0 0 0   0 0 0   0 0 0
    0 0 0   0 2 0   0 0 0

    0 0 0   0 0 0   3 0 0
    0 6 0   4 0 0   0 0 0
    0 0 0   0 0 0   0 0 0

    0 0 7   0 0 8   0 0 0
    0 0 0   0 0 0   0 0 0
    0 0 0   0 0 0   0 0 9
`)

document.querySelector('#app').append(game.getHTML(750))


