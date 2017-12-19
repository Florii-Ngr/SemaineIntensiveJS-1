var titleMovie = data.films[0].title;
var container = document.querySelector('.container');
var vol = document.querySelector('.volume');


var div = document.createElement('div');
div.setAttribute('class', 'content');
document.body.appendChild(div);

var vid = document.createElement('video');
vid.setAttribute('class', 'video1');
div.appendChild(vid);
vid.src = "HETIC_SI_JS/TIE+Fighter+-+short+film(720p).mp4";

var imgStart = document.createElement('img');
imgStart.setAttribute('class', 'button-start');
div.appendChild(imgStart);
imgStart.src = "img/start-button.png";

var divButton = document.createElement('div');
divButton.setAttribute('class', 'containerButton');
div.appendChild(divButton);


var imgPlay = document.createElement('img');
imgPlay.setAttribute('class', 'button-play');
divButton.appendChild(imgPlay);
imgPlay.src = "img/play-button.png";

var imgPause = document.createElement('img');
imgPause.setAttribute('class', 'button-pause');
divButton.appendChild(imgPause);
imgPause.src = "img/pause-button.png";

var imgStop = document.createElement('img');
imgStop.setAttribute('class', 'button-stop');
divButton.appendChild(imgStop);
imgStop.src = "img/stop.png";

var titleMovie = document.createElement('h1');
titleMovie.setAttribute('class', 'titleMovie');
divButton.appendChild(titleMovie);

var inputSon = document.createElement('input');
inputSon.setAttribute('class', 'volume');
divButton.appendChild(inputSon);
inputSon.type = "range";
inputSon.min = "0";
inputSon.max = "100";
inputSon.step = "1";
inputSon.value = "0";
inputSon.oninput = "SetVolume(this.value)";
inputSon.onchange = "SetVolume(this.value)";



var inputTimer = document.createElement('input');
inputTimer.setAttribute('class', 'timer');
document.body.appendChild(inputTimer);
inputTimer.type = "range";
inputTimer.step = "1";

var titleMovie = data.films[0].title;
var container = document.querySelector('.container');
var vol = document.querySelector('.volume');


vol.addEventListener('change', setVolumeAll, false)

function setVolumeAll() {
  player.volume = vol.value / 100;
}




var player = document.querySelector('.video1');
var buttonStart = document.querySelector('.button-start')
var buttonPlay = document.querySelector('.button-play');
var buttonPause = document.querySelector('.button-pause');
var buttonStop = document.querySelector('.button-stop');
var button = document.querySelector('.button');
var title = document.querySelector('.titleMovie');

title.innerHTML = titleMovie;

buttonPlay.addEventListener('click', function() {
  player.play();
  buttonPlay.style.opacity = '0.2';
  buttonPause.style.opacity = '';
  buttonStop.style.opacity = '';
  buttonStart.style.display = "none";

});


buttonPause.addEventListener('click', function() {
  player.pause();
  buttonPause.style.opacity = '0.2';
  buttonPlay.style.opacity = '';
  buttonStop.style.opacity = '';
});


buttonStop.addEventListener('click', function() {
  player.pause();
  player.currentTime = 0;
  player.play()
  buttonStop.style.opacity = '0.2';
  buttonPlay.style.opacity = '';
  buttonPause.style.opacity = '';
});

buttonStart.addEventListener('click', function() {
  console.log('HElo');
  buttonStart.style.display = 'none';
  buttonPlay.style.opacity = '0.2';
  player.play();
});



var timer = document.querySelector('.timer');

setInterval(function() {
  timer.value = player.currentTime / player.duration * 100
}, 10)
