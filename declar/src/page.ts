import $ from 'jquery';

$(function () {
  $('body').html('<div>123</div>');
  //new 对象
  new $.fn.init();
});
