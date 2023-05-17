import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ bookService, setBookService, selectedDate }) => {
    const { name: bookServiceName, slots } = bookService;

    const date = format(selectedDate, 'PP');

    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const booking = {
            bookingdDate: date,
            bookService: bookServiceName,
            client: name,
            slot,
            email,
            phone,
        }

        //TOdo: send data to the server and once data is saved then closed the data and display success toast
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBookService(null);
            toast.success('Booking confirmed')
        })


        

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{bookServiceName}</h3>
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
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email}  disabled placeholder="Email Address" className="input w-full input-bordered" />
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