class Sudoku {
    constructor () {
        this.body = [];

        let idCounter = 1;
        for(let y = 0; y < 9; y++){
            for(let x = 0; x < 9; x++){
                this.body.push({
                    id: idCounter,
                    x: x,
                    y: y,
                    s: parseInt(y / 3) * 3 + parseInt(x / 3) // taking segment from 3 * 3 field
                });
                idCounter++;
            }
        }
    }

    getRow(n) {
        const row = []

        for(let i = 0; i < 9; i++){
            row.push(this.body[9 * n + i]) // every next element in row
        }
    }

    getColumn(n) {
        const column = [];

        for(let i = 0; i < 9; i++){
            row.push(this.body[i * 9 + n]) // same ^ but for columns
        }
    }

    getSegment(n) {

    }

}