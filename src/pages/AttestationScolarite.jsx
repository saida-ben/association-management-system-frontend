import { Sidebar, Navbar } from '../components';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import React, { useRef , useEffect} from 'react'

import Items from './Items';
import ImageOne from '../components/img/logo daratfal.png';



import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';
import NavNex from './NavNex';
const AttestationScolarite = () => {
  const [Scolarite ,setScolarite  ] = React.useState([]);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idSc = urlParams.get('id');
  const idBenef = urlParams.get('idBenef');
  console.log(idBenef);
  const componentRef =useRef();

  const handlePrint =useReactToPrint( {
      content: () => componentRef.current,

 } );
  const [candidat, setCandidat] = React.useState([]);
  
const [demande, setDemande] = React.useState([]);
const [enq, setEnq] = React.useState([]);
const [child, setChild] = React.useState([]);

    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
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
          fetch('http://localhost:8000/api/affd')
            .then((response) => response.json())
            .then((data) => {
              setDemande(data);
            })
            .catch((error) => console.error(error));
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
          fetch('http://localhost:8000/api/affEnq')
            .then((response) => response.json())
            .then((data) => {
              setEnq(data);
            })
            .catch((error) => console.error(error));
        }, []);
        useEffect(() => {
          fetch('http://localhost:8000/api/affScolarite')
            .then((response) => response.json())
            .then((data) => {
              setScolarite(data);
            })
            .catch((error) => console.error(error));
        }, []);
  return (
    
<div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
        
          {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={5}  />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar yourId={5}  />

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
      <Navbar  yourId={5} />
    </div>
    <div class=" py-1 bg-blueGray-50">
    <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
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
    {Scolarite &&
                  Scolarite
                    .filter((c) => c.id === parseInt(idSc))
                    .map((Scolarite) => (
                      <>
  
  <div class="rounded-t space-between mb-0 px-16 py-16" >
 
    <div>
    <img class=" right-1 absolute w-20 h-15 top-1 " src={ImageOne} alt='Profile'/>
    </div>
    <div className="top-12 right-0 absolute white-space:normal">
    <span>
    مؤسسة الرعاية الاجتماعية  <br></br>
الإسم: دار الأطفال أسفي<br></br>
رخصة رقم :                  {Scolarite.id} <br></br>
{Scolarite.dateS} :
بتاريخ  <br></br> 
</span></div>
  </div>
  <div>
  
  
  <h6 class="text-blueGray-700 mb-4 mt-2 text-center text-xl font-bold">
  شهادة المؤسسة 
      </h6>
      <p className='text-right mb- mt-8 mr-6'> 

    <b>  إن مدير بمؤسسة دار الأطفال للرعاية الاجتماعية النابعة للجمعية الخيرية الإسلامية بأسفي يشهد أن المستفيد:</b>  {demande && demande.filter((c) => c.num == parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]} {''} 
    {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]}</p>
      <p className='text-right mb-4 mr-6'>  ابن: {child && child.filter((c) => c.idCandidat === parseInt( idBenef) ).map((c) => c.nomM)[0]}  {child && child.filter((c) => c.idBenef === parseInt( idBenef) ).map((c) => c.prenomM)[0]}</p>  
      <p className='text-right mb-4 mr-6'>   ابن:  {child && child.filter((c) => c.idCandidat === parseInt( idBenef) ).map((c) => c.nomP)[0]}    {child && child.filter((c) => c.idBenef === parseInt( idBenef) ).map((c) => c.prenomP)[0]}</p>           
         
      <p className='text-right mb-4 mr-6'> <b>  :ب (ة)المزداد</b> {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.idenq)[0]) ).map((c) => c.lieuN)[0]}</p>           
      <p className='text-right mb-4 mr-6'> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.num)[0]} <b>  :رقم تحت(ة)مسجل </b> </p>           
      <p className='text-right mb-4 mr-6'> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.DatE)[0]} <b>  :بدار الأطفال كداخلي منذ</b> </p>           
      <p className='text-right mb-4 mr-6'> <b>  الحالة الإجتماعية:</b>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.idenq)[0]) ).map((c) => c.Etat)[0]} </p>           
      <p className='text-right mb-4 mr-6'> <b>   المستوى الدراسي :</b>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.idenq)[0]) ).map((c) => c.nivSc)[0]} </p>           
      <p className='text-right mb-4 mr-6'> {Scolarite.dateS}<b>  :انفصل عن هذه المؤسسة منذ </b> </p>           
      <p className='text-right mb-4 mr-6'> <b>  أسباب الإنفصال:</b> {Scolarite.RaisonS}</p>           
      <p className='text-right mb-14 mr-6'> <b>   ملاحظات عامة</b> {Scolarite.remarques}</p>           
     
      </div>
      </>
      ))}
</div>



</div> 
</div>
</div>
</div>
</div>










  )
}

export default AttestationScolarite
