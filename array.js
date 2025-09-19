const array = [
    "thalis", 
    10, 
    true, 
    { 
        emprego: {
            nomeEmpresa: "senac rs"
}
}]

console.log(`no indice 0 ${array[0]}`);

//exibir varias informaçãoes
array.map((a, indice) => {
    console.log(`no indice ${indice} existe o valor ${a}`);
})

const post1 = {
    titulo: "apresentação da turma de informática",
    descrição: "hoje teve apresentação dos TCCs",
    autor: "senac rs"
}
const post2 = {
    titulo: "desgustação de aula de gastronomia",
    descrição: "hoje a turma fez frango assado",
    autor: "senac rs"
}
const post3 = {
    titulo: "acidente de bike na vila shultz",
    descrição: "hoje ocoreu acidente entre duas galinhas",
    autor: "senac rs"
}

const posts = [post1,post2,post3]

posts.map((post, indice) => {
    console.log(`post ${indice}`)
    console.log(`titulo ${post.titulo}`);
    console.log(`descrição ${post.descrição}`);
    console.log(`autor ${post.autor}`);
})




