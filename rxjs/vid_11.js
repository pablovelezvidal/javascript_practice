function throtle() {
    const thInput = document.querySelector('input#th');
    return Rx.Observable.fromEvent(thInput, 'input')
    .throttleTime(2000)
    .map(v => {
        return v.target.value;
    })
}

function debounce() {
    const dbInput = document.querySelector('input#db');
    return Rx.Observable.fromEvent(dbInput, 'input')
    .debounceTime(2000)
    .map(v => {
        return v.target.value;
    })
}

throtle().subscribe(
    v => { 
        print('#th-output', v);
    },
    e => { console.log(e) },
    () => { console.log('complete') }
);


debounce().subscribe(
    v => { 
        print('#db-output', v);
     },
    e => { console.log(e) },
    () => { console.log('complete') }
);

const print = (elemento, valor) => {
    if (!valor) return;
    var etiqueta = document.createElement('pre');
    etiqueta.innerHTML = valor;
    document.querySelector(elemento).appendChild(etiqueta);
}