$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // console.log('click handler', this);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.slideButton').on('click', function() {
    window.dancers.forEach(function(item) {
      $(item['$node'][0]).animate({
        top: 0
      });
    });
  });

  $('.lineUpButton').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      var element = window.dancers[i]['$node'][0];
      $(element).css('top', '100px');
      console.log($(element).css('left'));
      // $(window.dancers[i]['$node'][0]).css('top', '100px');
    //   window.dancers[i].addClass('lineUp');
    // iterating through window node and applying a lineUp class
    // the lineupClass css, top : px
    }
  });

});

// node.$node[0]

// this.$node.css(styleSettings);