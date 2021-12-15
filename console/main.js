async function main() {
    writeln('Ola!');
    while(true) {
        write('Qual é o seu nome?');
        let resp = await readln();
        writeln(resp + ' é um bonito nome!');
    }
}

main();