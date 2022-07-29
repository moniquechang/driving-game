var data = {
  directon: 'right'
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
