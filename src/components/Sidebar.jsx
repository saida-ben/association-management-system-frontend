import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import ImageOne from './img/logo daratfal.png';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';

import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = ({ yourId }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/api/affichuser')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex text-right items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-500 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen bg-white md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <img className="w-30 h-20 top-4 ml-14" src={ImageOne} alt="Profile" />
          <div className="mt-10">
            <div className="">
              {user && (
                <>
                  <p className="text-gray-400 text-right dark:text-gray-400 m-3 mt-4 uppercase">القائمة</p>
                  {user
                    .filter((c) => c.id === parseInt(yourId))
                    .map((c) => (
                      <React.Fragment key={c.id}>
                        {c.poste === 'سكرتيرة الإدارة' && (
                          <>
                           <NavLink
                           to={`/Demande?id=${yourId}`}
                           onClick={handleCloseSideBar}
                           style={({ isActive }) => ({
                             backgroundColor: isActive ? currentColor : '',
                           })}
                           className={({ isActive }) => (isActive ? activeLink : normalLink)}
                         >
                         <span className="ml-20 text-sm text-right font-medium">لوحة القيادة</span>
                       
                       
                           <svg
                             className="w-6 right-4 absolute h-6 stroke-current"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                             />
                           </svg>
                         </NavLink>
                          <NavLink
                            to={`/beneficiaire?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                            <span className="ml-20 text-sm text-right font-medium">لائحة المستفيدين</span>
                            <svg
                              className="w-6 h-6 ml-1 right-4 absolute stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                          </NavLink>
                          <NavLink
                            to={`/Calendar?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">مذكرة </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                          </>
                        )}
                        {c.poste === 'سكرتيرة قسم التعليم' && (
                          <>
                            <NavLink
                           to={`/Registres2?id=${yourId}`}
                           onClick={handleCloseSideBar}
                           style={({ isActive }) => ({
                             backgroundColor: isActive ? currentColor : '',
                           })}
                           className={({ isActive }) => (isActive ? activeLink : normalLink)}
                         >
                         <span className="ml-20 text-sm text-right font-medium">السجل اليومي</span>
                       
                       
                           <svg
                             className="w-6 right-4 absolute h-6 stroke-current"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                             />
                           </svg>
                         </NavLink>
                         <NavLink
                            to={`/Calendar?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">مذكرة </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>  
                         </>
                        )}
                        {c.poste === 'مرشد اجتماعي' && (
                          <>
                          <NavLink
                            to={`/Liste?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">لوحة القيادة</span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                          <NavLink
                            to={`/Calendar?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">مذكرة </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                         </>
                        )}
                          {c.poste === 'لجنة الاستقبال' && (
                          <>
                          <NavLink
                            to={`/Candidat?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">لوحة القيادة</span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                          
                          <NavLink
                            to={`/Refuses?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-19 text-sm text-right font-medium"> المرشحين المرفوضين </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                          <NavLink
                            to={`/Calendar?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">مذكرة </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                         </>
                        )}
                         {c.poste === 'مدير' && (
                          <>
                          <NavLink
                            to={`/ListeAttestation?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">شهادة المؤسسة</span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                          <NavLink
                            to={`/L?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">شهادة المغادرة </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                          <NavLink
                            to={`/Calendar?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">مذكرة </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                         </>
                        )}
                         {c.poste === 'مربي' && (
                          <>
                          
                          <NavLink
                           to={`/Registres?id=${yourId}`}
                           onClick={handleCloseSideBar}
                           style={({ isActive }) => ({
                             backgroundColor: isActive ? currentColor : '',
                           })}
                           className={({ isActive }) => (isActive ? activeLink : normalLink)}
                         >
                         <span className="ml-20 text-sm text-right font-medium">السجل اليومي</span>
                       
                       
                           <svg
                             className="w-6 right-4 absolute h-6 stroke-current"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth={2}
                               d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                             />
                           </svg>
                         </NavLink>
                         <NavLink
                            to={`/Calendar?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">مذكرة </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                          
                         </>
                        )}
                          {c.poste === 'الحارس العام' && (
                          <>
                         <NavLink
                            to={`/ListRapp?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">لوحة القيادة</span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink> 
                          <NavLink
                            to={`/Calendar?id=${yourId}`}
                            onClick={handleCloseSideBar}
                            style={({ isActive }) => ({
                              backgroundColor: isActive ? currentColor : '',
                            })}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                          >
                          <span className="ml-20 text-sm text-right font-medium">مذكرة </span>
                        
                        
                            <svg
                              className="w-6 right-4 absolute h-6 stroke-current"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                              />
                            </svg>
                          </NavLink>
                          
                         </>
                        )}
                      </React.Fragment>
                    ))}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
