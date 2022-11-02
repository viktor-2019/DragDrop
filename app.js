
// short items about event drag
// https://lk.result.school/pl/fileservice/user/file/download/h/a46b8dfc2b9db6f48da82d867a691007.pdf

const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {  
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

function dragstart(e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.target.classList.add('hovered');
}
function dragleave(e) {
  e.target.classList.remove('hovered');
}
function dragdrop(e) {
  e.target.classList.remove('hovered');
  e.target.append(item);
}
function dragend(e) {
  e.target.classList.remove('hold');
  e.target.classList.remove('hide');
}
