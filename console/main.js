async function main() {
    writeln('Ola!');
    writeln('Qual é o seu nome?');
    let resp = await readln();
    writeln(resp + ' é um bonito nome!');
}

main();