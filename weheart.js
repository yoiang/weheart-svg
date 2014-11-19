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
    result.setAttribute('d', "m 0 0.333 a 0.333,0.333 0 1,1 0.666,0 h-0.666 z");
    result.setAttribute('fill', randomColor() );
    var rotationString = "rotate(" + rotation + "," + 0.333 + "," + 0.666 + ")";
    result.setAttribute('transform', rotationString);
    return result;
  }

  function newCenterElement() {
    var result = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    result.setAttribute('x', "0");
    result.setAttribute('y', "0.333");
    result.setAttribute('width', "0.666");
    result.setAttribute('height', "0.666");
    result.setAttribute('fill', randomColor() );
    var rotationString = "rotate(" + 45 + "," + 0.333 + "," + 0.666 + ")";
    result.setAttribute('transform', rotationString);
    return result;
  }

  result.leftAtrium = newAtriumElement(-45);
  result.leftAtrium.id = "leftAtrium";
  result.appendChild(result.leftAtrium);

  result.rightAtrium = newAtriumElement(45);
  result.rightAtrium.id = "rightAtrium";
  result.appendChild(result.rightAtrium);

  result.center = newCenterElement();
  result.center.id = "center";
  result.appendChild(result.center);

  Object.defineProperty(result, 'leftFillColor', {
    get: function() {
      return this.leftAtrium.getAttribute('fill');
    },
    set: function(value) {
      this.leftAtrium.setAttribute('fill', value);
    }
  });
  
  Object.defineProperty(result, 'centerFillColor', {
    get: function() {
      return this.center.getAttribute('fill');
    },
    set: function(value) {
      this.center.setAttribute('fill', value);
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

  return result;
}