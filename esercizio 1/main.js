(function () {
  const decreaseButton = document.querySelector('.decrease');
  const increaseButton = document.querySelector('.increase');
  const countInput = document.querySelector('.count');
  const resetButton = document.querySelector('.reset');

  let count = 0;

  function updateCount() {
    countInput.textContent = count;
  }

  increaseButton.addEventListener('click', () => {
    count++;
    updateCount();
  });

  decreaseButton.addEventListener('click', () => {
    count--;
    updateCount();
  });

  resetButton.addEventListener('click', () => {
    count = 0;
    updateCount();
  });
})();
