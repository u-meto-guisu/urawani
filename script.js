$(function(){
  $('.top-btn').click(function(){
      $('html, body').animate({
        'scrollTop':0
      },600);
  });
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },600);
  });
  $('.navToggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
  $('.header-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },600);
    $('.navToggle').removeClass('active');
    $('.globalMenuSp').removeClass('active');
  });
  $('.top-btn').click(function(){
    $('.navToggle').removeClass('active');
    $('.globalMenuSp').removeClass('active');
  });
});

$(window).scroll(function () {
  var pos = $('main').offset();
  if ($(this).scrollTop() > pos.top) {
    $('header').fadeIn();
  } else {
    $('header').fadeOut();
  }
});

$(window).scroll(function () {
  var pos = $('main').offset();
  if ($(this).scrollTop() > pos.top) {
    $('.navToggle').fadeIn();
  } else {
    $('.navToggle').fadeOut();
  }
});

jQuery(function($) {
$(window).on('load scroll', function (){

  var box = $('.fadeIn');
  var animated = 'animated';

  box.each(function(){

    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });
});
})


const mediaQuery = window.matchMedia('(max-width: 767px)');

// ページが読み込まれた時に実行
handle(mediaQuery);

// ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
mediaQuery.addListener(handle);

function handle(mm) {
  if (mm.matches) {
    $(window).on("load", function() {
        $('#mobiletop').fadeIn(2000);
    });
    // ウィンドウサイズ768px以下のときの処理
  } else {
    $(window).on("load", function() {
        $('#top').fadeIn(2000);
    });
    // それ以外の処理
  }
}

$('.popup-open').click(function() {
  // 背景を固定してスクロールさせない
  $('html, body').css('overflow', 'hidden');
  // 背景を固定してスクロールさせない

});

$('.popup-close').click(function() {
  // 背景の固定を解除する
  $('html, body').removeAttr('style');
  // 背景の固定を解除する

});
