import React, { Component } from "react";

class Map extends Component {
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
                            <h3 class="text-center text-uppercase">Mapa</h3>

                            <div class="col-md-12"><iframe width="100%" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63344.926281358654!2d-73.16799746499117!3d7.119289854153512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68157af751c0ed%3A0x75a0e4551148c36c!2sBucaramanga%2C%20Santander!5e0!3m2!1ses-419!2sco!4v1569888904815!5m2!1ses-419!2sco" scrolling="no" frameborder="0"></iframe></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Map;