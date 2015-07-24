var run = function () {
  var str = new Array(1000000).join('*');
  var doSomethingWithStr = function () {
    if (str != null) {
      // do something
    }
  };
  doSomethingWithStr();
  var logIt = function() {
    // do something
  }
  setInterval(logIt, 100);
};
setInterval(run, 500); 
