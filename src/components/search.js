import React, { useState } from "react";
import axios from "axios";
import validator from "validator";
import { API_BASE_URL } from "../config";

const Search = props => {

    const [formData, setFormData] = useState({
        sol: '',
        camera: ''
    });

    const [formError, setFormError] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const fetchPhotos = async (sol, camera) => {
        props.displayLoading();
        setDisabled(true);
        const response = await axios(`${API_BASE_URL}/api/mars/${sol}/${camera}`, {headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }});
        props.displayPhotos(response.data);
        setDisabled(false);
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Sanitize sol input
        let data = validator.trim(formData.sol)
        data = validator.toInt(data);

        // Validation
        if (isNaN(data)) {
            setFormError(
                <div className="alert alert-danger" role="alert">
                    Must be a number
                </div>
            );
        }
        else if (/[a-zA-Z]/.test(formData.sol)) {
            setFormError(
                <div className="alert alert-danger" role="alert">
                    Must not contain any letters or characters
                </div>
            );
        }
        else if (data < 0 || data > 2434) {
            setFormError(
                <div className="alert alert-danger" role="alert">
                    Must be a number between 0 and 2434
                </div>
            );
        }
        else {
            setFormError(null)
            fetchPhotos(formData.sol, formData.camera);
        }
    };

    return (
        <form className='search-container' action='submit' id='searchForm' onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="sol">Mission Sol</label>
                {formError}
                <input type="text" className="form-control" id="sol" onChange={e => setFormData({ ...formData, sol: e.target.value })} />
                <small id="solHelp" className="form-text text-muted">Enter a number between 0 to 2434 of the mission sol you would like to search.</small>
            </div>
            <div className="form-group">
                <label htmlFor="camera">Camera</label>
                <select className="form-control" id="camera" onChange={e => setFormData({ ...formData, camera: e.target.value })} >
                    <option value=''>Any</option>
                    <option>FHAZ</option>
                    <option>NAVCAM</option>
                    <option>MAST</option>
                    <option>CHEMCAM</option>
                    <option>MAHLI</option>
                    <option>MARDI</option>
                    <option>RHAZ</option>
                </select>
            </div>
            <button disabled={disabled} type="submit" className="btn btn-primary btn-submit">Submit</button>
        </form>
    );
}
export default Search;