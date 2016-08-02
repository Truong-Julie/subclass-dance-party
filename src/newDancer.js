var newDancer = function (top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // this.$node = $('<span class="new-dancer"><img src="http://i.makeagif.com/media/6-20-2015/tvW_hB.gif" height="100" width="100"></span>');
  var ogNode = this.$node;
  $(ogNode).removeClass('dancer');
  $(ogNode).addClass('new-dancer');
  // $(ogNode).append('<img src="http://i.makeagif.com/media/6-20-2015/tvW_hB.gif" height="100" width="100">');
  $(ogNode).append('<img src="https://media.giphy.com/media/13ryHQqsPtqbpC/giphy.gif">');
  console.log(this.$node);
  // $(ogNode).css({
  //   'display': 'inline-block',
  //   'background-color': '#0074d9',
  //   'height': '100px',
  //   'width': '100px',
  //   'font-size': '1px',
  //   'padding': '1px',
  //   'color': 'white',
  //   'margin-right': '5px',
  //   'margin-left': '5px',
  //   'animation': 'roll 3s infinite',
  //   'transform': 'rotate(30deg)',
  //   'opacity': '.7'
  // });
};

newDancer.prototype = Object.create(makeDancer.prototype);
newDancer.prototype.constructor = newDancer;

newDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  var topPostition = this.$node[0].style.top;
  // var leftPosition = this.$node[0].style.left;
  console.log('newDancer step');
  // this.$node.toggle(topPostition);
  // this.$node.toggle('explode');
  // this.$node.toggle('fast');

  // this.$node[0].style.top = topPostition;


};
