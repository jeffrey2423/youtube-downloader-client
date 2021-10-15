import React from 'react';
import HaderLogo from '../images/mp3.svg'

const Header = (props) => {
    return (
        <React.Fragment>
            <nav class="navbar fixed-top navbar-dark bg-dark">
                <a class="navbar-brand" href="/">
                    <img
                        src={HaderLogo}
                        width="30"
                        height="30"
                        class="d-inline-block align-top"
                        alt="HaderLogo"
                    />
                    Youtube Downloader
                </a>
            </nav>
        </React.Fragment>
    )
}

export default Header