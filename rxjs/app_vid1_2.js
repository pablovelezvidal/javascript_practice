const miObs = Rx.Observable.create(observer => {
    observer.next('hola');
    setTimeout(() => {
        observer.next('jueputa que rico');
    }, 5000);
    observer.next('mundo');
});


// miObs.subscribe(val => {
//     console.log('valor del primer observable: ', val); 
// });

// segundo video
let counter = 0;
const clicks = Rx.Observable.fromEvent(document ,'click')
.map(v => v)
.filter(v => true)
.subscribe(
    v => { 
        // console.log(counter, v);
        // counter ++;

        // if (counter == 5) {
        //     console.log('llegamos a 5');
        // }
    },
    e => { console.log(e) },
    () => { console.log('complete') }
);

const boton = document.querySelector('button');
const obsFromEvent = Rx.Observable.fromEvent(boton, 'click');


obsFromEvent.map(v => v)
.filter(v => true)
.subscribe(
    v => { 
        miObs.subscribe(val => {
           console.log('Segundo Video valor obse: ', val); 
        });
     },
    e => { console.log(e) },
    () => { console.log('complete') }
);
