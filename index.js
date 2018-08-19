const app = "I don't do much."

var dodger = document.getElementById('dodger')
console.log('${dodger}')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = '${left - 1}px'
  }
}

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  if (right > 0) {
    dodger.style.right = '${right - 1}px'
  }
}

document.addEventListener('keydown', function(key) {
  alert('key pressed')
  if (key.which === LEFT_ARROW) {
    alert('hi')
    moveDodgerLeft()

  }
  else (key.which === 39) {
    moveDodgerRight()
  }
});
