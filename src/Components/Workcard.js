import React from 'react';
import './Workcard.css';

function Workcard({ title, text, imgsrc, site }) {
    return (
        <div className='col-lg-4 col-md-6 my-3'>
            <div className='project-container'>
                <div className='img_project'>
                    <img src={imgsrc} alt={title} />
                </div>
                <h2 className='project-title'>{title}</h2>
                <p className='pro-details'>{text}</p>
                {site ? (
                    <a href={site} target="_blank" rel="noopener noreferrer" className='btn btn_new'>View Site</a>
                ) : (
                    <p className=" site-not-available">This project is not available directly on the website.</p>
                )}
            </div>
        </div>
    );
}

export default Workcard;
