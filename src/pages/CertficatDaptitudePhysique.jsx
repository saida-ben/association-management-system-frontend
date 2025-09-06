import React, { useEffect } from 'react';
import Formulaire from './Formulaire';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Navbar1 from '../components/Navbar1';
import NavNex from './NavNex';
import { Navbar, Sidebar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import Items from './Items';

const CertficatDaptitudePhysique = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  const [idBenef, setIdBenef] = React.useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setIdBenef(id);
  }, []);

  let a = 1;
  const [child, setChild] = React.useState([]);
  const [parcours, setParcours] = React.useState([]);
  const [nomB, setNomB] = React.useState('');
  const [prenomB, setPrenomB] = React.useState('');
  const [nomD, setNomD] = React.useState('');
  const [prenomD, setPrenomD] = React.useState('');
  const [nivSc, setNivSc] = React.useState('');
  const [univ, setUniv] = React.useState('');
  const [d, setD] = React.useState('');
  const [etabliss, setEtabliss] = React.useState('');
  const [apte, setApte] = React.useState('');
  useEffect(() => {
    fetch('http://localhost:8000/api/in')
      .then((response) => response.json())
      .then((data) => {
        setChild(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/inde')
      .then((response) => response.json())
      .then((data) => {
        setParcours(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      nomD,
      prenomD,
      univ,
      d,
      apte,
      idBenef,
    });
    const response = await fetch('http://127.0.0.1:8000/api/Apt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nomD, prenomD, univ, d, apte, idBenef }),
    });
    const data = await response.json();
    console.log(data);
    window.location.href = `/AffichageCertificatDAptitude?id=${idBenef}`;
  };

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [showModal, setShowModal] = React.useState(false);

  const handleUpload = (idBenef) => {
    if (selectedFile) {
      console.log({
        file: selectedFile,
      });
  
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('idBenef', idBenef);
  
      fetch('http://127.0.0.1:8000/api/Apt', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.href = `/AffichageCertificatDAptitude?id=${idBenef}`;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const [demande, setDemande] =React. useState([]);
  const [candidat,   setCandidat  ] =React. useState([]);
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
     <Navbar yourId={a} />
    </div>

<NavNex yourId={idBenef}/>
<div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
      <div >
        <label for="firstname" class="formbold-form-label ml-20"> 
        certificat d'aptitude physique du  <h1>{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]} {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]}
        </h1>
        </label>
         </div>
         <div class="formbold-input-wrapp formbold-mb-3">

        <div>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="prénom doctor" type="text" name="prénom doctor" id="prénom doctor" placeholder="prénom doctor" value={prenomD}   onChange={(event) => setPrenomD(event.target.value)}
  />
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="nom doctor" type="text" name="nom doctor" id="nom doctor" placeholder="nom doctor" value={nomD} onChange={(event) => setNomD(event.target.value)}
  />
   </div>
   </div>
   <div class="formbold-input-wrapp formbold-mb-3">

   <div> 

        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="universitaire" type="text" name=" universitaire" id=" universitaire" placeholder=" universitaire" value={univ}   onChange={(event) => setUniv(event.target.value)}
  />
   <label
                class="formbold-form-label"
              >
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="date"
                id="La date"
                value={d}
                onChange={(event) => setD(event.target.value)}
              />
           
   </div>
   </div>
          <div >
             
            <label
                 class="formbold-form-label"
              >
            APTE/INAPTE        
            </label>
              <select 
                className="appearance-none block text-right w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={apte}
 onChange={(event) => setApte(event.target.value)} >
  <option value="Apte">Apte </option>
  <option value="Inapte">Inapte</option>
</select>
            </div>
            <Link to="/AffichageCertificatDAptitude">
              <button
                className="text-white mt-10 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                style={{
                  backgroundColor: currentColor,
                }}
                onClick={handleSubmit}
              >
                تسجيل
              </button>
            </Link>
            <button
               className="text-white mt-10 font-bold h-1/2 uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
               type="button"
               style={{
                 backgroundColor: currentColor,
               }}
              onClick={() => setShowModal(true)}
            >
              رفع
            </button>

            </div>
      </div>
      
           
            
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="formbold-main-wrapper">
                    <div className="formbold-form-wrapper">
                      {/content/}
                      {/body/}
                      <div className="formbold-input-wrapp  text-right formbold-mb-3">
                        <div>
                          <input
                            className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="file"
                            onChange={handleFileChange}
                            placeholder="image"
                          />
                        </div>
                      </div>

                      {/footer/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-gray-200 text-gray-400 active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          إلغاء
                        </button>
                        <button
                          className="text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                          style={{
                            backgroundColor: currentColor,
                          }}
                          onClick={() => handleUpload(idBenef)}
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
          </div>
        </div>
      </div>

    
   
    
   
    </>
  );
};

export default CertficatDaptitudePhysique;