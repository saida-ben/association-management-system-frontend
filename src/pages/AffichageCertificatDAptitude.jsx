import { Sidebar, Navbar } from '../components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import React, { useRef, useEffect } from 'react';
import ImageOne from '../components/img/logo daratfal.png';

import Items from './Items';
import imageNotFound from './EtatCivilFile/image-not-found.png'; // Import a default image to display when the file is not found
import './EtatCivilFile/Apt.jfif';

import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';
import NavNex from './NavNex';

function AffichageCertificatDAptitude() {
  let grid;
  const [showF, setShowModalF] = React.useState(false);
  const [showP, setShowModalP] = React.useState(false);
  const [candidat, setCandidat] = React.useState([]);
  const [activite, setActivites] = React.useState([]);

  
  const [Apt, setApt] = React.useState([]);

  const [demande, setDemande] = React.useState([]);
  const [enq, setEnq] = React.useState([]);
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,

  });

  const recordClick = (args) => {
    if (args.target.classList.contains('empData')) {
      let rowObj = grid.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid'));
      console.log(rowObj);
    }
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/affichApt')
      .then((response) => response.json())
      .then((data) => {
        setApt(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const getUserImage = (image) => {
    console.log(image);
    const imagePath = `${process.env.PUBLIC_URL}/EtatCivilFile/${image}`;
    console.log(imagePath);
    return imagePath;
  };

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
    fetch('http://localhost:8000/api/affActivite')
      .then((response) => response.json())
      .then((data) => {
        setActivites(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
            <Sidebar yourId={1}/>
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar yourId={1}/>
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
            <Navbar yourId={1} />
          </div>
          <NavNex yourId={id} />

          <div class=" py-1 bg-blueGray-50">
            <div class="w-full lg:w-10/12 px-4 mx-auto mt-6">
              <div>
                <button
                  className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                  onClick={handlePrint}
                  style={{
                    backgroundColor: currentColor,
                  }}
                >
                  طباعة
                </button>

                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">

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
                      {Apt &&
                        Apt
                          .filter((c) => c.idBenef === parseInt(id))
                          .map((Apt) => (
                            <div class="container" ref={componentRef}>
                              <div class="header">
                                <h6 class="text-blueGray-700 text-center text-xl font-bold">
                                  CERTIFICAT MEDICAL DAPTITUDE PHYSIQUE   
                                </h6>
                                {Apt.prenomD && ( <>
                                <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">
                                  {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id)).map((c) => c.num)[0])).map((c) => c.num)[0]}<b> : رقم</b>
                                </p>

                                <p className='text-left mb-2 mt-8'>
                                  <b> médecin chargé des activités De santé scolaire et universitaire à la certifie avoir Examiner ce jour l'éléve  :</b>
                                  <b>  J esoussigné, docteur :</b>{Apt.nomD} {Apt.prenomD}
                                </p>
                                <p className='text-left mb-2'>
                                  <b>  De l'établissement scolaire </b> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id)).map((c) => c.num)[0])).map((c) => c.institut)[0]}
                                </p>
                                <p className='text-left mb-2'>
                                  <b>   Classe :</b> {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id)).map((c) => c.idenq)[0])).map((c) => c.nivSc)[0]}
                                </p>
                                <p className='text-left mb-2'>
                                  <b>Et je déclare : indemme de toute affection contagieuse ou chronique et physiquement : {Apt.apte}</b> 
                                </p>
                                
                                </>)}
                                {Apt.file && (    <img src={`${process.env.PUBLIC_URL}/images/${Apt.file}`} alt="Certificate" />)}


                                <br></br>
                                <span class="inline-grid">
                                  <p className='text-right bottom-14 mt-4 absolute left-12'>
                                    <b> Signature et cachet de médecin de santé scolaire et universitaire  :</b>
                                  </p>
                                </span>
                              </div>
                            </div>
                          ))}
                      <Items />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AffichageCertificatDAptitude;
