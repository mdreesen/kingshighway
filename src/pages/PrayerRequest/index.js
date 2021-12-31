import React from 'react';
import "./prayer.css";




const PrayerRequest = () => {
    return (

        <div className="form-background">
            <div className="form">
            <h1 className="section_header">Prayer Requests</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Name</p>
                            <input name="name" />
                    </label>
                </fieldset>
                 <button type="submit">Submit</button>
            </form>

            </div>
                
            
        </div>
    );
};

export default PrayerRequest;