import React, { useState } from 'react';
// import travelGirl from '../../../assets/travel-girl.gif';
import travelBoy from '../../../assets/selfie-boy.gif';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

const BookingBanner = ({selectedDate, setSelectedDate}) => {

    
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={travelBoy} className='mx-w-sm lg:w-1/3 rounded-lg' alt='' />
                    <div>
                        <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        ></DayPicker>
                        {/* <p>You have selected date: {format(selectedDate, 'PP')}</p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BookingBanner;