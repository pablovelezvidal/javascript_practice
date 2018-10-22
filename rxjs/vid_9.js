const obs = Rx.Observable.from([10,  100, 1000]);

obs
    .map(num => {
        console.log('antes: ', num)
        return num + 5;
    })
    .subscribe(
        (data) => {
            console.log('despues: ', data)
        }
    );