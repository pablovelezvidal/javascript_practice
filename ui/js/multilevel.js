setTexto = (contenedor, texto) => {
    contenedor.textContent = texto;
}

/* Repasando Callbacks */
(() => {
    var textoH3 = document.querySelector("#async-callback div.texto");
    var boton = textoH3.parentElement.querySelector("#action");


    const checkAuth = callback => {
        setTexto(textoH3, "Verificando identidad...");
        setTimeout(() => {
            callback(true);
        }, 2000);
    };

    const fetchName = callback => {
        setTexto(textoH3, "Obteniendo el usuario...");
        setTimeout(() => {
            callback({nombre : "Pablo Andres Velez Vidal"});
        }, 2000);
    }

    boton.addEventListener("click", () => {
        checkAuth(auth => {
            if (auth) {
                fetchName(user => {
                    setTexto(textoH3, user.nombre);
                }) 
            }
        });
    });
})();

/* Repasando Promises */
(() => {
    var textoH3 = document.querySelector("#async-promises div.texto");
    var boton = textoH3.parentElement.querySelector("#action");

    const checkAuth = () => {
        return new Promise((resolve, reject) => {
            setTexto(textoH3, "Verificando identidad...");
            setTimeout(() => {
                resolve(true);
            }, 2000);
        })

    };

    const fetchName = () => {
        return new Promise((resolve, reject) => {
            setTexto(textoH3, "Obteniendo el usuario...");
            setTimeout(() => {
                resolve({nombre : "Pablo Andres Velez Vidal"});
            }, 2000);
        })
    }

    boton.addEventListener("click", () => {
        checkAuth()
        .then( auth => {
            if (auth) {
                return fetchName();
            }
        })
        .then( user => {
            setTexto(textoH3, user.nombre);
        });
    });
})();

/* Repasando Observables */
(() => {
    var textoH3 = document.querySelector("#async-observables div.texto");
    var boton = textoH3.parentElement.querySelector("#action");

    const checkAuth = () => {
        return Rx.Observable.create((observer) => {
            setTexto(textoH3, "Verificando identidad...");
            setTimeout(() => {
                observer.next(true);
            }, 2000);
        })

    };

    const fetchName = () => {
        return Rx.Observable.create((observer) => {
            setTexto(textoH3, "Obteniendo el usuario...");
            setTimeout(() => {
                observer.next({nombre : "Pablo Andres Velez Vidal"});
            }, 2000);
        })
    }

    Rx.Observable.fromEvent(boton, 'click')
        .switchMap( event => checkAuth())
        .switchMap( isAuth => {
            if (isAuth) {
                return fetchName();
            }
        })
        .subscribe(user => {
            setTexto(textoH3, user.nombre)
        })
})();