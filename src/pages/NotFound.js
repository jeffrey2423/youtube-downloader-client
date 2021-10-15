import React, { Component } from "react";

import NotFoundIcon from '../images/notfound.svg'

export default class NotFound extends Component {
    render() {
        return (            
            <img src={NotFoundIcon} class="rounded mx-auto d-block" alt="Not Found"/>
        );
    }
}