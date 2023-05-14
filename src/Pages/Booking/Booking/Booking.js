import React, { useState } from 'react';
import BookingBanner from '../BookingBanner/BookingBanner';
import AvailableBookings from '../AvailableBookings/AvailableBookings';

const Booking = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());


    return (
        <div>
            <BookingBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></BookingBanner>

            <AvailableBookings
                selectedDate={selectedDate}
            ></AvailableBookings>
        </div>
    );
};

export default Booking;