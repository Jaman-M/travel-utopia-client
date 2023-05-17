import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
// import Booking from '../Booking/Booking';
import BookingOption from './BookingOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableBookings = ({ selectedDate }) => {
    const [bookingOptions, setBookingOptions] = useState([]);
    const [bookService, setBookService] = useState(null);




    useEffect(() => {
        fetch('http://localhost:5000/bookingOptions')
            .then(res => res.json())
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
                        key={option._id}
                        bookingOption={option}
                        setBookService={setBookService}
                    ></BookingOption>)
                }
            </div>
            {
                bookService &&
                <BookingModal
                selectedDate={selectedDate}
                    bookService={bookService}
                    setBookService={setBookService}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableBookings;