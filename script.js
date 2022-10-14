let body = document.body;
let h2 = document.querySelector('h2');
let input = document.getElementById('input-field');
let ul = document.getElementById('items-to-shop');
let listItems = document.querySelectorAll('li');

let button = document.getElementById('btn');
button.addEventListener('click', () => {
    if (input.value !== ""){
        let found = false;
        let count = 1;
        listItems.forEach(listitem => {
            if (listitem.innerText === input.value){
                found = true;
                // listitem.innerText = `${listitem.innerText} x2`
                input.value = '';
            }
        })
        if (found){

        }
        else{
            let newListItem = document.createElement('li');
            let listContent = document.createTextNode(input.value);

            // body.append(ul);
            ul.append(newListItem);
            newListItem.append(listContent);
            input.value = '';
        } 
    }
});






// write a condition
/* if the input value is already present in the list, return nothing
    if u want to take it a step further let the list value show a x2
*/