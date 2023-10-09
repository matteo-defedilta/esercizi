const counterContainer = document.getElementById('countersContainer');
const addCounterButton = document.getElementById('addCounter');
const inputElement = document.getElementById('inputCounter');
const removeCounterButton = document.getElementById('removeCounter');
let counters = [];
let countedElement = 0;

//create a constructor for control the state for each counter
function Counter(counterContainer) {
  this.element = null;
  this.count = 0;
  this.id = countedElement;
  countedElement++;

  this.create = function () {
    //create the container for a single counter and give it all the elements
    const container = this.createElement('div', 'card-container');
    container.appendChild(
      this.createElement('p', '', `counter ${countedElement}`)
    );
    container.appendChild(this.createElement('button', 'decrease', '-'));
    container.appendChild(this.createElement('span', 'count', ''));
    container.appendChild(this.createElement('button', 'increase', '+'));
    container.appendChild(this.createElement('button', 'reset', 'reset'));
    container.appendChild(this.createElement('button', 'delete', 'delete'));
    counterContainer.appendChild(container);

    //set the element as closed state
    this.element = container;

    //set single counter function
    const decreaseButton = this.element.querySelector('.decrease');
    const increaseButton = this.element.querySelector('.increase');
    // const countInput = this.element.querySelector('.count');
    const resetButton = this.element.querySelector('.reset');
    const removeCounter = this.element.querySelector('.delete');

    increaseButton.addEventListener('click', () => {
      this.count++;
      this.updateCount();
    });

    decreaseButton.addEventListener('click', () => {
      this.count--;
      this.updateCount();
    });

    resetButton.addEventListener('click', () => {
      this.count = 0;
      this.updateCount();
    });

    removeCounter.addEventListener('click', () => {
      this.remove();
    });

    this.updateCount();
  };

  this.remove = function () {
    if (this.element) {
      counterContainer.removeChild(this.element);
      counters = counters.filter((element) => element.id != this.id);
      updateInputValue();
    }
  };

  this.updateCount = function () {
    if (this.element) {
      const countElement = this.element.querySelector('.count');
      countElement.innerText = this.count;
    }
  };

  this.createElement = function (tag, classList = '', textContent = '') {
    const element = document.createElement(tag);
    element.classList = classList;
    element.textContent = textContent;
    return element;
  };
}

function newCounter() {
  const counter = new Counter(counterContainer);
  counter.create();
  counters.push(counter);
}

function updateInputValue() {
  inputElement.value = counters.length;
}

// button to add a new counter element
addCounterButton.addEventListener('click', () => {
  newCounter();
  updateInputValue();
});

// button to remove last counter element
removeCounterButton.addEventListener('click', () => {
  if (counters.length > 0) {
    const lastCounter = counters.pop();
    lastCounter.remove();
  }
  updateInputValue();
});

// set by imput the numbers of counters
inputElement.addEventListener('change', function (event) {
  let currentCount = event.target.value;
  if (currentCount < counters.length) {
    counters.forEach((element, index) => {
      if (index >= currentCount) {
        element.remove();
      }
    });
  } else {
    for (let index = counters.length; index < currentCount; index++) {
      newCounter();
    }
  }
});

updateInputValue();
