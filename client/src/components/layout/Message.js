import React, { Component } from "react";

class Message extends Component {
    render() {
        return (
            <div id="messages" class="offset">
                <div class="fixed-background">
                    <div class="row dark">
                        <div class="col-12">
                            <h3 class="heading text-center">Mensajeria</h3>
                            <div class="heading-underline"></div>
                        </div>
                        <div class="col-md-12">
                            <div class="jumbotron"></div>
                        </div>
                    </div>
                    <div class="fixed-wrap">
                        <div class="fixed"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;