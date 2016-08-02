// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // debugger;

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // return dancer;

  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  // console.log('makeDancer.prototype.step');
  // var context = this;
  // var runner = function () {
  //   context.$node.toggle();
  //   context.step();
  // };
  // console.log('this', this.step.bind(this));
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // setInterval(this.step.bind(this), this.timeBetweenSteps);
  // setTimeout(makeDancer.prototype.step.bind(this, timeBetweenSteps), this.timeBetweenSteps);
  // debugger;
  // makeDancer.prototype.step.bind(this)();
  // this.step();
};

makeDancer.prototype.lineUp = function () {
  console.log(window.dancers);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
};

// makeDancer.prototype.step();

// var test = new makeDancer(1, 2, 3);
// console.log(test);