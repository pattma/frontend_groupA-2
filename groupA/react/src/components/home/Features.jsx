import React from 'react';
import '../home/home.css';

const Features = () => {
  return (
    /* <!-- Add Features form Bootstrap --> */
    <div className="px-5 py-5 mt-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Features</h2>
        <div className="row g-4 py-5 mt-2 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
                <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="25" 
                        height="25" 
                        fill="currentColor" 
                        className="bi bi-graph-up" 
                        viewBox="0 0 16 16"
                    >
                        <path 
                        fillRule="evenodd" 
                        d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="fs-2">Tracking & Analyze</h3>
                    <p>
                        Tracking and analyzing your workout activity monitoring physical
                        exercise performance and progress over time.
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="25" 
                        height="25" 
                        fill="currentColor" 
                        className="bi bi-calendar-event" 
                        viewBox="0 0 16 16"
                    >
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fs-2">Create & Join Events</h3>
                    <p>
                        Creating and joining workout events involves organizing and
                        participating in planned physical exercise activities with a
                        group of people.
                    </p>
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="25" 
                        height="25" 
                        fill="currentColor" 
                        className="bi bi-people" 
                        viewBox="0 0 16 16"
                    >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                    </svg>
                </div>
                <div>
                    <h3 className="fs-2">Explore Community</h3>
                    <p>
                        Exploring the community of workout involves discovering and
                        connecting with individuals who share an interest in physical
                        exercise for motivation, support, and social interaction.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Features;