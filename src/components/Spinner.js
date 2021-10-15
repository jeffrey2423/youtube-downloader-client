import React from 'react'
import './styles/Spinner.css'

const Spinner = (props) => {
    return (
        <React.Fragment>
            <div class="d-flex align-items-center justify-content-center">
                <div class="spinner-border text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Spinner