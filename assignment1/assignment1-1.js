function add(...args){
    sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return sum;
}

function avg(add, ...args){
    return add(...args)/args.length;
}

console.log(avg(add, 1, 2, 3));