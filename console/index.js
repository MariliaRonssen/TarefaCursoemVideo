let ta = document.getElementById('console');

function write(t) {
    ta.value = ta.value + t;
}

function writeln(t) {
    write(t + '\n');
}

function readln() {
    return new Promise(function (resolve, reject) {
        let start = ta.value.length;
        ta.focus();
        ta.onkeydown = function (evt) {
            if (evt.key === 'Enter') {
                ta.onkeydown = undefined;
                let ret = ta.value.substring(start);
                setTimeout(() => {
                    resolve(ret);
                }, 1);
            }
        }
    });
}

function cls() {
    ta.value = '';
}

function sleep(t) {
    ta.disabled = true;
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            ta.disabled = false;
            resolve();
        }, t);
    });
}

