const boxes = document.querySelectorAll('.box');

function showDetailsForBox(box) {
  const oldGrid = box.querySelector('.details-grid');
  if (oldGrid) oldGrid.remove();

  const radio = box.querySelector('input[type="radio"]');
  if (!radio) return;

  // Create details-grid
  const grid = document.createElement('div');
  grid.className = 'details-grid';
  grid.innerHTML = `
    <div class="header-row">
      <span></span>
      <span class="num">Size</span>
      <span class="num">Colour</span>
    </div>
    <div class="option-row">
      <label>#1</label>
      <select><option>S</option><option>M</option><option>L</option><option>XL</option></select>
      <select><option>Black</option><option>White</option><option>Red</option></select>
    </div>
    <div class="option-row">
      <label>#2</label>
      <select><option>S</option><option>M</option><option>L</option><option>XL</option></select>
      <select><option>Color</option><option>Black</option><option>White</option><option>Red</option></select>
    </div>
  `;
  box.appendChild(grid);
}

// Prevent box click when interacting with select elements
boxes.forEach(box => {
  box.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'select') {
      event.stopPropagation();
      return;
    }
  }, true);
});

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Unselect other boxes
    boxes.forEach(b => {
      b.classList.remove('active');
      b.querySelector('input[type="radio"]').checked = false;
      // Remove any details-grid
      const oldGrid = b.querySelector('.details-grid');
      if (oldGrid) oldGrid.remove();
    });

    // Select current box
    box.classList.add('active');
    box.querySelector('input[type="radio"]').checked = true;
    showDetailsForBox(box);
  });
});

// On page load, default active box as unit 2

const defaultActive = document.querySelector('.box.active');
if (defaultActive) {
  showDetailsForBox(defaultActive);
}

