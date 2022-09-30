// 初回限定キャンペーン実施中
// 要素を「下からフワッ」と出現させる為の 
//( waypoint(ウェイポイント)と、Animate.css )を使った関数

/* globals $ */
$('.cam-img').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element)
        .removeClass('animate__fadeOutDown')
        .addClass('animate__fadeInUp');
    } else if (direction === 'up') {
      $(this.element)
        .removeClass('animate__fadeInUp')
        .addClass('animate__fadeOutDown');
    }
  },
  offset: '70%',
});


//これらの原因はシャンプーにありました
// 要素を「左右からスライドさせて」出現させる為の 
//( waypoint(ウェイポイント)と、Animate.css )を使った関数

$('.point-l').waypoint({  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },
  offset: '60%',
});

$('.point-r').waypoint({  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },
  offset: '60%',
});


$('.bio-imgs-l').waypoint({  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '60%',
});
$('.bio-imgs-r').waypoint({  
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '60%',
});


// お客様からのよくあるご質問
// アコーディオン

$('.question').click(function(e){
  e.preventDefault();
  $(this).next('.answer').slideToggle();
});


//お支払い方法
$('#contact_form').on('submit', function (e) {
  var username = $('#username').val(); /* お名前 */
  var userkana = $('#userkana').val(); /* フリガナ */
  var postal = $('#postal-code').val(); /* 郵便番号 */
  var prefectures = $('#prefectures'); /* 都道府県 */
  var city = $('#city').val(); /* 市区町村 */
  var tel = $('#tel').val(); /* 電話番号 */
  var email = $('#email').val(); /* メールアドレス */
  var password = $('#password').val(); /* パスワード */
  var pay = $('input[type=radio][name=method]:checked').val(); /* お支払い方法 */


  var error_text = '';

  if (username.trim() === '') {
    error_text = 'お名前を入力してください';

  } else if (userkana.trim() === '') {
    error_text = 'フリガナを入力してください';
  } else if (!userkana.match(/^[ァ-ヴ　]+$/)) {
    error_text = 'フリガナは全角のカタカナとスペースのみを入力してください';

  } else if (postal.trim() === '') {
    error_text = '郵便番号を入力したください';
  } else if (!postal.match(/^[0-9]{3}[0-9]{4}$/)) {
    error_text = '郵便番号は半角英数字７桁で入力してください';

  } else if (prefectures.val() === '') {
    error_text = '都道府県が選択されていません';

  } else if (city.trim() ==='') {
    error_text = '市区町村を入力してください';
  } else if (!city.match(/^[^ -~｡-ﾟ]+$/)) {
    error_text = '市区町村は全角のみで入力してください';

  } else if (tel.trim() === '') {
    error_text = '電話番号を入力してください';
  } else if (!tel.match(/^0[0-9]{9,10}$/)) {
    error_text = '電話番号は半角数字10桁か11桁で入力してください';

  } else if (email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  } else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
    error_text = 'メールアドレスは正しい書式で入力してください';

  } else if (password.trim() === '') {
    error_text = 'パスワードを入力してください';
  } else if (!password.match(/^[a-zA-Z0-9]{4,}$/)) {
    error_text = 'パスワードは４文字以上の英数字で入力してください';
  } else
  
  if( pay === undefined ) {
    error_text = '選択されていません';
    // return false;
  } else {
    error_text = '';
    //return false;
  }


  if (error_text !== '') {
    e.preventDefault();
    $('#form_has_error').text(error_text);
  } else {
    e.preventDefault();
    $('#form_has_error').text('');
  }
});


//お支払い方法(ボタン選択)
$('#pay').click(function() {
  if ($('input[name=method]:eq(0)').prop('checked')) {
      $('input[name=method]:eq(1)').prop('checked', false);
      $('input[name=method]:eq(2)').prop('checked', false);
  } else if ($('input[name=method]:eq(1)').prop('checked')) {
      $('input[name=method]:eq(0)').prop('checked', false);
      $('input[name=method]:eq(2)').prop('checked', false);
  } else if ($('input[name=method]:eq(2)').prop('checked')) {
      $('input[name=method]:eq(0)').prop('checked', false);
      $('input[name=method]:eq(1)').prop('checked', false);
  }
});
