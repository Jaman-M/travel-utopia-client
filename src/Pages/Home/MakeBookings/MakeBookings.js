import React from 'react';
import woman from '../../../assets/images/welcome-women.png';
import welcomeBg from '../../../assets/images/welcome-bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const MakeBookings = () => {
    return (
        <section className='mt-32'
        style={{
            background: `url(${welcomeBg})`
        }}
        >
            
            <div className="hero   ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={woman} alt='' className=" -mt-32 hidden md:block lg:w-1/2 " />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Bookings</h4>
                        <h1 className="text-4xl text-white font-bold">Booking for Today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut iure praesentium reprehenderit assumenda molestiae ducimus vitae illo tempora magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro esse quas nisi atque est nemo inventore hic eum odio accusantium.</p>
                        <PrimaryButton>Getting Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeBookings;