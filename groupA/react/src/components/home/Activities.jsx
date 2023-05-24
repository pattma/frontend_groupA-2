import React from 'react';
import '../home/home.css';
import activity01 from '../../assets/ac-1.jpg';
import activity02 from '../../assets/ac-2.jpg';
import activity03 from '../../assets/ac-3.jpg';
import activity04 from '../../assets/ac-4.jpg';
import activity05 from '../../assets/ac-5.jpg';

const Activities = () => {
  return (
    /* Add Activities form Bootstrap */
    <div className='px-5 py-5 my-5' id="custom-cards">
        <h2 className='pb-2 border-bottom'>Activities</h2>
        <div
        id='carouselExampleAutoplaying'
        className='carousel slide mt-5'
        data-bs-ride='carousel'
        >
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={activity01} className='d-inline-block' alt='acitivity' />
                    <div className='text  ps-3 d-inline-block'>
                        <span className='cat'>Bicycling</span>
                        <h3>
                            A beginner-friendly workout that promotes weight loss and
                            reduces cholesterol
                        </h3>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={activity02} className='d-inline-block' alt='acitivity' />
                    <div className='text  ps-3 d-inline-block'>
                        <span className='cat'>Running</span>
                        <h3>
                            Running with friends: Never alone, always motivated
                        </h3>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={activity03} className='d-inline-block' alt='acitivity' />
                    <div className='text  ps-3 d-inline-block'>
                        <span className='cat'>Weight Training</span>
                        <h3>
                            Boost endurance, build strength, and improve fitness
                        </h3>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={activity04} className='d-inline-block' alt='acitivity' />
                    <div className='text  ps-3 d-inline-block'>
                        <span className='cat'>Walking</span>
                        <h3>
                            Track, walk, succeed: Enjoyable strides towards your goals
                        </h3>
                    </div>
                </div>
                <div className='carousel-item'>
                    <img src={activity05} className='d-inline-block' alt='acitivity' />
                    <div className='text  ps-3 d-inline-block'>
                        <span className='cat'>Dancing</span>
                        <h3>
                            Body movements with the music to express emotions and interact
                            with society
                        </h3>
                    </div>
                </div>
            </div>
            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide='prev'
            >
                <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                >
                </span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide='next'
            >
                <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                >
                </span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    </div>
  );
};

export default Activities;