const miObs = Rx.Observable.fromEvent(document, 'mousemove');
const timer = Rx.Observable.timer(2000);

miObs
.takeUntil(timer)
.finally(() => console.log('se terminó el evento'))
.subscribe(
    v => { console.log(v) },
    e => { console.log(e) },
    () => { console.log('complete') }
);

