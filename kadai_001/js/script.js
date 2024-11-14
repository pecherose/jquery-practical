$(function () {
  // slickにてカルーセルを実装
  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false
  });


 // リンクのホバー時に不透明度を実施+Worksセクション画像も同様で実施
 $('a, .worksp img').hover(
  function () {
    $(this).animate({ 'opacity': 0.5 }, 300);
  },
  function () {
    $(this).animate({ 'opacity': 1.0 }, 300);
  }
);

  // 100pxでTOPボタンの表示を切替え  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#topb').fadeIn();
    } else {
      $('#topb').fadeOut();
    }
  });

// スクロールをなめらかに
$('a[href^="#"]').click(function () {
  const speed = 500;
  const href = $(this).attr('href');
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
});

  // スクロール時にセクションでフェードイン
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Workspのimgをクリックでモーダルする
  $('.worksp img').click(function () {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.big-img').attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $('.modal').fadeIn();
  });

    // ×ボタンで閉じる
    $('.close-btn').click(function () {
      $('.modal').fadeOut();
    });
});