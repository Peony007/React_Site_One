import $ from 'jquery';

// const openNav = () => {
//   document.getElementById('myNav').style.width = '100%';
// };
// const closeNav = () => {
//   document.getElementById('myNav').style.width = '0%';
// };
// const openNav_1 = () => {
//   document.getElementById('myNav_1').style.height = '100%';
// };
// const closeNav_1 = () => {
//   document.getElementById('myNav_1').style.height = '0%';
// };

$(document).ready(function () {
  $(window).on('scroll', function () {
    if (window.scrollY > 800) {
      $('.topnav').addClass('topnav_fixed');
      $('.topnav').css('top', '-200px');
      $('.topnav').css('transition', '0.4s');
      $('.scrollTop').addClass('scroll_fixed');
    } else {
      $('.topnav').removeClass('topnav_fixed');
      $('.scrollTop').removeClass('scroll_fixed');
    }
  });
});
