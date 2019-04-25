function imgSelect (el) {
  openModal(el.dataset);
}

function openModal (data) {
  var modal = document.querySelector('#modal');
  document.querySelector('#image').src = `./img/africa - ${data.key}.JPG`;
  // document.querySelector('#text').innerText = `${data.desc}`;
  modal.classList.toggle("closed");
}

function closeModal() {
  var modal = document.querySelector('#modal');
  modal.classList.toggle("closed");
}

// function nextPic() {
//   var modal = document.querySelector('#modal');
//   modal.classList.toggle("closed");
// }
//
// function prevPic() {
//   var modal = document.querySelector('#modal');
//   modal.classList.toggle("closed");
// }
//
