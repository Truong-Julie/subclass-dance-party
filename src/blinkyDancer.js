var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // console.log(makeDancer.apply(this, arguments));
  // var test = new makeDancer(1, 4, 5);
  // console.log(test);
  // debugger;
  makeDancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // return blinkyDancer;
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// var oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  // makeDancer.prototype.step();
  // oldStep();
  // console.log('hit step');
  // console.log(makeDancer.prototype.step);
  // makeDancer.prototype.step.call(this);
  // // toggle() is a jQuery method to show/hide the <span> tag.
  // // See http://api.jquery.com/category/effects/ for this and
  // // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

