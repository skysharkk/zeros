module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let arrOdd = [];
  let newArr = arr.map(item => {
    if (item.slice(item.length - 2) === '!!') {
      let factorialNumber = item.slice(0, item.length - 2);
      if (factorialNumber % 2 === 0) {
        arrOdd.push(1);
        if (factorialNumber >= 50) {
          return zerosEven(factorialNumber) + 1;
        } else {
          return zerosEven(factorialNumber);
        }
      } else {
        arrOdd.push(0);
        return zerosOdd(factorialNumber);
      }
    } else {
      let factorialNumber = item.slice(0, item.length - 1);
      arrOdd.push(1);
      return zeros(factorialNumber);
    }
  });
  function zeros(n) {
    let counter = 0;
    for (var i = 5; n / i >= 1; i *= 5) {
      counter += Math.floor(n / i);
    }
    return counter;
  }
  function zerosOdd(n) {
    if (n > 50) {
      return zeros(n) - Math.round(n / 10);
    } else {
      return zeros(n) - Math.floor(n / 10)
    }
  }
  function zerosEven(n) {
    let counter = 0;
    for (var i = 10; n / i >= 1; i *= 10) {
      counter += Math.floor(n / i);
    }
    return counter;
  }
  let resultOdd = arrOdd.reduce((acc, item) => acc + item, 0);
  let result = newArr.reduce((acc, item) => acc + item, 0);
  if (resultOdd === 0) {
    return resultOdd;
  } else {
    return result;
  }
}
