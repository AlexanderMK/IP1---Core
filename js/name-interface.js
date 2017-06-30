
$(document).ready(function(){
  $('#username').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();

    $('#username').hide();
    $('#solution').prepend('<p>Thank you, ' + name + ' has been added to our list!</p>');
  });
});
