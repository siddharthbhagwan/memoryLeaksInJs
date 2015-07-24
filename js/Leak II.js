var run = function () {
  var str = new Array(1000000).join('*');
  var logIt = function () {
    // do something
  };
  setInterval(logIt, 100);
};
setInterval(run, 500);
