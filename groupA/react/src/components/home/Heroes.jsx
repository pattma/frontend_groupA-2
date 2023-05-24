import React from 'react';
import '../home/home.css';

const Heroes = () => {
  return (
    /* Add Heros from Bootstrap */
    <div className="my-5 homeBox">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg homeHero">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1">What is Fitbook?</h1>
                <p className="lead">Fitbook is the activity tracker web application is designed for busy people who want to keep track of their physical activities but don't have much time to do the activities.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold btnColor">Learn More</button>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src="https://www.celebrityfitness.co.th/th/-/media/project/evolution-wellness/celebrity-fitness/south-east-asia/malaysia/blogs/killer-routine-for-sexy-sculpted-arms/tiles1.jpg" alt="" width="720" />
            </div>
        </div>
    </div>
  );
};

export default Heroes;