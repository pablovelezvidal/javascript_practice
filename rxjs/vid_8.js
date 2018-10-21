const button = document.querySelector('button');

button.disabled = false;

const intervalo = Rx.Observable.interval(1000);

const subs = intervalo.subscribe(i => {
    console.log('iteration ', i);
});

Rx.Observable.fromEvent(button, 'click')
.subscribe(
    v => { 
        subs.unsubscribe();
     },
    e => { console.log(e) },
    () => { console.log('complete') }
);