// Slick
$('.cover-slick').on('init', function () {
    $(this).css('opacity', '1');
});

$('.cover-slick').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: true,
    fade: true,
});


// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
var buttonIcon = $('.hamburger-button i'); // アイコンの<i>要素を取得
var buttonText = $('.hamburger-button__text'); // テキストの<p>要素を取得

$('.hamburger-button').on('click', function () {
    // メニューの開閉状態を切り替える
    hamburger.toggleClass('hamburger-menu-active');
    
    // アイコンを切り替える
    if (hamburger.hasClass('hamburger-menu-active')) {
        buttonIcon.removeClass('fa-bars').addClass('fa-times'); // 「×」アイコンに変更
        buttonText.addClass('hidden'); // テキストを非表示
    } else {
        buttonIcon.removeClass('fa-times').addClass('fa-bars'); // ハンバーガーアイコンに戻す
        buttonText.removeClass('hidden'); // テキストを再表示
    }
});


// リンクがクリックされたら
$('.hamburger-menu a').on('click', function () {
    // .hamburger-menu-activeクラスを削除してメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
    
    // アイコンをハンバーガーアイコンに戻す
    buttonIcon.removeClass('fa-times').addClass('fa-bars');
    
    // テキストを再表示
    buttonText.removeClass('hidden');
});


// ページ内リンク先がヘッダーの下に隠れないようスクロール位置を調整
$('a[href="javascript:void(0)"]').click(function () {
    var target = $(this).data('target'); // data-target 属性からターゲットを取得
    var targetElement = $('[data-section="' + target + '"]'); // 対応するセクションを取得

    if (targetElement.length) {
        var browserWidth = window.outerWidth;

        var fontSize = 10;
        var headerHeight = 7.6 * fontSize + fontSize;

        if (browserWidth < 768) {
            fontSize = 10 / 375 * browserWidth;
            headerHeight = 6 * fontSize;
        } else if (browserWidth < 1024) {
            fontSize = browserWidth / 100;
            headerHeight = 7.6 * fontSize + fontSize;
        }

        // スクロール位置を調整しながら移動
        $('body,html').animate({
            scrollTop: targetElement.offset().top - headerHeight
        }, 400, 'swing');

    }
});



// スクロールアニメーション
function addWaypointAnimation(elementClass, animationClass) {
    $(elementClass).waypoint({
        handler: function (direction) {
            if (direction === 'down') {
                $(this.element).addClass(animationClass);
                this.destroy();
            }
        },
        offset: '90%',
    });
}

addWaypointAnimation('.fadeIn', 'animate__fadeIn');
addWaypointAnimation('.fadeInUp', 'animate__fadeInUp');
addWaypointAnimation('.fadeInRight', 'animate__fadeInRight');
addWaypointAnimation('.fadeInLeft', 'animate__fadeInLeft');


$(document).ready(function () {
    // 1つ目の要素を最初にフェードイン
    $('.fade-in1').css('opacity', 1); // 1つ目の要素をフェードイン
    setTimeout(function () {
        $('.fade-in2').css('opacity', 1); // 2つ目の要素を次にフェードイン
    }, 500); 

    setTimeout(function () {
        $('.fade-in3').css('opacity', 1); // 3つ目の要素を次にフェードイン
    }, 1000); 

});



$(document).ready(function () {
    // 初期状態でアコーディオンメニューをすべて非表示にする
    $('.plan__content,.plan__details').hide();
    $('.plan__accordion, .plan__inner-title').removeClass('active');
});

// アコーディオンメニュー
$('.plan__accordion').on('click', function (e) {
    $(this).toggleClass('active');
    $(e.currentTarget).next().slideToggle();
    setTimeout(function () {
        Waypoint.refreshAll();
    }, 500);
});

$('.plan__inner-title').on('click', function (e) {
    $(this).toggleClass('active');
    $(e.currentTarget).next().slideToggle();
    setTimeout(function () {
        Waypoint.refreshAll();
    }, 500);
});



// 当塾についてのスライダー
const slider = document.querySelector('.about__slider-item-list');

function activate(e) {
    const items = document.querySelectorAll('.about__content');
    e.target.matches('.about__slider-btn--next') && slider.append(items[0])
    e.target.matches('.about__slider-btn--prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);









// ボタンを押すと画像がポップアップ
// モーダルを開く処理
const btns = document.querySelectorAll(".modal-toggle");
btns.forEach(function (btn) {
    btn.onclick = function () {
        const modalAttribute = btn.getAttribute('data-modal');
        const modalShow = document.querySelector(`.modal-outer.${modalAttribute}`);
        modalShow.classList.add('show');
    };
});

// モーダルを閉じる処理 (×ボタン)
const closeBtnTop = document.querySelectorAll(".close-btn-top");
closeBtnTop.forEach(function (btn) {
    btn.onclick = function () {
        const modal = btn.closest('.modal-outer');
        modal.classList.remove('show');
    };
});

// モーダルを閉じる処理 (モーダル外をクリック)
const modalOuter = document.querySelectorAll('.modal-outer');
modalOuter.forEach(function (outer) {
    outer.onclick = function (event) {
        if (!event.target.closest('.modal-inner')) {
            outer.classList.remove('show');
        }
    };
});


// リンクからセクションへ移動
document.querySelectorAll('.scroll-to').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // デフォルトのリンク動作を無効化
        const target = this.getAttribute('data-target'); // data-target属性の値を取得

        if (target === 'home') {
            // トップにスクロールする処理
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // 通常のセクションへのスクロール処理
            const targetElement = document.querySelector(`[data-section="${target}"]`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

