function receivesAFunction (callback) {
    console.log ("receives a function and calls it");
    callback();
}

function returnsANamedFunction() {
    function namedFunction() {
      console.log("returns a function");
    }
  
    return namedFunction;
  }
  function returnsAnAnonymousFunction () {
    return function () {
        console.log ("returns an anonymous function")
    }
  }