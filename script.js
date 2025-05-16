const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {



    // Unselect other boxes
    boxes.forEach(b => {
      b.classList.remove('active');
      b.querySelector('input[type="radio"]').checked = false;
      b.querySelector('.details').classList.add('hidden');
      b.querySelector('.detail').classList.add('hidden');
    });

    // Select current box
    box.classList.add('active');
    box.querySelector('input[type="radio"]').checked = true;


    // Generate size/color selectors
    const details = box.querySelector('.details');
    details.innerHTML = '';
    const detail = box.querySelector('.detail');


    for (let i = 1; i <= 2; i++) {
      const row = document.createElement('div');
      row.classList.add('option-row');
      row.innerHTML = `
        <label>#${i}</label>
        
        <select name="size-${i}">
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <select name="color-${i}">
          <option>Color</option>
          <option>Black</option>
          <option>White</option>
          <option>Red</option>
        </select>
      `;
      details.appendChild(row);
    }

    details.classList.remove('hidden');
    detail.classList.remove('hidden');

  });
});

