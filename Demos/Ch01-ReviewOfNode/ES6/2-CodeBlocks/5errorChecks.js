var check = function(num) {
  if (num < MIN || num > MAX) {
    throw new RangeError('Parameter must be between ' + MIN + ' and ' + MAX);
  }
};

try {
  check(500);
}
catch (e) {
  if (e instanceof RangeError) {
    // Handle range error
  }
}