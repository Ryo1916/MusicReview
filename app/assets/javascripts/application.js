// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require infinite-scroll.pkgd.min
//= require jquery.raty.js
//= require popper
//= require bootstrap
//= require creative/cbpAnimatedHeader
//= require creative/classie
//= require creative/jquery.easing.min
//= require creative/jquery.fittext
//= require creative/wow.min
//= require creative/creative
//= require jquery.turbolinks
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  // validate avatar
  $('.user').bind('change', function(){
    var size_in_megabytes = this.files[0].size/1024/1024;
    if (size_in_megabytes > 5) {
      alert('Maximum file size is 5MB. Please choose a smaller file.');
    }
  });

  // $(window).on('scroll', function () {
  //   var doch = $(document).innerHeight(); //ページ全体の高さ
  //   var winh = $(window).innerHeight(); //ウィンドウの高さ
  //   var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
  //   if (bottom <= $(window).scrollTop()) {
  //     // FIXME: 1回読み込まれただけで全てページングされてしまう
  //     $('.jscroll').jscroll({
  //       contentSelector: '.artists-list',
  //       nextSelector: 'a[rel="next"]'
  //     });
  //   }
  // });
});

$(document).on('turbolinks:load', function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#avatar_img_prev').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  // display uploaded image
  $("#user_avatar").change(function(){
    $('#avatar_img_prev').removeClass('hidden');
    $('.avatar_present_img').remove();
    readURL(this);
  });
});

// FIXME: ちょいスクロールしただけで全アーティストが読み込まれる
$(window).on('scroll', function () {
  var doch = $(document).innerHeight(); //ページ全体の高さ
  var winh = $(window).innerHeight(); //ウィンドウの高さ
  var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
  var path = window.location.pathname;
  if (bottom <= $(window).scrollTop()) {
    if (path == '/artists') {
      $('#artists-list').infiniteScroll({
        path: "a#scroll-next",
        append: ".artist",
        history: false,
        prefill: false,
        status: '.page-load-status'
      });
    } else {
      $('#albums-list').infiniteScroll({
        path: "a#scroll-next",
        append: ".album",
        history: false,
        prefill: false,
        status: '.page-load-status'
      });
    }
  }
});
