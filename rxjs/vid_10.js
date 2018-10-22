const request = new Request('http://localhost:3300/api/v1/sports', {
    method: 'get',
    headers: {
        Accept: 'application/json'
    }
});

const promesa = new Promise((resolve, reject) => {
    fetch(request)
        .then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    resolve(json);
                });
            }
        }
    )
    .catch((error) => {
        console.log('promesa rechazada');
        reject(error);
    })
});

const myObs = Rx.Observable.fromPromise(promesa)
.do(v => {
  console.log(`tienes ${v.length} sports`);  
})
.map(sports => {
    let estado = sports.every(sport => sport.ico != '');
    sports = sports.filter(sport => sport.name != 'Cycling');
    return {estado, sports};
})
.subscribe(
    v => { 
        if (v.estado) {
            console.log('Todos tienen icon');
            console.log('Sports no cycling: ', v.sports);
        }
     },
    e => { console.log( e ) },
    () => { console.log('complete') }
);


const obs2 = Rx.Observable.of('hola mundo', ['mejor', 'marte'], 77, 7, 'perro', 'gato', {animal: 'lobito'});

obs2
.first()
.subscribe(v => {console.log(v)});

obs2
.last()
.subscribe(v => {console.log(v)});

obs2
.filter((v) => {
    return !isNaN(v);
})
.subscribe((v) => {
    console.log(v);
});