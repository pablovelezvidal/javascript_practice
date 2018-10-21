const button = document.querySelector('button');

button.disabled = true;

const intervalo = Rx.Observable.interval(3000);

intervalo.subscribe(i => {
    console.log('iteration ', i);
    button.disabled = !button.disabled;
})