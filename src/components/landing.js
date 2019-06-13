import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const Landing = () => {

    const [photos, setPhotos] = useState(null);
    
    const fetchPhotos = async (sol, camera) => {
        const response = await axios(`${API_BASE_URL}/api/mars/${sol}/${camera}`);
        setPhotos(response.data)
        console.log(response.data); // debug
    }

    useEffect(() => {
        fetchPhotos('2434','fhaz');
    }, []);

    let view;
    if (!photos) {
        view = '';
    }
    else if (photos) {
        view = photos[0].id;
    }

    return (
        <div>
            <h1>Mars Photos</h1>
            {view}
        </div>
    );
}
export default Landing;