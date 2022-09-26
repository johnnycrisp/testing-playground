const mainButton = document.querySelector('.main-btn');

const list = document.querySelector('.list');

const toggleButton = document.querySelector('.toggle-btn');

const dogButton = document.querySelector('.dogGet');


dogButton.addEventListener('click', fetchData);

function fetchData(url){
    return fetch(url)
    .then(response => response.json())

}

fetchData('https://dog.ceo/api/breeds/image/random')
.then(data => generateDogImg(data.message))

function generateDogImg(data) {
const dogHtml = `<img src="${data}" alt> <p>Here is your dog</p>
`;
// Element.innerHTML = dogHTML;

}


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

