
// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de fundo

// usar spread com objeto

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }

console.log(clone)

// usar spread com array

const grupoA = ['Jodo', 'Pedro', 'Gloria']

const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
