$('#show').click(function() {
    $('#message').show()
});

$('#hide').click(function() {
    $('#message').hide()
});

// $('') est la même chose que `document.{getElementById ou ClassName}`
// .click() reviens à faire un `addEventListener('click')`