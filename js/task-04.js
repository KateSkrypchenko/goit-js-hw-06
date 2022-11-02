const refs = {
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
  counterEl: document.querySelector('#value'),
};

let counter = 0;

const counterValue = {
  decrement() {
    counter -= 1;
    refs.counterEl.textContent = counter;
  },

  increment() {
    counter += 1;
    refs.counterEl.textContent = counter;
  },
};

refs.decrementButton.addEventListener('click', counterValue.decrement);
refs.incrementButton.addEventListener('click', counterValue.increment);
