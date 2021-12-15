async function main() {
    let lugares = [];
    lugares[1] = 'vazio';
    lugares[2] = 'ocupado';
    lugares[3] = 'vazio';

    while (true) {
        cls(); // limpa a tela
        writeln('SISTEMA DE RESERVA DE LUGARES NO CINEMA');
        writeln('');

        write('B1 (' + lugares[1] + ')   ');
        write('B2 (' + lugares[2] + ')   ');
        write('B3 (' + lugares[3] + ')   ');
        writeln('');

        writeln('');

        writeln('Escolha um lugar vazio digitando o número!');
        writeln('Exemplo: para escolher B1 digite 1');
        write('Número: ');

        let numero = await readln();

        writeln('Você escolheu o lugar B' + numero + '!');

        if (lugares[numero] == 'ocupado') {
            writeln('O lugar que você escolheu está ocupado!');
        } else {
            lugares[numero] = 'ocupado';
        }
        
        await sleep(5000); // espera 5000 milisegundos
    }
}

main();