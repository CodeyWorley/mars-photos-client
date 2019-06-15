import React, { useState } from "react";

import Search from "./search";
import PhotoView from "./photo-view";
import Loading from "./loading";

const Landing = () => {

    const [view, setView] = useState(null)

    const displayLoading = () => {
        setView(<Loading />)
    }

    const displayPhotos = photos => {
        if (photos.length === 0) {
            setView(
                <div className="text-center photo-card card">
                    <div className="card-body">
                        <p className="card-text">Unable to find photos for this camera on this sol.</p>
                    </div>
                </div>
            )
        }
        else {
            setView(<PhotoView data={photos} />);
        }
    }

    return (
        <div>
            <h1 className="header-title">Mars Photos: Curiosity Rover</h1>
            <Search displayLoading={() => displayLoading()} displayPhotos={(photos) => displayPhotos(photos)} />
            {view}
        </div>
    );
}
export default Landing;