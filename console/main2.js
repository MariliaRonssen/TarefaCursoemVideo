async function main() {
    write('Número de questões: ');
    let numQuestoes = await readln();
    let gabarito = [];
    for (let i = 0; i < numQuestoes; i++) {
        write('Gabarito da questão ' + (i + 1) + ': ');
        gabarito[i] = await readln();
    }
    write('Número de alunos: ');    
    let numAlunos = await readln();
    let nomes = [];
    let notas = [];
    for (let j = 0; j < numAlunos; j++) {
        write('Nome do aluno ' + (j + 1) + ': ');
        nomes[j] = await readln();
        notas[j] = 0;
        for (let i = 0; i < numQuestoes; i++) {
            write('Resposta da questão ' + (i + 1) + ': ');
            let resposta = await readln();
            if (resposta === gabarito[i]) {
                notas[j] += 1;
            }
        }
    }
    writeln('Boletim:');
    writeln('Aluno\tNota');
    for (let j = 0; j < numAlunos; j++) {
        writeln(nomes[j] + '\t' + notas[j]);
    }
}

main();