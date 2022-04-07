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

 // we will click one time on a paragaph so that he's considered done..
    paragraph.addEventListener('click', () => {
        if(!paragraph.style.textDecoration){
            paragraph.style.textDecoration = "line-through";
        } else{
            paragraph.style.textDecoration = null;
        }     
    })

 // we will double click on a paragraph to cancel it
    paragraph.addEventListener('dblclick', () => {
        paragraph.remove();
        sautLigne.remove();
    })
 
}


submit.addEventListener('click', submitInput);

