//o process é um objeto que mostra todos os processos que estão sendo rodados no node

console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]
const msg = `O seu primeiro nome é ${firstName} e seu segundo nome é ${lastName}`

console.log(msg)