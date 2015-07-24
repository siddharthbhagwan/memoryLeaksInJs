 var run = function () {
  var str = new Array(100000000).join('*');
  var logIt = function () {
    if(str === '1'){
    }
  };
  setInterval(logIt, 100);
};
setInterval(run, 500);