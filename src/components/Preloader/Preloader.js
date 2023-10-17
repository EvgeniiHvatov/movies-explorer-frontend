import React from 'react'
import './Preloader.css'
import WarningForm from '../WarningForm/WarningForm'

const Preloader = ({loggedIn}) => {
  return (
    <>
      {loggedIn ? 
        (<div className="preloader">
          <div className="preloader__container">
            <span className="preloader__round"></span>
            </div>
        </div>)
        :
        (<WarningForm></WarningForm>)
      }
    </>
  )
};

export default Preloader;
