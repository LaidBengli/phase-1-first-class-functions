

function runFiveMiles(x) {
    console.log("Go for a five-mile run" + x);
}



function receivesAFunction(runFiveMiles) {
    runFiveMiles("laid");
}

receivesAFunction(runFiveMiles);
function returnsANamedFunction() {
    const laid = x => x ** 2;
    return laid;
}
function returnsAnAnonymousFunction() {
    return function (y) {
        y++;
    }
}