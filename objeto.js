const nome = "thalis"
const idade = 17
const cidade = "vera cruz"
const isAluno = true

//console.log("o nome é " + nome)
//console.log("a idade é " + idade)

const pessoa = {
      nome:"thalis",
      idade: 17,
      cidade:"vera cruz",
      isAluno: true,
      emprego: {
        nomeEmpresa: "senac rs",
        modalidade: "presencial",
        area: "informática"
      }
}
  
console.log(`objeto pessoa ${pessoa}`)
console.log(`o nome das pessoa é ${pessoa.nome}`)
console.log(`a idade da pessoa ${pessoa.idade}`)
console.log(`a cidade da pessoa ${pessoa.cidade}`)
console.log(`a da pessoa é aluno ${pessoa.isAluno}`)
console.log(`a empresa da pessoa é ${pessoa.emprego.nomeEmpresa}`)