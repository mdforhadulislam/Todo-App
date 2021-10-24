loadEvents();
// load every event in the page
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteItems);
}
// subit data function
function submit(e) {
    e.preventDefault();
    let taskList;
    let input = document.querySelector('input');
    if (input.value != '')
        addTask(input.value);
    input.value = '';
}
// add tasks
function addTask(task) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<p>${task}</p><button class="delete__btn"><img src="https://img.icons8.com/ios-glyphs/64/000000/delete-forever.png" /></button>`;
    ul.appendChild(li);
    document.querySelector('.todo__app__todo__list__container__clear__btn').classList.add('d-show')
    document.querySelector('.todo__app__todo__list__container__clear__btn').classList.remove('d-none')
}
// clear the LIST
function clearList(e) {
    let ul = document.querySelector('ul').innerHTML = '';
    document.querySelector('.todo__app__todo__list__container__clear__btn').classList.add('d-none')
    document.querySelector('.todo__app__todo__list__container__clear__btn').classList.remove('d-show')
}
// delete task
function deleteItems(e) {
    let remove = e.target.parentNode.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    let li = document.querySelectorAll('ul li');
    if (li.length <= 0) {
        document.querySelector('.todo__app__todo__list__container__clear__btn').classList.add('d-none')
        document.querySelector('.todo__app__todo__list__container__clear__btn').classList.remove('d-show')
    }
}