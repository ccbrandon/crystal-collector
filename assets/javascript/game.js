var images = [
    'assets/images/diamond.jpg',
    'assets/images/emerald.jpg',
    'assets/images/sapphire.jpg',
    'assets/images/ruby.jpg'
  ];
var targetNumber = 45;
var currentScore = 0;
var wins = 0;
var losses = 0;
var randomNumbers = [];

$('#target-score').text(targetNumber);
$('#wins').text(wins);
$('#losses').text(losses);
$('#current-score').text(currentScore);
for (var i = 0; i < 4; i++) {
  var number = Math.floor(Math.random() * 9) + 1;
  randomNumbers.push(number);
}

for (var j = 0; j < randomNumbers.length; j++) {
  var img = $('<img>');
  img.attr('src', images[j]);
  img.addClass('game img-fluid mx-3');
  img.attr('data-number', randomNumbers[j]);
  $('#empty-div').append(img);
}

$('.game').on('click', function() {
  value = Number($(this).attr('data-number'));
  currentScore += value;
  $('#target-score').text(targetNumber);
  $('#wins').text(wins);
  $('#losses').text(losses);
  $('#current-score').text(currentScore);
  console.log('current score' + currentScore);

  if (currentScore === targetNumber) {
    wins++;
    console.log('wins ' + wins);
    targetNumber = Math.floor(Math.random() * 99) + 1;
    console.log('target Number ' + targetNumber);
    currentScore = 0;
    randomNumbers = [];
    $('#target-score').text(targetNumber);
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#current-score').text(currentScore);
  }
  if (currentScore > targetNumber) {
    losses++;
    targetNumber = Math.floor(Math.random() * 99) + 30;
    console.log('losses ' + losses);
    console.log('target Number ' + targetNumber);
    currentScore = 0;
    randomNumbers = [];
    $('#target-score').text(targetNumber);
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#current-score').text(currentScore);
  }
});
