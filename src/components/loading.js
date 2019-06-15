import React from "react";

const Loading = () => {

    return (
        <section className="photos">
            <div className="text-center">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </section>
    );
}
export default Loading;