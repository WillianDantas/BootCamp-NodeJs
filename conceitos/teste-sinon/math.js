class Math {
    sum(a, b) {
        return  a + b;
    }

    multiple(a, b){
        return a * b;
    }

    sumAsync (a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 2500);
    }

    printSum(req, res, a , b){
        console.log(res.load('index', a + b));
    }
}

module.exports = Math;