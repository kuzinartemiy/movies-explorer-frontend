import React from 'react'
import './Preloader.css'

const Preloader = ({ isLoading }) => {
  const statePreloaderClass = `preloader ${isLoading ? '' : 'preloader_hidden'}`;
  return (
    <div className={statePreloaderClass}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader;
