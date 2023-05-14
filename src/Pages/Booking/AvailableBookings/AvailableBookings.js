import { format } from 'date-fns';
import React from 'react';

const AvailableBookings = ({selectedDate}) => {
    return (
        <div>
            <p className='text-center text-secondary font-bold'>Available Bookings on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableBookings;