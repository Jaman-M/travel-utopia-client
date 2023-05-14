import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
// import Booking from '../Booking/Booking';
import BookingOption from './BookingOption';

const AvailableBookings = ({ selectedDate }) => {
    const [bookingOptions, setBookingOptions] = useState([])
    

    // useEffect( ()=>{
    //     fetch('bookingOptions.json')
    //     .then(res => res.json())
    //     .then(data => setBookingOptions(data))
    // })


    useEffect( () => {
        fetch('bookingOptions.json')
        .then (res => res.json())
        .then(data => setBookingOptions(data))
    }, [])

    return (
        <section className='mx-5'>
            <div>
                <p className='text-center text-secondary font-bold'>Available Bookings on {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    bookingOptions.map(option => <BookingOption
                    key= {option._id}
                    bookingOption= {option}
                    ></BookingOption>)
                }
            </div>
        </section>
    );
};

export default AvailableBookings;