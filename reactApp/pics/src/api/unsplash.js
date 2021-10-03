import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID J1WQ9m0Jmm7YN6O0Z2SnTyrMUwo9LM41lghbqT3xfeQ'
    }
});