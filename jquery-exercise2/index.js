$('.numbers').hide();
$('.list').hide();

$('button').on('click', () =>{
  $('.list').slideDown();
  $('.list').toggle();
});

$('.numb').on('click', () => {
  $('.numbers').show();
  $('.letters').hide();
});

$('.alpha').on('click', () => {
  $('.letters').show();
  $('.numbers').hide();
});