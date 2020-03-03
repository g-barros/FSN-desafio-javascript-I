// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// implementação

function adicionarAluno(nomeAluno) {
    let alunoNovo = {
        nome: nomeAluno,
        notas:[],
        cursos:[],
        faltas:0
    }

    if (alunosDaEscola.push(alunoNovo)) {
        return console.log(nomeAluno + " adicionado com sucesso!");
    } else {
        return console.log("Nao foi possível adicionar o aluno no momento.");
    }
}

function listarAlunos () {
    alunosDaEscola.forEach(aluno => {
        console.log("Nome do aluno: "+ aluno.nome);
        let cursos = aluno.cursos;
        if (cursos.length == 0) {
            console.log (aluno.nome + " não está matriulado em nenhum curso.")
        } else {
            for (curso of cursos) {
                console.log ("Curso: " + curso.nomeDoCurso)
            }
            
        }
        console.log("Notas: " + aluno.notas);
        console.log("Faltas: " + aluno.faltas);
    });
}

function buscarAluno (nomeAluno) {
    let alunoBuscado = alunosDaEscola.find(function(aluno) {
        return aluno.nome == nomeAluno;
    })

    if (alunoBuscado) {
        console.log ("Aluno encontrado com sucesso!");
        return alunoBuscado;
    } else {
        console.log("Aluno não encontrado.");
        return -1;
    }
}

function matricularAluno (aluno, nomeCurso) {
    let alunoMatricula = buscarAluno(aluno.nome);
    let cursoMatricula = {
        nomeDoCurso: nomeCurso,
        dataMatricula: new Date
    }

    if (alunoMatricula) {
        alunoMatricula.cursos.push(cursoMatricula);
        console.log("Aluno matriculado com sucesso!");
    } else {
        console.log ("Não foi possível matricular o aluno.");
    }
}

function aplicarFalta (aluno) {
    if (aluno.cursos.length != 0) {
        if (buscarAluno(aluno.nome) != -1) {
            aluno.faltas++;
            console.log("Número de faltas atualizado com sucesso.");
        } else {
            console.log("Aluno não cadastrado no sistema.");
        }
    } else {
        console.log ("Aluno não está matriculado em nenhum curso.");
    }
    
}

function aplicarNota (aluno, nota) {
    if (aluno.cursos.length != 0) {
        if (buscarAluno(aluno.nome) != -1) {
            aluno.notas.push(nota);
            console.log ("Nota cadastrada com sucesso!");
        } else {
            console.log ("Aluno não cadastrado no sistema.");
        }
    } else {
        console.log("Aluno não está matriculado em nenhum curso.");
    }
}

function aprovarAluno(aluno) {
    if (aluno.cursos.length != 0) {
        if (aluno.notas.length != 0) {
            let notas = aluno.notas;
            let somar = notas.reduce(function (pilha, numero) {
                return pilha + numero;
            });
            let media = somar/aluno.notas.length;

            if (aluno.faltas <= 3 && media >= 7) {
                console.log("Parabéns, " + aluno.nome + " está aprovado!");
            } else {
                console.log("Infelizmente, "+ aluno.nome + " não está aprovado.")
            }
        }
        
    } else {
        console.log(aluno.nome + " não está matriculado em nenhum curso.");
    }
}