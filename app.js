const mainButton = document.querySelector('.main-btn');

const list = document.querySelector('.list');

const toggleButton = document.querySelector('.toggle-btn');

const removeButton = document.querySelector('.remove-btn');

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
    
    list.insertAdjacentHTML(
        'beforeend',
        `<li>${myInput.value}</li>` 
    );
    myInput.value = '';
} );

// Remove task button

removeButton.addEventListener('click', () => {

    const lastItem = list.lastElementChild;
    
    lastItem.remove();
});

