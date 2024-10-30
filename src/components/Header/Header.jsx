import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import Style from '../Header/Header.module.css';
import { useNavigate } from 'react-router-dom';
import Avatar from "../../assets/Avatar.avif";
import ProfilePopup from '../ProfilePopup/ProfilePopup';
function Header({ cartCount,handleSearchResult }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate=useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        navigate('/');
    }

    const handleProfilePopupOpen=(e)=>{
        e.preventDefault();
        setIsOpen(!isOpen);        
    }   

  return (<>
    {isOpen&&<ProfilePopup isOpen={isOpen} setIsOpen={setIsOpen}/>}
    <header className={Style.Header}>
      <h3 onClick={e=>handleClick(e)} className={Style.Heading}>E-commerce App</h3>
      <nav className={Style.Nav}>        
        <Search handleSearchResult={handleSearchResult}/>
        <Link className={Style.CartLink} to="/cart">Cart ({cartCount})</Link>        
        <img className={Style.Profile} onClick={e=>{handleProfilePopupOpen(e)}} src={Avatar} alt="Profile"/>
      </nav>
    </header>
    </>
  );
}

export default Header;
