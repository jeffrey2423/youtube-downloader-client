import React, { Component } from "react";
import Spinner from "../components/Spinner";

import { api } from '../api/api'

import { mostrarMensaje } from '../resources/general/General'

import fileDownload from 'js-file-download'


export default class DownLoader extends Component {
    state = {
        Url: "",
        Error: false,
        Loading: false
    }


    render() {

        const handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };

        const HandleSubmit = async (e) => {
            e.preventDefault();
            try {
                if (this.state.Url === "") {
                    mostrarMensaje.Error("You must specify an url")
                } else {
                    this.setState({ Loading: true });
                    const response = await api.youtubeDownloader.Download(this.state.Url)
                    console.log(response)
                    if (response.status === 500) {
                        mostrarMensaje.Error(response.statusText)
                    } else {
                        fileDownload(response.data, response.statusText);
                        mostrarMensaje.Exito(`${response.statusText} successfully downloaded`)
                    }
                }
            } catch (error) {
                mostrarMensaje.Error(error.message)
            } finally {
                this.setState({ Loading: false });
                this.setState({ Url: "" });
            }

        }


        if (this.state.Loading) {
            return <Spinner />;
        }
        return (
            <React.Fragment>
                <form onSubmit={HandleSubmit} class="mt-5">
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" class="sr-only">URL</label>
                        <input
                            type="url"
                            class="form-control"
                            id="Url"
                            name="Url"
                            placeholder="URL"
                            onChange={handleChange}
                        />
                        <button type="submit" class="btn btn-primary btn-block mt-2">Download MP3</button>
                    </div>

                </form>
            </React.Fragment>
        );
    }
}