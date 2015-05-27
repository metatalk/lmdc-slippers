$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '799405950127875',
      version: 'v2.3' // or v2.0, v2.1, v2.0
    });
    $('.btn--share').click(function(e) {
      e.preventDefault();
      FB.ui(
        {
          method: 'share',
          href: window.location.href
        }
      );
    });
  });
  $(function () {
    $('#subForm').submit(function (e) {
      e.preventDefault();
      $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
          if (data.Status === 400) {
            alert("Error: " + data.Message);
          } else { // 200
            $('#signup h1').text('Hooray! More information is coming your way!');
            $('#signup p').text('You will receive an e-mail in the next few days with all the information on how to obtain a pair of slippers.').after('<p><a class="btn btn--share">Tell your friends</a></p>');
            $('#signup form').hide();
          }
        });
    });
  });
  $('.slippers__cta').click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('#details').offset().top
    },500);
  });
  $('.btn--submit--full').click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('#signup').offset().top
    },500,function() {
      //$('#signup').addClass('active');
    });
  });
  $('.gallery').flickity({
    imagesLoaded: true,
    pageDots: false,
    cellAlign: 'left'
  });
  $('.gallery-nav').flickity({
    asNavFor: '.gallery',
    imagesLoaded: true,
    percentPosition: false,
    contain: true,
    pageDots: false,
    prevNextButtons: false
  });
});