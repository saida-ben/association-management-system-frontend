
import React from 'react'
    import { GridComponent, Inject,Selection, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
    import { FréresData, FréresGrid } from '../data/dummy';
    import { Header, Navbar } from '../components';
    import { useStateContext } from '../contexts/ContextProvider';
    import { Link, NavLink } from 'react-router-dom';
    import { links } from '../data/dummy';

    
const Navbar1
= () => {
    const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

      return (
        <div>
       
  {links.map((item) => (
<ul>
      <a class=" text-gray-400 hover:text-blue-600 p-4 items-center gap-2 rounded-md" href="#">
    <span aria-hidden="true">«</span>
    <span>Previous</span>
  </a>
  {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                    className="rounded-full py-3 px-6 mt-2 mb-2 mr-2 bg-slate-200 "
                  >
                   
                    <span className="capitalisation span"
                    
                  >{link.name}
                  </span>
                  
                   </NavLink>
                ))}
         
             
          

         
             
                  
<a class="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md pointer-events-none" href="./NavNex.jsx">
<span  aria-hidden="true">Next
        ⪼</span>
  </a>
             </ul> 
                     
   ))}
          </div>
              
      );
    };
    export default  Navbar1;
    ;
