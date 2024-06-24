$(function() {
  $('.select').on('change', function(e){
    const value = e.target.value;
    $('.question').addClass('hidden');
    if (value.includes('conviva')) {
      $('.' + value).removeClass('hidden');
    } else {
      $('.question-' + value).removeClass('hidden');
    }
  });

  $('form').on('submit', function(e){
    e.preventDefault();
    let value = $('#idade').val().trim();
    try {
      value = parseInt(value);
    } catch (e) {
      alert('Preencha a idade corretamente');
    }

    if (value < 18) {
      alert('Desculpe, você precisa ter pelo menos 18 anos para participar de um Conviva :(')

    }
  })
})