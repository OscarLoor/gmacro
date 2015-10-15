var tweenUno=TweenMax.to("#quienesSomos img", 2, {y:-20,  ease:Bounce.easeOut});
tweenUno.reverse();
$( "#quienesSomos" ).mouseover(function() {
	tweenUno.play();
});

$( "#quienesSomos" ).mouseout(function() {	
  	tweenUno.reverse();
});

var tweenDos=TweenMax.to("#necesitasAyuda img", 2, {y:-20,  ease:Bounce.easeOut});
tweenDos.reverse();
$( "#necesitasAyuda" ).mouseover(function() {
	tweenDos.play();
});

$( "#necesitasAyuda" ).mouseout(function() {	
  	tweenDos.reverse();
});

var tweenTres=TweenMax.to("#negocioEnCrecimiento img", 2, {y:-20,  ease:Bounce.easeOut});
tweenTres.reverse();
$( "#negocioEnCrecimiento" ).mouseover(function() {
	tweenTres.play();
});

$( "#negocioEnCrecimiento" ).mouseout(function() {	
  	tweenTres.reverse();
});