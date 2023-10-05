(function () {
  // Function to create element
  function createElement(tag, classList = '', textContent = '') {
    const element = document.createElement(tag);
    element.classList = classList;
    element.textContent = textContent;
    return element;
  }

  // Selected item Root in the page
  const root = document.querySelector('#root');

  // Header
  const header = createElement('header');
  header.appendChild(createElement('h1', [], 'Esercizio 1 (counter)'));
  root.appendChild(header);

  // Container
  const container = createElement('div', 'card-container');
  container.appendChild(createElement('button', 'decrease', '-'));
  container.appendChild(createElement('span', 'count', ''));
  container.appendChild(createElement('button', 'increase', '+'));
  root.appendChild(container);

  // Reset Container
  const resetContainer = createElement('div', 'reset-container');
  resetContainer.appendChild(createElement('button', 'reset', 'reset'));
  container.appendChild(resetContainer);

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
  updateCount();
})();
