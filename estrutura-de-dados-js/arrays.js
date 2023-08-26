// Inserindo um elemento na primeira posição
let numbers = [0, 1, 2];

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};
numbers.insertFirstPosition(-1);

console.log("Inserindo -1 elemento na primeira posição", numbers);

console.log("===========================");

let numberUseUnshift = [1, 2, 3, 4];

numberUseUnshift.unshift(-1)

console.log(numberUseUnshift)