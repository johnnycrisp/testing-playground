const mainButton = document.querySelector('.main-btn');

const list = document.querySelector('.list');

const toggleButton = document.querySelector('.toggle-btn');


//Hide and show list items 

toggleButton.addEventListener('click', () => {
        if(list.style.display === 'none'){

            list.style.display = 'block';
            toggleButton.textContent = 'Hide List';
        } else {

                list.style.display = 'none';
                toggleButton.textContent = 'Show List';
                }
    });

// Task Creation Button and li creator

mainButton.addEventListener('click', () => {
    const myInput = document.querySelector('.input-main');

    const newLi = document.createElement('li');
    newLi.textContent = myInput.value;
    list.appendChild(newLi);
    const newRemoveButton = document.createElement('button');
    newRemoveButton.textContent = 'Remove';
    newLi.appendChild(newRemoveButton);
    myInput.value = '';
} );

// Remove task button

list.addEventListener('click', (e) => {
    e.target.parentNode.remove();
});

