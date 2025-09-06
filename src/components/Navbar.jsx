import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../components/img/icons8-utilisateur-50.png';
import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import ImageOne from './img/logo daratfal.png';


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
   <button
   href="./Footer.jsx"
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = ({ yourId }) => {

  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const [user, setUser] = React.useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/affichuser')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
 <TooltipComponent content="Profile" position="BottomCenter">
   
 { user && user.filter((c) => c.id === parseInt(yourId)).map((c) => (
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}   key={c.id}
          >  
          
           
            <img
              className="rounded-full w-8 h-8"
              
              src={require(`./img/${c.picture}`)}             alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14"></span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
              {c.poste}

              </span>
            </p>
            </div>
        ))}
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          
         
        </TooltipComponent>
        
      
      <div className="ml-80">

         
{isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile yourId={yourId} />)}
      </div>

</div> 
<div className="flex absolute right-60">
          <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
</div>
      </>
  );
};

export default Navbar;
