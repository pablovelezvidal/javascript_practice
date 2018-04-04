function MySet() {
    var collection = [];

    this.has = function(el) {
        return collection.indexOf(el) !== -1;
    }

    this.values = function() {
        return collection;
    }

    this.add = function(el) {
        if (!this.has(el)) {
            collection.push(el);
            return true;
        }
        return false;
    }

    this.remove = function(el) {
        if (this.has(el)) {
            collection.splice(collection.indexOf(el), 1);
            return true;
        }
        return false;
    }

    this.size = function() {
        return collection.length;
    }

    this.union = function(otherSet) {
        var unionSet = new MySet();
        var firsSet = this.values();
        var secondSet = otherSet.values();

        firsSet.forEach(element => {
            unionSet.add(element);
        });

        secondSet.forEach(element => {
            unionSet.add(element);
        })

        return unionSet;
        
    }

    this.intersection = function (otherSet) {
        var intersectionSet = new MySet();
        var firsSet = this.values();

        firsSet.forEach(el => {
            if (otherSet.has(el)) {
                intersectionSet.add(el);
            }
        });
        return intersectionSet;
    }

    this.difference = function(otherSet) {
        var differenceSet = new MySet();
        var firsSet = this.values();

        firsSet.forEach(el => {
            if (!otherSet.has(el)) {
                differenceSet.add(el);
            }
        });
        return differenceSet;
    }

    this.isSubset = function(otherSet) {
        var firsSet = this.values();
        return firsSet.every(el => {
            return otherSet.has(el);
        })
    }

}


var setA = new MySet();
setA.add("h");
setA.add("o");
setA.add("l");
setA.add("a");


var setB = new MySet();
setB.add("t");
setB.add("e");
setB.add("l");
setB.add("e");
setB.add("f");
setB.add("o");
setB.add("n");

var setC = new MySet();
setC.add("t");
setC.add("a");
setC.add("s");


console.log(setA.values());
console.log(setB.values());

var setUnion = setA.union(setB);
console.log("union: -> " + setUnion.values());

var setIntersection = setA.intersection(setB);
console.log("intersection: -> " + setIntersection.values());

var setDiference = setA.difference(setB);
console.log("diference: -> " + setDiference.values());

var isSubset = setA.isSubset(setB);
console.log("is a subset: -> " + isSubset);


var cIsSubsetOfB = setC.isSubset(setB);
console.log("C is a subset of B: -> " + cIsSubsetOfB);