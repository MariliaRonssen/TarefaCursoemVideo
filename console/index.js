function write(t) {
    let ta = document.getElementById('console');
    ta.value = ta.value + t;
}

function writeln(t) {
    write(t + '\n');
}

function readln() {
    let ta = document.getElementById('console');
    return new Promise(function (resolve, reject) {
        let ret = '';
        ta.onkeydown = function (evt) {
            setTimeout(() => {
                if (evt.key === 'Enter') {
                    ta.onkeydown = undefined;
                    resolve(ret);
                }
                if (evt.key.length > 1) return;
                ret += evt.key;
            }, 1);
        }
    });
}

