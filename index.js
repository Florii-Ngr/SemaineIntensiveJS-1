var srcMovie = data.films[0].img;

var div = document.createElement('div');
div.setAttribute('class', 'content');
document.body.appendChild(div);

for (var i = 0; i < srcMovie.length; i++) {
  var img = document.createElement('img');
  img.setAttribute('class', 'affiche');
  div.appendChild(img);
  var hal = data.films[i].img;
  img.src = hal;
}

let modolo = document.querySelectorAll('.affiche');
var overlay = document.querySelector('.modal_overlay');
var modal = document.querySelector('.modal');


for (var i = 0; i < modolo.length; i++) {
  modolo[i].addEventListener('click', function() {
    var title = document.querySelector('.modal h4');
    var player = document.querySelector('.modal .modal_player')
    modal.style.display = 'block';
  })
}

document.querySelector('.modal_overlay').addEventListener('click', function() {
  modal.style.display = '';
})

window.addEventListener('keyup', function(event) {
  if (event.which === 27) {
    modal.style.display = '';
  }
})


window.addEventListener('scroll', function() {
  if (posModal) {

  }
  modal.style.display = '';
})
