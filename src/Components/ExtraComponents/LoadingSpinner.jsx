import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='container mx-auto flex justify-center items-center py-28'>
          <PacmanLoader color='#244d3f'></PacmanLoader>  
        </div>
    );
};

export default LoadingSpinner;