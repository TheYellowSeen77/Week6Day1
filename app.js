const button = document.getElementById('clickMe');
button.addEventListener('click', function() {
  $('#row').toggleClass('darkModetr');
  $('#row1').toggleClass('darkModetr');
  $('#row2').toggleClass('darkModetr');
  $('#row3').toggleClass('darkModetr');
  $('#row4').toggleClass('darkModetr');
  $('#row5').toggleClass('darkModetr');
  $('#row6').toggleClass('darkModetr');
  $('#row7').toggleClass('darkModetr');
  $('#row8').toggleClass('darkModetr');
  $('#background').toggleClass('darkModeBody');
  $('#clickMe').toggleClass('darkModeButton');
  console.log('hi');
});