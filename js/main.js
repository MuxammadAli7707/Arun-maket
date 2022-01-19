let a = 0;
document.getElementById('modeBtn').addEventListener('click', function () {
  document.body.classList.toggle('dark');
  if (a == 0) {
    a++;
  } else {
    a = 0;
  }
});

let searchbtn = document.getElementById('search');
let removebtn = document.getElementById('remove');
let modalboxbtn = document.getElementById('modalbox');

searchbtn.addEventListener('click', function() {
  modalbox.classList.add('show');
});

removebtn.addEventListener('click', function() {
  modalbox.classList.remove('show');
});