import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });

        setVideos(response.data.items);
    };
    // It's conventional for js to return as objects but for React they choose an array
    return [videos, search];
};

export default useVideos;