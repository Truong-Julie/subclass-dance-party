var newDancer = function (top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // this.$node = $('<span class="new-dancer"><img src="http://i.makeagif.com/media/6-20-2015/tvW_hB.gif" height="100" width="100"></span>');
  var ogNode = this.$node;
  $(ogNode).removeClass('dancer');
  $(ogNode).addClass('new-dancer');
  $(ogNode).append('<img src="http://i.makeagif.com/media/6-20-2015/tvW_hB.gif" height="100" width="100">');
};

newDancer.prototype = Object.create(makeDancer.prototype);
newDancer.prototype.constructor = newDancer;

newDancer.prototype.slide = function () {

};