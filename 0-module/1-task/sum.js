function sum(a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number')
    throw new TypeError('You must use only type number!');
  return a + b;
}

module.exports = sum;
