const button = document.querySelector('button');

button.disabled = true;

const timer = Rx.Observable.timer(3000);

timer.subscribe(
    done => {
        button.disabled = false;
        console.log('El boton se ha habilitado');
    }
);