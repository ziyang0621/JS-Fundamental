String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
};

console.log('John'.isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
  return this > 0;
};

// 1.isPositive() wont work, because JS interprets the dot as decimal point
// console.log(1.isPositive());
console.log((1).isPositive());
