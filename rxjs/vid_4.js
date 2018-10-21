const request = new Request('http://httpstat.us/500', {
    method: 'get',
    headers: {
        Accept: 'application/json'
    }
});

const miPromise = new Promise((resolve, reject) => {
    fetch(request)
    .then(response => {
        if (response.ok) {
            response.json().then(json => {
            console.log('Promise resolved');
            resolve(json);
          });
        }
    })
    .catch((error) => {
        console.log('promesa rechazada');
        reject(error);
    })
});

const miObs = Rx.Observable.fromPromise(miPromise);

miObs.subscribe(
    res => {
    console.log('Resultados: ->', res);
    },
    err => {
        console.log('Error', err);
        throw err;
    });