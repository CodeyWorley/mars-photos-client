import React from "react";

const PhotoView = props => {

    let photoList;
    if(props.data) {
        photoList = props.data.map(photo => {
            return (
                <div key={photo.id} className="photo-card card">
                    <img className="card-img-top" src={photo.img_src} alt={photo.id} />
                    <div className="card-body">
                        <p className="card-text">Taken on sol {photo.sol} (approximate Earth date: {photo.earth_date}) with the {photo.camera.name} camera.</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <section className="photos">
            {photoList}
        </section>
    );
}
export default PhotoView;