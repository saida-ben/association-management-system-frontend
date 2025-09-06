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

function ListRapp() {
  let a=7;
  const urlParams = new URLSearchParams(window.location.search);
  const yourId = urlParams.get('id');
  const [Demand, setDemand] =React. useState([]);
 const [Enquete, setEnquete] =React. useState([]);
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [num, setNum] = React.useState('');
  const [schoolLevel, setSchoolLevel] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [image, setImage] = useState(null);

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
  async function editEmployee(employees)
  {
    setEditModal(true)
    setId(employees.id);
   setName(employees.name);
   setLastname(employees.lastname);
   setMobile(employees.mobile);
   setNum(employees.num);
   setSchoolLevel(employees.schoolLevel);

   
  }
  async function update(event) {
    event.preventDefault();
  
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/update/${employees.find(u => u.id === id).id || id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          name: name,
          num: num,
          schoolLevel: schoolLevel,
          mobile: mobile,
          lastname: lastname
        })
      });
  
      if (response.ok) {
        alert("Registration Updated");
        setEditModal(false)
        
        Load();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
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
    fetch(`http://localhost:8000/api/delete/${id}`, {
      method: 'delete'
    })
    
    .then(data => {
      alert("Employee deleted Successfully");
      Load();
    })
    .catch(error => console.error(error));
  };
  const affichEmployee = (id) => {
    window.location.href = `/Rapport?id=${id}`;
  };
  
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
        <h1 style={{  marginLeft:"410px" }}>قائمة المستفيدين</h1>
        <div >
        <br></br>
        <table class="min-w-max w-5/6 table-auto ">
            <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 "></th>
                   
                    <th class="py-3 px-6 "> المستوى الدراسي</th>
                    <th class="py-3 px-6 ">رقم التسجيل </th>
                    <th class="py-3 px-6 ">النسب </th>
                    <th class="py-3 px-6 ">الإسم </th>
                </tr>
            </thead>


            <tbody class="text-gray-600 text-sm font-light">
              
            {employees.map((employee) => (
                <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    
                <td class="py-3 px-6 text-center">
                   

                        <div class="flex item-center justify-center">
                      

                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => affichEmployee(employee.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                           
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  onClick={() => editEmployee(employee)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => DeleteEmployee(employee.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                          
                        </div>

                    </td>
                   

                   

                  
                    <td class="py-3 px-6  ">
                    <span class="font-medium  ">   
                   {Enquete && Enquete.filter((c) => c.id === parseInt(employee.idenq)).map((c) => c.nivSc)[0]} 
  
</span>
                    </td>

                    <td class="py-3 px-6 ">
                    <span class="font-medium">{employee.num}</span>
                    </td>

                    <td class="py-3 px-6 ">
                    <span class="font-medium">
                    {Demand && Demand.filter((c) => c.num === parseInt(employee.num)).map((c) => c.prenom)[0]} 

                      </span>
                    </td>
                    <td>
            <div class="flex items-center ml-6">
              
                <span>                    {Demand && Demand.filter((c) => c.num === parseInt(employee.num)).map((c) => c.nom)[0]} 
</span>
            </div>
        </td>
                   
                </tr>
               ))}
                          </tbody>
        </table>

        {showModal ? (
        <>
           <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">
{/*content*/}
              
                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
         
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم العائلي" value={lastname} onChange={(event) => setLastname(event.target.value)}/>
     <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم الشخصي" type="text" name="الإسم الشخصي" id="الإسم الشخصي" placeholder="الإسم الشخصي" value={name} onChange={(event) => setName(event.target.value)}/>
 
         </div>
         <div>
          
          <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    for="رقم التسجيل"type="text" name="رقم التسجيل "id="رقم التسجيل" placeholder="رقم التسجيل" value={num} onChange={(event) => setNum(event.target.value)}/>
      <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    for=" هاتف الولي" type="text" name="هاتف الولي" id="" placeholder=" هاتف الولي" value={mobile} onChange={(event) => setMobile(event.target.value)}/>
  
          </div>
          <div>
          
        
      <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
    for=" المستوى الدراسي" type="text" name="المستوى الدراسي" id="" placeholder=" المستوى الدراسي" value={schoolLevel} onChange={(event) => setSchoolLevel(event.target.value)}/>
  
          </div>
       </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-gray-200 text-gray-400 active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                   
                  >
                     إلغاء
                  </button>
                  <button
                    className=" text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    style={{
                    backgroundColor: currentColor ,
                           }}
                           onClick={handleSubmit}
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {editModal ? (
        <>
           <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">
{/*content*/}
              
                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
         
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم العائلي" value={lastname} onChange={(event) => setLastname(event.target.value)}/>
     <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم الشخصي" type="text" name="الإسم الشخصي" id="الإسم الشخصي " placeholder="الإسم الشخصي" value={name} onChange={(event) => setName(event.target.value)}/>
 
         </div>
         <div>
          
          <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    for="رقم التسجيل"type="text" name="رقم التسجيل "id="رقم التسجيل" placeholder="رقم التسجيل" value={num} onChange={(event) => setNum(event.target.value)}/>
      <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    for=" المستوى الدراسي" type="text" name="المستوى الدراسي" id="" placeholder=" المستوى الدراسي" value={schoolLevel} onChange={(event) => setSchoolLevel(event.target.value)}/>
  
          </div>
          <div>
          
        
      <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
    for=" هاتف الولي" type="text" name="هاتف الولي" id="" placeholder=" هاتف الولي" value={mobile} onChange={(event) => setMobile(event.target.value)}/>
  
          </div>
       </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-gray-200 text-gray-400 active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setEditModal(false)}
                   
                  >
                     إلغاء
                  </button>
                  <button
                    className=" text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    style={{
                    backgroundColor: currentColor ,
                           }}
                           onClick={update}
                  >
                    تحديث
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
     
    </div>
    </div>
    </>
    )
}
    export default ListRapp;