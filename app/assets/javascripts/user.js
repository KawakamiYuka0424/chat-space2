$(function(){

  var user_list = $("#user_search_result");

  function appendUsers(user) {
    var html =`<div class="chat-group-user clearfix js-chat-user">
                <p class="chat-group-user__name">
                ${user.name}
                </p>
                <a class="user_search_add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加
                </a>
                </div>`

    user_list.append(html);
  }


  $(function() {
    $('.chat-group-form__input').on('keyup', function() {

      var input = $('').val();
      $.ajax({
        url: '/users',
        type: "GET",
        data: { keyword: input },
        dataType: 'json',
      })

    })
  })
});