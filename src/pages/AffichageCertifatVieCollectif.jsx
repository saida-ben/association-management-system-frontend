
import { Sidebar, Navbar } from '../components';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import React, { useRef , useEffect} from 'react'

import ImageOne from '../components/img/logo daratfal.png';


import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';
import NavNex from './NavNex';
const AffichageCertifatVieCollectif = () => {
  let grid;
    
    
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
const [vi, setVi] = React.useState([]);
const [Frere, setFreres] = React.useState([]);




const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 
useEffect(() => {
fetch('http://localhost:8000/api/c')
  .then((response) => response.json())
  .then((data) => {
    setLog(data);
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
useEffect(() => {
  fetch('http://localhost:8000/api/affMedical')
    .then((response) => response.json())
    .then((data) => {
      setMedical(data);
    })
    .catch((error) => console.error(error));
}, []);
useEffect(() => {
  fetch('http://localhost:8000/api/affExon')
    .then((response) => response.json())
    .then((data) => {
      setExon(data);
    })
    .catch((error) => console.error(error));
}, []);

useEffect(() => {
  fetch('http://localhost:8000/api/affEngag')
    .then((response) => response.json())
    .then((data) => {
      setEngag(data);
    })
    .catch((error) => console.error(error));
}, []);
useEffect(() => {
  fetch('http://localhost:8000/api/affvi')
    .then((response) => response.json())
    .then((data) => {
      setVi(data);
    })
    .catch((error) => console.error(error));
}, []);
useEffect(() => {
  fetch('http://localhost:8000/api/affFrere')
    .then((response) => response.json())
    .then((data) => {
      setFreres(data);
    })
    .catch((error) => console.error(error));
}, []);

return (
  <div className={currentMode === 'Dark' ? 'dark' : ''}>
  <div className="flex relative dark:bg-main-dark-bg">
  
    {activeMenu ? (
      <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
        <Sidebar yourId={1} />
      </div>
    ) : (
      <div className="w-0 dark:bg-secondary-dark-bg">
        <Sidebar yourId={1} />

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
<img class=" right-4 absolute w-20 h-15 top-2 " src={ImageOne} alt='Profile'/>

</div>
<div className="">

<span className='mb-4 right-2 top-3  absolute text-sm'>
الجمعية الخيرية الإسلامية<br></br>
مؤسسة دار الأطفال للرعاية الاجتماعية  <br></br>
أسفي<br></br>
</span>



</div>


</div>
          
           


<div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-right flex justify-between">
        
          {vi &&
                  vi
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((vi) => (
<div class="container" >
    <div class="header">
    <h6 class="text-blueGray-700 text-center text-xl font-bold">
    شهادة الحياة الجماعية      
    </h6>
    <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.num)[0]}<b> : رقم</b></p>
    {vi.lieucol && (<>
        <p className='text-right mb-2 mt-8'><b>  إن ضابط الحالة المدنية : </b>{Etat && Etat.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.off)[0]} </p>
        <p className='text-right mb-2'> <b>:يشهد أن الأبناء الثالية أسماؤهم لازالو على قيد الحياة</b> </p>           
        
        <p className='text-right mb-2'><b> من والده:</b> {child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomP)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomP)[0]} </p>
            <p className='text-right mb-2'>{child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomM)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomM)[0]} <b> : و والدته</b>  </p>
            

        <div class="bg-white shadow-md rounded my-6">
        <table class="min-w-max w-full table-auto">
    <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-center">مستوى مدرسي</th>
            <th class="py-3 px-6 text-center">سن</th>
            <th class="py-3 px-6 text-center">الجنس</th>
            <th class="py-3 px-6 text-center">الاسم العائلي</th>
            <th class="py-3 px-6 text-center">الاسم الشخصي</th>
        </tr>
    </thead>
    <tbody class="text-gray-600 text-sm font-light">
        {Frere &&
        
            Frere.filter((c) => c.nom === String(demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id)).map((c) => c.num)[0])).map((c) => c.nom)[0]))
            .map((c) => (
                <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                   
                    <td class="py-3 px-6 text-center">{c.nivSc}</td>
                    <td class="py-3 px-6 text-center">{c.age}</td>
                    <td class="py-3 px-6 text-center">{c.sexe}</td>
                    <td class="py-3 px-6 text-center">{c.nom}</td>
                    <td class="py-3 px-6 text-center">{c.prenom}</td>
                </tr>
            ))}
    </tbody>
</table>

                  </div>
                 
                 







        <p className='text-right mb-2'>{vi.lieucol}<b>في </b>  </p>
        <p className='text-right mb-2'>{vi.datcol} <b>بتاريخ</b> </p>
       

         <span class="inline-grid">
      
      <p className='text-right bottom-14 mt-4 absolute left-12'><b> : إمضاء مصادق عليه </b> </p>
       
        </span> </>)}
        {vi.file && ( <img src={`${process.env.PUBLIC_URL}/images/${vi.file}`} alt="vi" />)}

    </div> 
</div>
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
  
)
}

export default AffichageCertifatVieCollectif
