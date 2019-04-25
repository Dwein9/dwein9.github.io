function imgSelect (el) {
  openModal(el.dataset);
}

function openModal (data) {
  var modal = document.querySelector('#modal');
  document.querySelector('#image').src = `./img/africa${data.key}.JPG`;
  // document.querySelector('#text').innerText = `${data.desc}`;
  modal.classList.toggle("closed");
}

function getKeyCode(event) {
  var key = event.keyCode;

  if (key === 39) { //next
    nextImage();
  }

  if (key === 37) { // prev
    prevImage();
  }

  if (key === 27) { // close x
    closeModal();
  }
}

function closeModal() {
  var modal = document.querySelector('#modal');
  if (!modal.classList.contains('closed')) {
    modal.classList.toggle("closed");
  }
}

function nextImage() {
  var next = parseInt(document.querySelector('#image').src.split('africa')[2].split('.')[0])+1
  if (next <= 31) {
    document.querySelector('#image').src = `./img/africa${next}.JPG`;
  }
}

function prevImage() {
  var prev = parseInt(document.querySelector('#image').src.split('africa')[2].split('.')[0])-1
  if (prev > 1){
    document.querySelector('#image').src = `./img/africa${prev}.JPG`;
  }
}
