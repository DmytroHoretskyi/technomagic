const deleteButton = document.getElementById('deleteButton');
const orderedList = document.querySelector('.queue');
const butt = document.getElementById('addButton');
const input = document.getElementById('elem1')

let queue = [1, 2, 3, 4, 5, 6];

function main() {
    renderList(queue);
}

function renderList(list) {
    for (let i of list){
        let row = document.createElement('li')
        row.innerHTML = `${i}`
        document.querySelector('.queue').appendChild(row)
    }
}

butt.onclick = function() {
    let val = document.getElementById('elem1').value;

    if (queue.length <18) {
        queue.push(val);

        let row = document.createElement('li');
        row.innerHTML = `${val}`;

        document.querySelector('.queue').appendChild(row);
        input.value.splice(' ')
        input.value = '';

    } else {
        alert('you reach the max length');
    }

    console.log(queue.length);
};

deleteButton.onclick = function (){
    queue.shift();

    orderedList.innerHTML = '';
    renderList(queue);
}

main();

