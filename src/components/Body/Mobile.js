import React, { useState } from 'react'
import './Mobile.css'

const Mobile = ({isOpen,setIsopen}) => {
    const [Isloggedin, setIsloggedin] = useState(false);
  return (
    <div className="upr-mobile">

<div className='mobile'>
        <div className='close-icon' onClick={()=> setIsopen(!isOpen)}>
        <span className="material-symbols-outlined">close</span>
        </div> 
        <hr style={{marginTop: "24px", boxShadow:"rgb(28 28 28 / 20%) 0px 2px 3px"}}/>
        <div className='mobile-option'>


        <div className='mobile-options'>
          
          <span className="material-symbols-outlined my-logo">home</span>
               <h5 className='dropdown-toggle'>Home</h5>

      </div>

      <div className='mobile-options'>
      <span className="material-symbols-outlined my-logo">description</span>
            
              <h5 className="dropdown-toggle">Page</h5>
      </div>

      <div className='mobile-options'>
        <span class="material-symbols-outlined my-logo">electrical_services</span>
              <h5 className="dropdown-toggle">Services</h5>
      </div>

      <div className='mobile-options'>
      <span class="material-symbols-outlined my-logo">storefront</span>
              <h5 className="dropdown-toggle">Shop</h5>
      </div>

      <div className='mobile-options'>
      <span class="material-symbols-outlined my-logo">art_track</span>
              <h5 className="dropdown-toggle">Blog</h5>
      </div>

      <div className='mobile-options'>
      <span class="material-symbols-outlined my-logo">person</span>
              <h5 className="dropdown-toggle">Contact</h5>
      </div>

      <div className='mobile-options'>
      <span class="material-symbols-outlined my-logo">search</span>
              <h5 >Search</h5>
      </div>

      <div className='mobile-options'>
      <span class="material-symbols-outlined my-logo">shopping_cart</span>
              <h5 >Cart</h5>
      </div>
        </div>
    
    </div>
    </div>
  )
}

export default Mobile