//variables globales map
document.body.addEventListener("load", iniciarGoogleMap());

var map;

function iniciarGoogleMap() 
      {
  
        crearMapa();
        
        var icono = 'http://gmaps-samples.googlecode.com/svn/trunk/markers/green/blank.png';
        var titulo = 'Pulsa aquí';
        var mensaje = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

        var posicion = new google.maps.LatLng(-0.140825, -78.469967);

        crearMarcador(icono,titulo,mensaje,posicion);


      }

function crearMapa(){
          var mapOptions = {
          center: new google.maps.LatLng(-0.140825, -78.469967),
          zoom: 17,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);

}
      
function crearMarcador(icono,titulo,mensaje, posicion){
  var marcador = new google.maps.Marker({
    position: posicion, 
    map: map, 
    title: titulo, 
    icon: icono, 
    cursor: 'default', 
    draggable: true });
        
        var mensajeMostrarTXT = mensaje;
        var mensajeMarcador = new google.maps.InfoWindow({ content: mensajeMostrarTXT });

        google.maps.event.addListener(marcador,'click', function(){ mensajeMarcador.open(map,marcador);} );
}
      google.maps.event.addDomListener(window, 'load', initialize);