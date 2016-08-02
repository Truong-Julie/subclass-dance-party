var newDancer = function (top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

newDancer.prototype = Object.create(makeDancer.prototype);
newDancer.prototype.constructor = newDancer;