import React , {useEffect} from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import Items from './Items';
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar, Sidebar } from '../components';  
import NavNex from './NavNex';
const AttestationEtatCivil = () => {
  const [showModal, setShowModal] = React.useState(false);

  const [idBenef, setIdBenef] = React.useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setIdBenef(id);
  }, []);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  const [child, setChild] =React. useState([]);
  const [cert, setCert] =React. useState([]);
  const [off, setOff] = React.useState('');
  const [nomB, setNomB] = React.useState('');
  const [prenomB, setPrenomB] = React.useState('');
  const [residence, setResidence] = React.useState('');
  const [th, setTh] = React.useState('');
  const [dC, setDC] = React.useState('');
  const [C, setC] = React.useState('');

 
  useEffect(() => {
      fetch('http://localhost:8000/api/in')
        .then(response => response.json())
        .then(data => {
          setChild(data);
        })
        .catch(error => console.error(error));
    }, []);
    let a =1;

  useEffect(() => {
    fetch('http://localhost:8000/api/c')
      .then(response => response.json())
      .then(data => {
        setCert(data);
      })
      .catch(error => console.error(error));
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      off, th, dC, C, idBenef,
    });
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('idBenef', idBenef);
      formData.append('off', off);
      formData.append('th', th);
      formData.append('dC', dC);
      formData.append('C', C);
    
      
  
      const response = await fetch('http://127.0.0.1:8000/api/Etat', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log(data);
      console.log(data.num);
  
      window.location.href = `/AffichageCEtatCivil?id=${idBenef}`;
  
    } catch (error) {
      console.error(error);
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
    <>{activeMenu ? (
      <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
        <Sidebar yourId={a}/>
      </div>
    ) : (
      <div className="w-0 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
        <Sidebar yourId={a} />
  
      </div>
    )}
     
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
        <Navbar   yourId={a}/>
      </div>

  <NavNex yourId={idBenef}/>
    <div class="formbold-main-wrapper">
    <div class="formbold-form-wrapper">
    <div >
        <label for="firstname" class="formbold-form-label ml-40"> 
        بطاقة الحالة المدنية
        <h1> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]} {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]}   </h1>

</label>
   
      </div>
    <div>
      <Items  for="ان ضابط الحالة المدنية" type="text" name="ان ضابط الحالة المدنية" id="ان ضابط الحالة المدنية" placeholder="ان ضابط الحالة المدنية" />
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="ان ضابط الحالة المدنية" type="text" name="ان ضابط الحالة المدنية" id="ان ضابط الحالة المدنية" placeholder="ان ضابط الحالة المدنية" value={off} onChange={(event) => setOff(event.target.value)}/>
</div>

      <div >
        <div>
      
  <Items   for="حسب رسم الولادة عدد" type="text" name="حسب رسم الولادة عدد" id="حسب رسم الولادة عدد"/>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="حسب رسم الولادة عدد" type="text" name="حسب رسم الولادة عدد" id="حسب رسم الولادة عدد" placeholder="حسب رسم الولادة عدد" value={th} onChange={(event) => setTh(event.target.value)}/>
</div>
</div>
<div >
        <div>
        <Items  for="بتاريخ" name="بتاريخ" id="بتاريخ" placeholder="بتاريخ"/>
        <input className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="بتاريخ" type="date" name="بتاريخ" id="بتاريخ" placeholder="بتاريخ" value={dC} onChange={(event) => setDC(event.target.value)}/>
  <Items  for="الموافق ل"  type="text" name="الموافق ل"  id="الموافق ل"  placeholder="الموافق ل"  />
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الموافق ل"  type="text" name="الموافق ل"  id="الموافق ل"  placeholder="الموافق ل" value={C} onChange={(event) => setC(event.target.value)} />
</div>
</div>


     

      

  <button to="/AffichageExonérationFrais"
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn" onClick={handleSubmit}>تسجيل
    </button>
    <button 
    style={{
    backgroundColor: currentColor , marginLeft:"10px",
    }}
    className="formbold-btn"               onClick={() => setShowModal(true)}
    >رفع
    </button>
  
</div>
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
                          onClick={handleFileChange}
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
  </>
    
  )
}

export default AttestationEtatCivil
