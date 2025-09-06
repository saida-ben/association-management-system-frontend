import React, {useEffect} from 'react'
import { Header } from '../components';
import {Link} from 'react-router-dom';
import Items from './Items';
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar, Sidebar } from '../components';
import NavNex from './NavNex';
const CartePersonnel = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const [idBenef, setIdBenef] = React.useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setIdBenef(id);
  }, []);
  return (
    <>
    {activeMenu ? (
    <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
      <Sidebar />
    </div>
  ) : (
    <div className="w-0 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
      <Sidebar />

    </div>
  )}
   
    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
      <Navbar yourId={a}/>
    </div>
<NavNex yourId={idBenef}/>
  



      <button to="/AffichagePage1"
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn">enregistrer
    </button>
        
</>
  )
}

export default CartePersonnel
