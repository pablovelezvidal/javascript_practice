function buffer() {
    const thInput = document.querySelector('input#th');
    return Rx.Observable.fromEvent(thInput, 'input')
    .map(v => {
        return v.target.value;
    })
    .bufferCount(3)
}

buffer().subscribe(
    v => { 
        print('#th-output', v);
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