import React, {useEffect} from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import Items from './Items';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar1 from '../components/Navbar1';
import NavNex from './NavNex';
import { Navbar, Sidebar } from '../components';


const ParcourScolaire = () => {
  const [idBenef, setIdBenef] = React.useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setIdBenef(id);
  }, []);
  let a=1;
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const [etabliss, setEtabliss] = React.useState('');
  const [annSc, setAnnSc] = React.useState('');
  const [nivSc, setNivSc] = React.useState('');
  const [MS1, setMS1] = React.useState('');
  const [MS2, setMS2] = React.useState('');
  const [MG, setMG] = React.useState('');
  const [decisionM, setDecisionM] = React.useState('');
  
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

    fetch('http://127.0.0.1:8000/api/save', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = `/AffichageParcour?id=${idBenef}`;
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      etabliss,
      nivSc,
      annSc,
      MS1,
      MS2,
      MG,
      decisionM,
      idBenef,
    });
      const response = await fetch('http://127.0.0.1:8000/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ etabliss, nivSc, annSc, MS1, MS2, MG, decisionM,idBenef })
      });
      const data = await response.json();
      console.log(data);
      //Navigate('./Employees.jsx');
     // onSubmit(data);
     window.location.href = `/AffichageParcour?id=${idBenef}`;
   
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
        <label for="firstname" class="formbold-form-label ml-40"> 
        المسار الدراسي            <h1> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]} {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]}   </h1>

</label>
   
      </div>
  
  <div>
        <div>
        <Items  for="المؤسسة"type="text" name="المؤسسة" />
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المؤسسة"type="text" name="المؤسسة" id="المؤسسة" placeholder="المؤسسة" value={etabliss} onChange={(event) => setEtabliss(event.target.value)}/>
   <Items for=" القسم"type="text" name="القسم" />
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for=" القسم"type="text" name="القسم" id="القسم" placeholder="القسم" value={nivSc} onChange={(event) => setNivSc(event.target.value)} />
        <Items  for="الموسم الدراسي"type="text" name="الموسم الدراسي" />
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الموسم الدراسي"type="text" name="الموسم الدراسي" id="الموسم الدراسي" placeholder="الموسم الدراسي" value={annSc} onChange={(event) => setAnnSc(event.target.value)}/>
  
       </div>
      </div>
      <div>
        <div>
          <Items for="معدل الدورة 1 "  name="معدل الدورة 1 " />
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="معدل الدورة 1 " type="text" name="معدل الدورة 1 " id="معدل الدورة 1 " placeholder="معدل الدورة 1 " value={MS1} onChange={(event) => setMS1(event.target.value)}/>
   <Items for="معدل الدورة 2 "  name="معدل الدورة 2 " />
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="معدل الدورة 2 " type="text" name="معدل الدورة 2 " id="معدل الدورة 2 " placeholder="معدل الدورة 2 " value={MS2} onChange={(event) => setMS2(event.target.value)}/>
   <Items for="معدل العام" type="text" name="معدل العام" />
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="معدل العام"type="text" name="معدل العام" id="معدل العام" placeholder="معدل العام" value={MG} onChange={(event) => setMG(event.target.value)}/>
       </div>
      </div>
      <div class="formbold-mb-3">
        <Items  for="القرار السنوي" name="القرار السنوي"/>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="القرار السنوي"type="text" name="القرار السنوي"id="القرار السنوي" placeholder="القرار السنوي" value={decisionM} onChange={(event) => setDecisionM(event.target.value)}/>
      </div>

      
     
     
    <div className="button-container">
  
    <button
      style={{
        backgroundColor: currentColor,
        width: '150px', // Adjust the width as needed
        marginRight: '10px', // Add margin-right for space between buttons
      }}
      className="formbold-btn"
      onClick={handleSubmit}
    >
      تسجيل
    </button>
  
  <button
    style={{
      backgroundColor: currentColor,
      width: '150px', // Adjust the width as needed
    }}
    className="formbold-btn"
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
</div>
</div>
</div>


</>
)
}

export default ParcourScolaire
