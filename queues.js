function MyQueue () {
    var collection = [];

    this.values = function() {
        return collection;
    }

    this.enqueue = function(el) {
        collection.push(el);
    }

    this.dequeue = function() {
        collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.last = function() {
        return collection[this.size()-1];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0;
    }
}


var queueA = new MyQueue();

queueA.enqueue("h");
queueA.enqueue("o");
queueA.enqueue("l");
queueA.enqueue("a");

console.log(queueA.front());
console.log(queueA.last());

console.log(queueA.values());

queueA.dequeue();
queueA.dequeue();

console.log(queueA.values());

var queueB = new MyQueue();

console.log(queueB.isEmpty());