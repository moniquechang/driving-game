var data = {
  directon: 'right',
  locationX: 0,
  locationY: 0
};

var $img = document.querySelector('img');

function turnCar(event) {
  if (event.key === 'ArrowDown') {
    $img.className = 'down';
    data.direction = 'down';
  }
  if (event.key === 'ArrowLeft') {
    $img.className = 'left';
    data.direction = 'left';
  }
  if (event.key === 'ArrowUp') {
    $img.className = 'up';
    data.direction = 'up';
  }
  if (event.key === 'ArrowRight') {
    $img.className = 'right';
    data.direction = 'right';
  }
}

document.addEventListener('keydown', turnCar);

var styleObj = document.styleSheets[0].cssRules[2].style;

function startCar(event) {
  if (event.key !== ' ') {
    return;
  }
  styleObj.setProperty('left', '10px');
}

document.addEventListener('keydown', startCar);
setInterval(startCar, 16000);
