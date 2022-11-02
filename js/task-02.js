const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListRef = document.querySelector('#ingredients');

const createItems = elements => {
  return elements.map(element => {
    const itemEl = document.createElement('li');
    itemEl.textContent = element;
    itemEl.classList.add('item');

    return itemEl;
  });
};

ingredientsListRef.append(...createItems(ingredients));
