import { Button ,Table,TableBody,TableCell,TableContainer,TableHead,TableRow}from '@mui/material';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import React, { useState } from "react";
import {Navbar,Sidebar} from "../components";


    const NavNex = ({ yourId }) => {
      
   
   

    let grid;
    const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete','Search','Add','Edit','cancel'];
  const editing = { allowDeleting: true, allowEditing: true ,allowAdding: true};
  const { currentColor, activeMenu, setActiveMenu, isClicked, setScreenSize, screenSize } = useStateContext();

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

    return (
      <>

<div className="justify-content-start w-100 my-5 items-center text-center">
<NavLink 
         to= {`/AffichageDossier?id=${yourId}`}
         onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
         ملف المستفيد    </NavLink>
<NavLink 
         to={`/Engagement?id=${yourId}`}
         onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
        إلتزام   </NavLink>
        <NavLink 
         to={`/DossierMedical?id=${yourId}`}
         onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
         الملف الطبي  </NavLink>
       
<NavLink 
         to={`/ExenorationFrais?id=${yourId}`}
         onClick={handleCloseSideBar}
                     style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
     الإعفاء من الرسوم

 </NavLink>    
 <NavLink 
         to= {`/AttestationEtatCivil?id=${yourId}`}
         onClick={handleCloseSideBar}
                     style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
        بطاقة الحالة المدنية
 </NavLink>

        
        <NavLink 
         to={`/AttestationBesoin?id=${yourId}`}
         onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
        شهادة الإحتياج </NavLink>
      
        
         <NavLink 
         to={`/ParcourScolaire?id=${yourId}`}
         onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
         المسار الدراسي  </NavLink>
       
        
           <NavLink 
         to={`/CertificatDeLogement?id=${yourId}`}
         onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
         شهادة السكنى  </NavLink>
         <NavLink 
         to={`/CertficatDaptitudePhysique?id=${yourId}`}
         onClick={handleCloseSideBar}
                     style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
         شهادة لياقة بدنية  
  </NavLink>
         <NavLink 
         to={`/CertificaVieCollective?id=${yourId}`}
         onClick={handleCloseSideBar}
                     style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
         شهادة الحياة الجماعية
  </NavLink>
   
      
 <NavLink 
         to= {`/Page1?id=${yourId}`}
         onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  
                  })} 
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
         معلومات شخصية  </NavLink>
           
      
            
           </div>
       
           </>
    );
}
export default NavNex;  