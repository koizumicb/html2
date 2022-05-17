$(function() {
    $('#login-show').click(function(){
      $('#login-modal').fadeIn();
    });
    
    $('.close-modal').click(function(){
      $('#login-modal').fadeOut();
    });
  
  });

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.6092721, lng: 140.1056915 },
      zoom: 15,
    });
  }
