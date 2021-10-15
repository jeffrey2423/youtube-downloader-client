import axios from 'axios';
import { BASE_URL } from '../config/config'

async function callApi(endpoint, options = {}) {

    options.url = BASE_URL + endpoint
    options.headers = {
        'Content-Type': 'application/json'
    };

    const response = await axios(options)

    return response;
}

export const api = {
    youtubeDownloader: {
        Download(youtubeUrl) {
            return callApi(`DownloadVideo?url=${youtubeUrl}`, {
                method: 'get',
                responseType: 'blob'
            });
        }
    }
}
