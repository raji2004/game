const body = document.body;
const h2 = document.querySelector('h2');
const input = document.getElementById('input-field');
const button = document.getElementById('btn');
const ul = document.getElementById('items-to-shop');
const li = document.querySelectorAll('li');
const delButton = document.getElementsByClassName('btn')
console.log(delButton);


input.addEventListener('keypress', event =>{
    if (event.keyCode === 13 && input.value.length > 0){
        const newListItem = document.createElement('li');
        const newListContent = document.createTextNode(input.value)
        ul.append(newListItem);
        newListItem.append(newListContent);
    }
})