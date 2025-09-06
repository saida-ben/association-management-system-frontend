import { Sidebar, Navbar } from '../components';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import React, { useRef , useEffect} from 'react'
import ImageOne from '../components/img/logo daratfal.png';

import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';

const AffichageRapp = () => {
    
    const componentRef =useRef();

    const handlePrint =useReactToPrint( {
        content: () => componentRef.current,
  
   } );
   const [log, setLog] = React.useState([]);

  
  
 const [demande, setDemande] = React.useState([]);
 const [enq, setEnq] = React.useState([]);
 const [child, setChild] = React.useState([]);
 const [Etat, setEtat] = React.useState([]);
 const [candidat, setCandidat] = React.useState([]);
 const [Medical, setMedical] = React.useState([]);
 const [Exon, setExon] = React.useState([]);
 const [Engag, setEngag] = React.useState([]);
 const [Rapp, setRapp] = React.useState([]);

 
 
 const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
 const urlParams = new URLSearchParams(window.location.search);
 const idRapp = urlParams.get('id');
 const idCandidat = urlParams.get('idBenef');
console.log(idRapp) ;
console.log(idCandidat) ;

 useEffect(() => {
  fetch('http://localhost:8000/api/c')
    .then((response) => response.json())
    .then((data) => {
      setLog(data);
    })
    .catch((error) => console.error(error));
}, []);
useEffect(() => {
    fetch('http://localhost:8000/api/affRapport')
      .then((response) => response.json())
      .then((data) => {
        setRapp(data);
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
  let a=7;
  return (
    <>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
      
        {activeMenu ? (
          <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
            <Sidebar  yourId={a}/>
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar  yourId={a}/>

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
              <Navbar yourId={a}  />
          </div>
      
            
        <div class=" py-1 bg-blueGray-50">
        <div class="w-full lg:w-10/12 px-4 mx-auto mt-6">

               <div>
        <button
        className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
 onClick={handlePrint}
 style={{
    backgroundColor: currentColor ,
    }}
 >
طباعة
        </button>
  
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" ref={componentRef}>


          <div class="rounded-t bg-white space-between mb-0 px-16 py-16">
  <div>
  
  </div>
  <div className="">
  <img class="right-4 absolute  w-20 h-15 top-2" src={ImageOne} alt="Profile" />

  <span className='mb-4 mt-10 right-2 top-3  absolute text-sm'>
الجمعية الخيرية الإسلامية <br></br>
مؤسسة دار الأطفال للرعاية الاجتماعية  <br></br>
أسفي<br></br>
</span>



</div>


</div>
              
               


<div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
            
<div class="container"  >
{Rapp.filter((Rapp) => Rapp.numR ===parseInt(idRapp) ).map((Rapp) => ( <>
        <div class="header">
        <h6 class="text-blueGray-700 text-center text-xl font-bold">

        </h6>
        <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center"> <b> تقرير الزيارة  :</b>{Rapp.nomR}</p>

            <p className='text-right mb-2 mt-8'><b> المستفيد :</b> {
    demande &&
    demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idCandidat)).map((c) => c.num)[0]))
      .map((c) => c.nom + " " + c.prenom)[0]
  }</p>
            <p className='text-right mb-2'>  <b>  تاريخ الزيارة  :</b>{Rapp.date} </p>           
            <p className='text-right mb-2'> <b>وقت الزيارة :  </b> {Rapp.Heure} </p>
            <p className='text-right mb-2'> <b> موضوع الزيارة :</b>{Rapp.sujetV} </p>  
            <p className='text-right mb-2'> <b> مرافق الزيارة :</b>{Rapp.accompagnant} </p>  
            <p className='text-right mb-2'> <b> سبب الزيارة :</b>{Rapp.causeV} </p>  
            <p className='text-right mb-2'> <b> وصف الحالة المادية :</b>{Rapp.descrEtatphysique} </p>                    
            <p className='text-right mb-2'> <b> وصف الحالة العقلية :</b>{Rapp.descrEtatpsychique} </p>           
            <p className='text-right mb-12'>  <b>  ملاحظات الزيارة  :</b> {Rapp.remarque} </p>

           
             <span class="inline-grid">
          
          <p className='text-right bottom-14 mt-4 absolute left-12'><b> : إمضاء مصادق عليه </b> </p>
           
            </span>
        </div> 
        <img src={`${process.env.PUBLIC_URL}/images/${Rapp.file}`} alt="Certificate" />
        </>
))}
    </div>
                
    </div>
   </div>
            </div>
            </div>
            </div>
            
                 
        </div>
        </div>
        </div>
        </div>
       
      
    </>
  )
}

export default AffichageRapp
