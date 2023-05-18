import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
// import Booking from '../Booking/Booking';
import BookingOption from './BookingOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableBookings = ({ selectedDate }) => {
    // const [bookingOptions, setBookingOptions] = useState([]);
    const [bookService, setBookService] = useState(null);
    const date = format(selectedDate, 'PP')

    const {data: bookingOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['bookingOptions', date],
        queryFn: async() =>{
            const res = await fetch (`http://localhost:5000/bookingOptions?date=${date}`);
            const data = await res.json();
            return data
        }
        // .then(res => res.json())
    });

    if(isLoading){
        return <Loading></Loading>
    }




    // useEffect(() => {
    //     fetch('http://localhost:5000/bookingOptions')
    //         .then(res => res.json())
    //         .then(data => setBookingOptions(data))
    // }, [])

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
                    refetch= {refetch}
                    setBookService={setBookService}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableBookings;