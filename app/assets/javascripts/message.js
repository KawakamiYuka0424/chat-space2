$(document).on('turbolinks:load', function(){
  $(function() {
    function buildHTML(message){
    var html = `<div class="message">
                  <div class="upper-message">
                      <div class="upper-message__user-name">
                          ${ message.user_name }
                      </div>
                      <div class="upper-message__date">
                          ${ message.time }
                      </div>
                  </div>
                  <div class="lower-message">
                      <p class="lower-message__content">
                          ${ message.content }
                      </p>
                  </div>
               </div>`
  return html; 
    }

    function scrollBottom(){
      var target = $('.message').last();
      var position = target.offset().top + $('.message').scrollTop();
      $('.message').animate({
        scrollTop: 0
      }, 300, 'swing');
    }
    
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action'); 
    $.ajax({  
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html);
      $('#message_content').val(''); //input内のメッセージを消しています。

      
      scrollBottom()

    })

    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.submit-btn').prop('disabled', false);//ここで解除している
    })
  })
});