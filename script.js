const boxes = document.querySelectorAll('.box');

function showDetailsForBox(box) {
  // Remove any existing details-grid
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
      <select><option>Colour</option><option>Black</option><option>White</option><option>Red</option></select>
    </div>
  `;
  box.appendChild(grid);
}

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

// On page load, show details for the default active box (unit 2)
const defaultActive = document.querySelector('.box.active');
if (defaultActive) {
  showDetailsForBox(defaultActive);
}

