
const nums = [1, 2, 3, 4, 5];

// For com propósito, map não mexe no array original

let resultado = nums.map(function(e) {
    return e * 2;
});


const somal = e => e + 10;

const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;


resultado = nums.map(triplo).map(soma).map(paraDinheiro);
console.log(resultado);