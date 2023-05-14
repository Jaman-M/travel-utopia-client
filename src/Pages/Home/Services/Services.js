import React from 'react';
import plane from '../../../assets/images/plane.svg';
import hotel from '../../../assets/images/hotel.svg';
import guide from '../../../assets/images/guide.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Flight Bookings',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ullam ipsa reprehenderit quaerat commodi culpa!',
            img: plane

        },
        {
            id: 2,
            name: 'Hotels',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ullam ipsa reprehenderit quaerat commodi culpa!',
            img: hotel

        },
        {
            id: 3,
            name: 'Guide',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ullam ipsa reprehenderit quaerat commodi culpa!',
            img: guide

        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our services</h3>
                <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;