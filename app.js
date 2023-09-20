const inputElement = document.querySelector('input');
const ulElement = document.querySelector('ul');

inputElement.addEventListener('keypress', (e)=> {
    if(e.key == 'Enter') {
        let list = document.createElement('li');
        list.textContent = e.target.value;
        ulElement.appendChild(list);
    }   
});

ulElement.addEventListener('click', (e)=> {
    e.target.classList.toggle('delete');
})