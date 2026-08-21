  function sum(a, b){
    console.log("sum : ", a+b);
  }
  function calculate(callback){
    callback(3, 6);
  }
  calculate(sum);