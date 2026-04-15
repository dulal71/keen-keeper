import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='container min-h-[70vh] mx-auto flex justify-center items-center '>
          <PacmanLoader color='#244d3f'></PacmanLoader>  
        </div>
    );
};

export default LoadingSpinner;