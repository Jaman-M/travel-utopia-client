import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const BookingOption = ({ bookingOption, setBookService }) => {
    const { name, slots } = bookingOption;
    return (
        <div className="card shadow-xl mt-5">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary justify-center text-2xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    {/* <PrimaryButton>Book for this service</PrimaryButton> */}
                    <label 
                    htmlFor="booking-modal" className="btn btn-primary text-white"
                    onClick={() => setBookService(bookingOption)}
                    >Book for this service</label>
                </div>
            </div>
        </div>
    );
};

export default BookingOption;