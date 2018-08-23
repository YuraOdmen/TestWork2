$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

new WOW().init();

function initMap() {
  var coordinates = {lat: 49.79514, lng: 24.005484},

  

      map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          disableDefaultUI: false,
          scrollwheel:false,
          zoom: 16,
      }),

      marker = new google.maps.Marker({
          position: coordinates,
          map: map,
      }),
      image = 'img/icons/pin.png',
      marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: image
});
}
  
  $('.burger').click(function () {
	$(this).toggleClass('open');
	$('.top_nav').toggleClass('menu_disp');
  });


