import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import  React, {useEffect} from 'react';

import {Link} from 'react-router-dom';
import Item from './Item';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { employeeData } from '../data/dummy';
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';
import { BsMenuButton } from 'react-icons/bs';
import { Button, Header ,Navbar} from '../components';
import Sidebar from '../components/Sidebar';

function Liste() {
  const urlParams = new URLSearchParams(window.location.search);
  const yourId = urlParams.get('id');
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  
  const [demande, setDemande] =React. useState([]);

  const affichEmployee = (id) => {
    window.location.href = `/EnqueteSociale?id=${id}`;
  };
 
 

  
  useEffect(() => {
    fetch('http://localhost:8000/api/affd')
      .then(response => response.json())
      .then(data => {
        setDemande(data);
      })
      .catch(error => console.error(error));
  }, []);
 




  const Button = ({ title, customFunc, icon, color, dotColor }) => (
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

   
    return (
      <>
         
      
      {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={yourId} />
            </div>
          ) : (
            <div className="w-0 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={yourId} />

            </div>
          )}
           
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar yourId={yourId} />
            </div>
            
        <div className=" md:m-10 mt-64  p-2 md:p-10 bg-white rounded-3xl " >
        

        <div >
        <br></br>
        <table class="min-w-max w-5/6 table-auto ">
            <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 "></th>
                   
                    <th class="py-3 px-6 ">المكان</th>
                    <th class="py-3 px-6 ">التاريخ </th>
                    <th class="py-3 px-6 ">الاسم </th>
                    <th class="py-3 px-6 ">اللقب</th>
                   
                </tr>
            </thead>


            <tbody class="text-gray-600 text-sm font-light">
            {demande.map((demande) => (
                <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    
                <td class="py-3 px-6 text-center">
                   

                        <div class="flex item-center justify-center">
                      

                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => affichEmployee(demande.num)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                           
                           
                          
                        </div>

                    </td>
                   

                   

                    <td class="py-3 px-6 ">
                            <div class="flex items-center">
                            {demande.lieuE}
                            </div>
                        </td>
                    <td class="py-3 px-6  ">
                    <span class="font-medium  ">{demande.DatE}</span>
                    </td>

                    <td class="py-3 px-6 ">
                    <span class="font-medium">{demande.prenom}</span>
                    </td>

                    <td class="py-3 px-6 ">
                    <span class="font-medium">{demande.nom}</span>
                    </td>
           
                   
                </tr>
               ))}
                          </tbody>
        </table>

    
    
     
    </div>
    </div>
    </>
    )
}
    export default Liste;