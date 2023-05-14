import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bookService, setBookService, selectedDate }) => {
    const { name, slots } = bookService;

    const date = format(selectedDate, 'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking = {
            bookingdDate: date,
            bookService: name,
            client: name,
            slot,
            email,
            phone,
        }

        //TOdo: send data to the server and once data is saved then closed the data and display success toast
        console.log(booking);
        setBookService(null);

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full ">
                            
                            {
                                slots.map((slot, i)=> <option 
                                    value={slot}
                                    key={i}
                                    >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="phone" placeholder="Your Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className=' btn btn-neutral w-full' type="submit" value="submit" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;