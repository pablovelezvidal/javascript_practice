const miObs = Rx.Observable.of('hola mundo', 'mousemove', 45, ['arr', 'ay'], 77, 'aqui no llego');

miObs
.takeWhile((value) => {
    if (value != 77) {
        console.log('pasa el valor: ', value);
        return value;
    }
})
.finally(() => console.log('se terminó el evento'))
.subscribe(
    v => { console.log(v) },
    e => { console.log(e) },
    () => { console.log('complete') }
);

