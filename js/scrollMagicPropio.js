$(document).ready(function(){

		var controller = new ScrollMagic.Controller();
		var tween = TweenMax.from("#ejecutivoDos", 1, {left:"360px", opacity:0}, 0.5);
		var escenaLogo = new ScrollMagic.Scene({triggerElement: "#triggerImagenEjecutivo", duration: 300}).setTween(tween).addTo(controller);
		
		var escenaClientes = new ScrollMagic.Scene({
	  		triggerElement: '#triggerClientes',
	  		duration:0
		});

		escenaClientes.on("enter", function (event) {
				TweenMax.from("#clientes", 1, {opacity:0}, 1);
		});
		controller.addScene(escenaClientes);
	});
	