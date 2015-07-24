var run = function () {
  var str = new Array(1000000).join('*');
  var doSomethingWithStr = function(){
    if (str === '1'){
      console.log('in');
    }
  };
  doSomethingWithStr();
};

setInterval(run, 500);