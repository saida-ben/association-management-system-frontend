import React , {useEffect} from 'react'
import { Header, Navbar1 } from '../components';
import {Link} from 'react-router-dom';
import Items from './Items';
import NavNex from './NavNex';
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar, Sidebar } from '../components';
const AttestationBesoin = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const [demande, setDemande] =React. useState([]);
  const [candidat,   setCandidat  ] =React. useState([]);

  const [idBenef, setIdBenf] = React.useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setIdBenf(id);
  }, []);

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
  
      fetch('http://127.0.0.1:8000/api/besoin', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.href = `/AffichageAttestationBesoin?id=${idBenef}`;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  let a=1;
  const [etat, setEtat] = React.useState('');
  const [nomB, setNomB] = React.useState('');
  const [prenomB, setPrenomB] = React.useState('');
  const [pP, setPP] = React.useState('');
  const [pM, setPM] = React.useState('');
  const [nP, setNP] = React.useState('');
  const [nM, setNM] = React.useState('');
  const [dateN, setDateN] = React.useState('');
  const [lieuN, setLieuN] = React.useState('');
  const [profession, setProfession] = React.useState('');
  const [cin, setCin] = React.useState('');
  const [dB, setDB] = React.useState('');
  const [lieu, setLieu] = React.useState('');

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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      dB , lieu,idBenef,cin,
    });
      const response = await fetch('http://127.0.0.1:8000/api/besoin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({  dB , lieu, idBenef, cin})
      });
      const data = await response.json();
      console.log(data);
     
      window.location.href = `/AffichageAttestationBesoin?id=${idBenef}`;

  };
  return (
   <> {activeMenu ? (
    <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
      <Sidebar yourId={a} />
    </div>
  ) : (
    <div className="w-0 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
      <Sidebar yourId={a} />

    </div>
  )}
   
    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
      <Navbar yourId={a}  />
    </div>

<NavNex yourId={idBenef}/>
          <div class="formbold-main-wrapper">
  <div >
    
      <div >
        <label for="firstname" class="formbold-form-label ml-40"> 
        شهادة الإحتياج <h1> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]} {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]}   </h1>
     </label>
</div>
<div>
         <Items   for="رقم.ب.ت " type="text" name="رقم.ب.ت" id="رقم.ب.ت" placeholder="رقم.ب.ت"/>
   <input   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
   for="رقم.ب.ت " type="text" name="رقم.ب.ت" id="رقم.ب.ت" placeholder="رقم.ب.ت"  value={cin} onChange={(event) => setCin(event.target.value)}/>
        
        
 
   
        </div>
      
   


 


    
   <Items   for="مكان " type="text" name="مكان" id="مكان" placeholder="مكان"/>
   <input   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
   for="مكان " type="text" name="مكان" id="مكان" placeholder="مكان"  value={lieu} onChange={(event) => setLieu(event.target.value)}/>
    <Items   for= "تاريخ" type="date" name="تاريخ" placeholder= "تاريخ"/>
      <input  className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "تاريخ" type="date" name="تاريخ" placeholder= "تاريخ" value={dB} onChange={(event) => setDB(event.target.value)}/>
   <div className="flex gap-4">
  <button
   
    className="formbold-btn"
    style={{
      backgroundColor: currentColor,
    }}
    onClick={handleSubmit}
  >
    تسجيل
  </button>
  <button
 className="formbold-btn"   
    style={{
      backgroundColor: currentColor,
    }}
    onClick={() => setShowModal(true)}
  >
    رفع
  </button>
</div>


            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="formbold-main-wrapper">
                    <div className="formbold-form-wrapper">
                      {/*content*/}
                      {/*body*/}
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
    
  

</>
  )
}

export default AttestationBesoin
