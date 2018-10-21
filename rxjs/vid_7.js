const object = {
    1: 'hola mundo',
    2: 'otra vez',

}
const staticData = Rx.Observable.of(object, 'hola marte', false);

staticData
.map(v => v)
.filter(v => true)
.subscribe(
    v => { console.log(v) },
    e => { console.log(e) },
    () => { console.log('complete') }
);