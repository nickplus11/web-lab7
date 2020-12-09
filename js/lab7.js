const input_box = document.querySelector('input');
const mes_window = document.querySelector('.show-messages-window');
input_box.addEventListener('keydown', evt => add_mes(evt));
document.querySelectorAll('.delete').forEach(e =>
    e.firstChild.addEventListener('click', () =>
        delete_message(e.parentNode)));

function add_mes(evt) {
    let text = input_box.value;
    if (evt.code !== 'Enter' || text === '') return;
    let elem = document.createElement('div');
    elem.innerHTML =
        '<div class="delete"><img src="img/delete-message.png" alt=""></div>' +
        '<p></p>';

    elem.firstChild.firstChild.addEventListener('click', () => delete_message(elem));
    elem.lastChild.textContent = text;
    elem.classList.add('right-mes');
    mes_window.appendChild(elem);
    input_box.value = "";
    mes_window.scrollBy(0, 1000);

    let responseText = create_response();
    elem = document.createElement('div');
    elem.innerHTML =
        '<div class="delete"><img src="img/delete-message.png" alt=""></div>' +
        '<p></p>';

    elem.firstChild.firstChild.addEventListener('click', () => delete_message(elem));
    elem.lastChild.textContent = responseText;
    elem.classList.add('left-mes');
    mes_window.appendChild(elem);
    input_box.value = "";
    mes_window.scrollBy(0, 1000);
}

function create_response() {
    return get_subj() + get_adj() + get_complement();
}

function get_subj(){
    return Math.random() > 0.5 ? "I'm a " : "You are a ";
}

function get_adj(){
    return Math.random() > 0.5 ? "good " : "bad ";
}

function get_complement(){
    return Math.random() > 0.5 ? "human." : "machine.";
}

function delete_message(elem) {
    elem.remove();
}
