function weheart() {
  var result = document.createElementNS("http://www.w3.org/2000/svg", 'g');

  function randomColor() {
    var r = 255 * Math.random() | 0;
    var g = 255 * Math.random() | 0;
    var b = 255 * Math.random() | 0;
      return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  function newAtriumElement(rotation) {
    var result = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    result.setAttribute('d', "m 0 0.333 v 0.666 h 0.666 v -0.666 h -0.666 a 0.333,0.333 0 1,1 0.666,0 z");

    result.setAttribute('fill-opacity', 0.5);
    result.setAttribute('fill', randomColor() );

    var rotationString = "rotate(" + rotation + "," + 0.333 + "," + 0.666 + ")";
    result.setAttribute('transform', rotationString);

    return result;
  }

  result.leftAtrium = newAtriumElement(-45);
  result.leftAtrium.id = "leftAtrium";
  result.appendChild(result.leftAtrium);

  result.rightAtrium = newAtriumElement(45);
  result.rightAtrium.id = "rightAtrium";
  result.appendChild(result.rightAtrium);

  Object.defineProperty(result, 'leftFillColor', {
    get: function() {
      return this.leftAtrium.getAttribute('fill');
    },
    set: function(value) {
      this.leftAtrium.setAttribute('fill', value);
    }
  });

  Object.defineProperty(result, 'rightFillColor', {
    get: function() {
      return this.rightAtrium.getAttribute('fill');
    },
    set: function(value) {
      this.rightAtrium.setAttribute('fill', value);
    }
  });

  result.rightFillColor = 'rgb(47,191,224)';
  result.leftFillColor = 'rgb(246,78,84)';

  return result;
}