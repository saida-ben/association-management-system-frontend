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

function Refuses() {
  const urlParams = new URLSearchParams(window.location.search);
  const dem = urlParams.get('dem');
  const candid = urlParams.get('id');
  const Enquet = urlParams.get('Enq');
  
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  
  const [demande, setDemande] =React. useState([]);
  const [Candidat, setCandidat] =React. useState([]);
  const [Enquete, setEnquete] =React. useState([]);

  
  

 
  const affichEmployee = (id) => {
    window.location.href = `/AffichageDeux?id=${id}?Enquet=${Enquet}`;
  };
 
  useEffect(() => {
    fetch('http://localhost:8000/api/affd')
      .then(response => response.json())
      .then(data => {
        setDemande(data);
      })
      .catch(error => console.error(error));
  }, []);
  
  useEffect(() => {
    fetch('http://localhost:8000/api/affEnq')
      .then(response => response.json())
      .then(data => {
        setEnquete(data);
      })
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/affrefus')
      .then(response => response.json())
      .then(data => {
        setCandidat(data);
      })
      .catch(error => console.error(error));
  }, []);
 


let a=4;

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
         
      
         <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
        
          {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={a}/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar yourId={a}/>

            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:mr-60 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            
              }
          >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar yourId={a}/>
            </div>
            
        <div className=" md:m-10 mt-64  p-2 md:p-10 bg-white rounded-3xl " >
        

        <div >
        <br></br>
        <table class="   table-auto w-full">
            <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 "></th>
                    <th class="py-3 px-6 ">مستوى مدرسي</th>
                    <th class="py-3 px-6 ">العنوان </th>
                    <th class="py-3 px-6 ">رقم التسجيل</th>
                   
                    <th class="py-3 px-6 ">اللقب</th>
                    <th class="py-3 px-6 ">الإسم </th>
                   
                   
                </tr>
            </thead>


            <tbody class="text-gray-600 text-sm font-light">
              {Candidat.map((Candidat)=> 
  
                <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    
                <td class="py-3 px-6 text-center">
                   

                        <div class="flex item-center justify-center">
                      

                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => affichEmployee(Candidat.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                           
                           
                          
                        </div>

                    </td>
                   

                   
                    <td class="py-3 px-6 ">
                            <div class="flex items-center">
                            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.nivSc)[0]}

                            </div>
                        </td>
               
                        <td class="py-3 px-6 ">
                            <div class="flex items-center">
                            {demande && demande.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.adress)[0]}

                            </div>
                        </td>
                        <td class="py-3 px-6 ">
                            <div class="flex items-center">
                            {demande && demande.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.num)[0]}

                            </div>
                        </td>
                        
                      
                      
                        <td class="py-3 px-6 ">
                            <div class="flex items-center">
                            {demande && demande.filter((c) => c.num === parseInt( Candidat.num)).map((c) => c.nom)[0]}

                            </div>
                        </td>
                    <td class="py-3 px-6  ">
                    <span class="font-medium  ">
                    {demande && demande.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.prenom)[0]}
</span>
                    </td>

                   
           
                   
                </tr>
              )}
              
                          </tbody>
        </table>

    
        </div>
     
    </div>
    </div>
    </div>
    </div>
    </>
    )
}
    export default Refuses;