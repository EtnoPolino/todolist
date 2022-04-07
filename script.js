const submit = document.querySelector('button');
const listContainer = document.querySelector('.toDoContainer');
const input = document.querySelector('input');

function submitInput(event){

    if(!input.value) return;

    const paragraph = document.createElement('p');
    const sautLigne = document.createElement('br');
    paragraph.style.display = "inline-block";
    listContainer.appendChild(paragraph);
    listContainer.appendChild(sautLigne);
    paragraph.innerHTML = input.value;
    
    input.value='';
}

function endTask(e){
        
}


submit.addEventListener('click', submitInput);

listContainer.addEventListener('click', endTask)