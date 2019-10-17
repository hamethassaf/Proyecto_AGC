import React, { Component } from "react";


class Map extends Component {

    initMap() {
        var directionsRenderer = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: { lat: 37.77, lng: -122.447 }
        });
        directionsRenderer.setMap(map);

        calculateAndDisplayRoute(directionsService, directionsRenderer);
        document.getElementById('mode').addEventListener('change', function () {
            calculateAndDisplayRoute(directionsService, directionsRenderer);
        });
    }

    calculateAndDisplayRoute(directionsService, directionsRenderer) {
        var selectedMode = document.getElementById('mode').value;
        directionsService.route({
          origin: {lat: 37.77, lng: -122.447},  // Haight.
          destination: {lat: 37.768, lng: -122.511},  // Ocean Beach.
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status == 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

    render() {
        return (
            <div id="map" class="offset">

                <div class="col-12 narrow text-center">
                    <h3 class="heading">Mapa para generar <span>RUTAS</span></h3>
                    <div class="heading-underline"></div>
                </div>

                <div class="row">

                    <div class="col-md-6">
                        <div class="mapa text-uppercase font-weight-bold">
                            <h3 class="text-center text-uppercase">Opciones</h3>

                            <div class="form-group">
                                <label>Barrio</label>
                                <select class="form-control" id="neighborhood">
                                    <option>La mata</option>
                                    <option>..</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Comuna</label>
                                <select class="form-control" id="commune">
                                    <option>La mata</option>
                                    <option>..</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Puesto de votación</label>
                                <select class="form-control" id="polling">
                                    <option>La mata</option>
                                    <option>..</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Cantidad de pasajeros</label>
                                <select class="form-control" id="passengers">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>

                            <div class="text-center">
                                <a class="btn btn-secondary btn-md" href="#">Generar Ruta</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="mapa text-center">
                            <div id="floating-panel">
                                <b>Mode of Travel: </b>
                                <select id="mode">
                                    <option value="DRIVING">Driving</option>
                                    <option value="WALKING">Walking</option>
                                    <option value="BICYCLING">Bicycling</option>
                                    <option value="TRANSIT">Transit</option>
                                </select>
                            </div>
                            <div id="map"></div>

                            {this.initMap}
                            {this.calculateAndDisplayRoute}
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Map;