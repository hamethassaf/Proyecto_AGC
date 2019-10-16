import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div id="contact" class="offset">
	<footer>
	<div class="row justify-content-center">
	<div class="col-md-5 text-center">
	<img src="img/logo.png">
	<p>Está aplicación web esta diseñada para ofrecer un mejor manejo de campaña electoral al momento de
	agendar actividades, lanzar mensajes via sms y gestionar rutas para los votantes.
	</p>
	<strong>Información de contacto</strong>
	<p>(+57) 3185429104</p>		
	<a class="socialbutton" href="#"><i class="fab fa-facebook-square"></i></a>
	<a class="socialbutton" href="#"><i class="fab fa-twitter-square"></i></a>
	<a class="socialbutton" href="#"><i class="fab fa-google"></i></a>	
	</div>
	
	<hr class="socket">	
	&copy; Hameth Assaf | Ana Hernandez | Kevin Picon
	</div>
	</footer>
</div>
        );
    }
}

export default Footer;