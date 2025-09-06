import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import  React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';
import Item from './Item';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { employeeData } from '../data/dummy';
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';
import { BsMenuButton } from 'react-icons/bs';
import { Button, Header ,Navbar} from '../components';
import Sidebar from '../components/Sidebar';

function Registres() {
  let a=6;
  const urlParams = new URLSearchParams(window.location.search);
  const yourId = urlParams.get('id');
  const [demande, setDemand] =React. useState([]);
  const [Reg, setReg] =React. useState([]);
  const [candidat, setCandidat] =React. useState([]);

  
  
 const [Enquete, setEnquete] =React. useState([]);
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  
  const [employees, setEmployees] = useState([]);
  const [dateR, setDateR] = useState('');

  
  const [showdate, setshowdate] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [num, setNum] = React.useState('');
  const [schoolLevel, setSchoolLevel] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [image, setImage] = useState(null);
  const r = (event) => {
    event.preventDefault();
   // Replace 'yourId' with the actual value
    const currentDate = new Date().toISOString().slice(0, 10); // Get the current date in yyyy-mm-dd format
    const url = `/Registre?id=${yourId}&dateR=${currentDate}`;
    window.location.href = url;
  };
  
  
  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  useEffect(() => {
    // Check if the user is authenticated here
    const checkAuthentication = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/check', {
          method: 'POST',
          credentials: 'include',
        });
        const data = await response.json();
        
        if (data.isAuthenticated) {
          // User is authenticated, fetch employees data
          Load();
        } else {
          // User is not authenticated, redirect to login page or display an error message
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    checkAuthentication();
  }, []);

  function Load() {
    fetch('http://127.0.0.1:8000/api/index')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
 

  
  useEffect(() => {
    fetch('http://localhost:8000/api/affd')
      .then(response => response.json())
      .then(data => {
        setDemand(data);
      })
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/index')
      .then((response) => response.json())
      .then((data) => {
        setCandidat(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/affRegister')
      .then(response => response.json())
      .then(data => {
        setReg(data);
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
    fetch('http://localhost:8000/api/index')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
      })
      .catch(error => console.error(error));
  }, []);
 

  const DeleteEmployee = (id) => {
    fetch(`http://localhost:8000/api/s/${id}`, {
      method: 'delete'
    })
    
    .then(data => {

      Loads();
    })
    .catch(error => console.error(error));
  };
  function Loads() {
    fetch('http://localhost:8000/api/affRegister')
    .then(response => response.json())
    .then(data => {
      setReg(data);
    })
    .catch(error => console.error(error));
  }
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/benef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({  name, num, schoolLevel, mobile, lastname })
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert("(ة)تم إضافة المستفيد");
        setShowModal(false)
        
        Load();}
      //Navigate('./Employees.jsx');
     // onSubmit(data);
    } catch (error) {
      console.error(error);
    }
  };


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
  const affichRegistre = (id) => {
    window.location.href = `/AffichageRegistre?id=${id}`;
  };
  const editEmployee = (id, dateR) => {
    window.location.href = `/AR?id=${id}&dateR=${dateR}`;
  };
  
  
    return (
      <>
         
      
      {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar  yourId={a} />
            </div>
          ) : (
            <div className="w-0 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar  yourId={a} />

            </div>
          )}
           
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar yourId={a} />
            </div>
            
        <div className=" md:m-10 mt-64  p-2 md:p-10 bg-white rounded-3xl " >

        <div >
        <br></br>
        <table class="min-w-max w-5/6 table-auto ">
            <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 "></th>
                    <th class="py-3 px-6 "> تاريخ </th>
                   
                    <th class="py-3 px-6 "> رقم </th>

                    

                  
                </tr>
            </thead>

            {Reg.map((Reg) => (
  <tbody class="text-gray-600 text-sm font-light">
    <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
    <td class="py-3 px-6 text-center">
                   

                   <div class="flex item-center justify-center">
                 

                       <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => affichRegistre(Reg.id)}>
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                           </svg>
                       </div>
                       <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  onClick={() => editEmployee(Reg.id, Reg.dateR)}
>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => DeleteEmployee(Reg.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                     
                     
                   </div>

               </td>
      <td class="py-3 px-6">
        {Reg.dateR}
      </td>
      
      <td class="py-3 px-6">
      {Reg.id}
      </td>
    </tr>
  </tbody>
))}

        </table>
    
        <button 
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn"   onClick={() => setshowdate(true)}>أضف
    </button> 
      
   
     
    </div>
    </div>
    
{showdate ? (
        <>
         <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

 
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
      <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="dateR " type="date" name="dateR" id="" placeholder='dateR' value={dateR} onChange={(event) => setDateR(event.target.value)}/>
 
        
      
       </div>

    
     
      </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setshowdate(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={r}                    style={{
                      backgroundColor: currentColor ,
                      }}
                  >
                     حفظ 
                  </button>
                </div>
              </div>
            </div>
          </div>
                {/*footer*/}
               
           
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    )
}
    export default Registres;