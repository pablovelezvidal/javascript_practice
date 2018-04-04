var arreglo = [5,4,7,9,3,2,1,6,8];

function ordenadorBurbuja(arr) {

    var cambios = false;

    while (true) {
        cambios = false;
        for (var i = 1; i<arr.length; i++) {
            if (arr[i] < arr[i-1]) {
                var aux = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = aux;
                cambios = true;
            } 
        }

        if (cambios == false) 
            break;
    }

}

//var arreglo = [5,4,7,9,3,2,1,6];

function ordenadorInsercion (arr) {
    var aux, cont1, cont2;

    for (cont1 = 1; cont1 < arr.length; cont1++) {
        aux = arr[cont1];
        for(cont2 = cont1 -1; cont2 >= 0 && arr[cont2] > aux; cont2--) {
            arr[cont2+1] = arr[cont2];
            arr[cont2] = aux;
        }
    }
}
/*

itNo=4
aux=3
cont1=4
cont2=3 ->4,5,7,3,9,2,1,6->cont2 es 2->4,5,3,7,9,2,1,6->cont2 es 1->4,3,5,7,9,2,1,6->cont2 es 0->3,4,5,7,9,2,1,6

itNo=5
aux=2
cont1=5
cont2=4->3,4,5,7,2,9,1,6->cont2 es 3->3,4,5,2,7,9,1,6->cont2 es 2->3,4,2,5,7,9,1,6->cont2 es 1->3,2,4,5,7,9,1,6->cont2 es 0->2,3,4,5,7,9,1,6

itNo=6
aux=1
cont1=6
cont2=5->2,3,4,5,7,1,9,6->cont2 es 4->2,3,4,5,1,7,9,6->cont2 es 3->2,3,4,1,5,7,9,6->cont2 es 2->2,3,1,4,5,7,9,6->cont2 es 1->2,1,3,4,5,7,9,6->cont2 es 0->1,2,3,4,5,7,9,6

itNo=7
aux=6
cont1=7
cont2=6->1,2,3,4,5,7,6,9->cont2 es 5->1,2,3,4,5,6,7,9->cont2 es 4->1,2,3,4,5,6,7,9->cont2 es 3->1,2,3,4,5,6,7,9

itNo=1
aux=5
cont1=1
cont2=0
condicion= si
nuevo arreglo=4,5,7,9,3,2,1,6

itNo=2
aux=7
cont1=2
cont2=1
condicion= no
nuevo arreglo=4,5,7,9,3,2,1,6

itNo=3
aux=9
cont1=3
cont2=2
condicion= no
nuevo arreglo=4,5,7,9,3,2,1,6
*/ 

ordenadorBurbuja(arreglo);
//ordenadorInsercion(arreglo);

//setTimeout(function() {
    for (var i=0; i<arreglo.length; i++) {
        console.log(arreglo[i]);
    }
//}, 1000);

