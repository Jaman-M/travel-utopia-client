import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-center motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                class="visually-hidden"
            ></span
            >
        </div>
        <p className=''>Please wait data is loading...</p>
        </div>
    );
};

export default Loading;