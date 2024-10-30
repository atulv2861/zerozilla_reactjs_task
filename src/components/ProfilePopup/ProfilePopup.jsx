import React, { useState } from 'react';
import Style from "../ProfilePopup/ProfilePopup.module.css";
import { Link } from 'react-router-dom';
const ProfilePopup = ({isOpen,setIsOpen}) => {
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>    
        <div className={Style.modalStyle}>
          <div className={Style.modalContentStyle}>    
              <Link className={Style.Link} onClick={e=>togglePopup()} to="/profile">My Profile</Link>
              <Link className={Style.Link} onClick={e=>togglePopup()} to="/orders">My Orders</Link>
              <Link className={Style.Link} onClick={e=>togglePopup()} to="/signout">Sign Out</Link>
          </div>
        </div>      
    </div>
  );
};



export default ProfilePopup;
