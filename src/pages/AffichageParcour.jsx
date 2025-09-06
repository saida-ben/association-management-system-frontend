
import Items from './Items';
import React, { useRef , useEffect} from 'react'
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import { FiSettings } from 'react-icons/fi';
    import { TooltipComponent } from '@syncfusion/ej2-react-popups';
    import {Link} from 'react-router-dom';
    import NavNex from '../pages/NavNex';
    import { Navbar, Sidebar } from '../components';
    import { useStateContext } from './../contexts/ContextProvider';
    import { useReactToPrint } from 'react-to-print';
    import ImageOne from '../components/img/logo daratfal.png';

const AffichageParcour = () => {
  const [showF, setShowModalF] = React.useState(false);
  const componentRef =useRef();

  const handlePrint =useReactToPrint( {
      content: () => componentRef.current,

 } );
  const [demande, setDemande] = React.useState([]);
  const [enq, setEnq] = React.useState([]);
  const [child, setChild] = React.useState([]);
  const [Etat, setEtat] = React.useState([]);
  const [candidat, setCandidat] = React.useState([]);
  const [Parcours, setParcours] = React.useState([]);
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
 useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
      }, []);
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id'); 
      useEffect(() => {
        fetch('http://localhost:8000/api/inde')
          .then((response) => response.json())
          .then((data) => {
            setParcours(data);
          })
          .catch((error) => console.error(error));
      }, []);
      useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
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
          fetch('http://localhost:8000/api/affd')
            .then((response) => response.json())
            .then((data) => {
              setDemande(data);
            })
            .catch((error) => console.error(error));
        }, []);
        useEffect(() => {
          fetch('http://localhost:8000/api/affEnq')
            .then((response) => response.json())
            .then((data) => {
              setEnq(data);
            })
            .catch((error) => console.error(error));
        }, []);
        useEffect(() => {
          fetch('http://localhost:8000/api/in')
            .then((response) => response.json())
            .then((data) => {
              setChild(data);
            })
            .catch((error) => console.error(error));
        }, []);
        useEffect(() => {
          fetch('http://localhost:8000/api/affEtat')
            .then((response) => response.json())
            .then((data) => {
              setEtat(data);
            })
            .catch((error) => console.error(error));
        }, []);
    
  
     
    
      return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg">
            
              {activeMenu ? (
                <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar  yourId={1} />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar  yourId={1} />
    
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
                    <Navbar  yourId={1}  />
          </div>
      
<NavNex yourId={id}/>
 
<button
        className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
 onClick={handlePrint}
 style={{
    backgroundColor: currentColor ,
    }}
 >
طباعة
        </button>
        <div>
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"  ref={componentRef}>


<div class="rounded-t bg-white space-between mb-0 px-16 py-16">
<div>
<img class=" right-4 absolute w-20 h-15 top-2 " src={ImageOne} alt='Profile'/>

</div>
<div className="">

<span className='mb-4 right-2 top-12  absolute text-sm'>
الجمعية الخيرية الإسلامية<br></br>
مؤسسة دار الأطفال للرعاية الاجتماعية  <br></br>
أسفي<br></br>
</span>



</div>


</div>
<div class="container" >

        <div class="bg-white shadow-md rounded my-6">
           
        {Parcours.file && (<img src={`${process.env.PUBLIC_URL}/images/${Parcours.file}`} alt="Parcours" />)}
  
        {Parcours.decisionM && ( <>
            <table class="min-w-max w-full table-auto">
              
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-center">القرار السنوي </th>
                        <th class="py-3 px-6 text-center">معدل الدورة   </th>
                        <th class="py-3 px-6 text-center">معدل الدورة 2   </th>
                        <th class="py-3 px-6 text-center">معدل الدورة 1   </th>
                        <th class="py-3 px-6 text-center">القسم</th>
                        <th class="py-3 px-6 text-center">الموسم الدراسي</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                {Parcours &&
                  Parcours
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((Parcours) => (
                    <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    
                    <td class="py-3 px-6 text-center">
                        {Parcours.decisionM} 
                        </td>
                        <td class="py-3 px-6 text-center">
                        {Parcours.MG} 
                        </td>
                        <td class="py-3 px-6 text-center">
                        {Parcours.MS2} 
                        </td>
                        <td class="py-3 px-6 text-center">
                        {Parcours.MS1} 
                        </td>
                       <td class="py-3 px-6 text-center">
                       {Parcours.nivSc} 
                        </td>
                        <td class="py-3 px-6 text-center">
                       {Parcours.annSc} 
                        </td>
                    </tr>
                   ))}
                              </tbody>
                   
            </table> </>)}     
            
           </div>


                    
                    
                      </div>
   
    </div>
                  
    </div>
    </div>

    </div>
    </div>
  )
}

export default AffichageParcour
