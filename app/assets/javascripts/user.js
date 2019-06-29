$(function() {
  $('.chat-group-form__input').on('keyup', function() {

    var input = $('#user-search-field').val();
    $.ajax({
      url: '/users',
      type: "GET",
      data: { keyword: input },
      dataType: 'json',
    })

  })
})