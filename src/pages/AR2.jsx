import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import {Link} from 'react-router-dom';
import Items from '../pages/Items';
import Item from '../pages/Item';

import { Sidebar, Navbar } from '../components';
import React, { useRef,useEffect} from 'react'
import { employeeData } from '../data/dummy';
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';

function AR2() {
  const urlParams = new URLSearchParams(window.location.search);
  const idCandidat = urlParams.get('id');
  const dateR = urlParams.get('dateR');
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  const [A, setA] = React.useState([]);

  const [showActivité, setShowModalActivité] = React.useState(false);
    const [showInfraction, setShowModalInfraction] = React.useState(false);
    const [showIncident, setShowModalIncident] = React.useState(false);
    const [EditInfraction, setEditInfraction] = React.useState(false);
    const [EditActivity, setEditActivity] = React.useState(false);
    const [EditIncident, setEditIncident] = React.useState(false);
    const [EditSeance, setEditSeance] = React.useState(false);

    

    
    const [showAbsence, setShowModalAbsence] = React.useState(false);
const [etat,setEtat]= React.useState('');
const [encadrant,setEncadrant]= React.useState('');
const [tempsA,setTempsA]= React.useState('');
const [type,setType]= React.useState('');
const [activite,setActivite]= React.useState('');
const [infraction,setInfraction]= React.useState('');
const [tempsI,setTempsI]= React.useState('');
const [decision,setDecision]= React.useState('');
const [raisonI,setRaisonI]= React.useState('');
const [accident,setAccident]= React.useState('');
const [decisionA,setDecisionA]= React.useState('');
const [score,setScore]= React.useState('');
const [prof,setProf]= React.useState('');
const [debutS,setDebutS]= React.useState('');
const [finS,setFinS]= React.useState('');
const [nom,setNom]= React.useState('');

const [prenom,setPrenom]= React.useState('');
const [seance,setSeance]= React.useState('');
const [presence,setPresence]= React.useState('');
const [id,setId]= React.useState('');

//edit Infraction




async function editInfraction(I)
{
  setEditInfraction(true)
  setId(I.id);
  setNom(I.nom);
  setPrenom(I.prenom);
 setInfraction(I.infraction);
 setTempsI(I.tempsI);
 setRaisonI(I.raisonI);
 setDecision(I.decision);

 
}
async function updateInfraction(event) {
  event.preventDefault();

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/updatInfraction/${I.find(u => u.id === id).id || id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        nom: nom,
        prenom: prenom,
        infraction: infraction,
        tempsI: tempsI,
        raisonI: raisonI,
        decision: decision,
       
      })
    });

    if (response.ok) {
      setEditInfraction(false)
      
      Loadi();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
//edit Activity



async function editActivity(A)
{
  setEditActivity(true)
  setId(A.id);
  setNom(A.nom);
  setPrenom(A.prenom);
 setActivite(A.activite);
 setType(A.type);
 setEncadrant(A.encadrant);
 setTempsA(A.tempsA);

 
}
async function updateActivity(event) {
  event.preventDefault();

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/updatactivity/${A.find(u => u.id === id).id || id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        nom: nom,
        prenom: prenom,
        activite: activite,
       
        type: type,
        encadrant: encadrant,
        tempsA: tempsA,
      })
    });

    if (response.ok) {
      setEditActivity(false)
      
      Loada();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
//edit Incident



async function editIncident(A)
{
  setEditIncident(true)
  setId(A.id);
  setNom(A.nom);
  setPrenom(A.prenom);
 setAccident(A.accident);
 setScore(A.score);
 setDecisionA(A.decisionA);
 setTempsA(A.tempsA);

 
}
async function updateIncident(event) {
  event.preventDefault();

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/updatincident/${A.find(u => u.id === id).id || id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,

        accident: accident,
        nom: nom,
        prenom: prenom,
        score: score,
        decisionA: decisionA,
        tempsA: tempsA,
      })
    });

    if (response.ok) {
      setEditIncident(false)
      
      Loadincident();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

//edit seance

async function editSeance(A)
{
  setEditSeance(true)
  setId(A.id);
  setNom(A.nom);
  setPrenom(A.prenom);
 setSeance(A.seance);
 setProf(A.prof);
 setPresence(A.presence);
 setDebutS(A.debutS);
 setFinS(A.finS);


 
}
async function updateSeance(event) {
  event.preventDefault();

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/updatSeance/${absence.find(u => u.id === id).id || id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,

        seance: seance,
        nom: nom,
        prenom: prenom,
        prof: prof,
        presence: presence,
        debutS: debutS,
        finS: finS,

      })
    });

    if (response.ok) {
      setEditSeance(false)
      
      Loads();
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}


const [incident,setIncident]= React.useState([]);
const [absence,setAbsence]= React.useState([]);


const [I,setI]= React.useState([]);

const [demande,setDemande]= React.useState([]);
const [enq,setEnq]= React.useState([]);
const [candidat,setCandidat]= React.useState([]);

useEffect(() => {
  fetch('http://localhost:8000/api/affAccident')
    .then((response) => response.json())
    .then((data) => {
      setIncident(data);
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
  fetch('http://localhost:8000/api/affd')
    .then((response) => response.json())
    .then((data) => {
      setDemande(data);
    })
    .catch((error) => console.error(error));
}, []);

useEffect(() => {
  fetch('http://localhost:8000/api/affSeance')
    .then((response) => response.json())
    .then((data) => {
      setAbsence(data);
    })
    .catch((error) => console.error(error));
}, []);
const DeleteEmployee = (id) => {
  fetch(`http://localhost:8000/api/supprimerAct/${id}`, {
    method: 'delete'
  })
  
  .then(data => {
    Loada();
  })
  .catch(error => console.error(error));
};
const DeleteInf = (id) => {
  fetch(`http://localhost:8000/api/supprimerInf/${id}`, {
    method: 'delete'
  })
  
  .then(data => {
    Loadi();
  })
  .catch(error => console.error(error));
};

const DeleteIncident = (id) => {
  fetch(`http://localhost:8000/api/supprimerInc/${id}`, {
    method: 'delete'
  })
  
  .then(data => {
    Loadincident();
  })
  .catch(error => console.error(error));
};

const DeleteSeance = (id) => {
  fetch(`http://localhost:8000/api/supprimerSeance/${id}`, {
    method: 'delete'
  })
  
  .then(data => {
    Loads();
  })
  .catch(error => console.error(error));
};
useEffect(() => {
  fetch('http://localhost:8000/api/affActivite')
    .then((response) => response.json())
    .then((data) => {
      setA(data);
    })
    .catch((error) => console.error(error));
}, []);
function Loadi() {
  fetch('http://localhost:8000/api/affInfraction')
      .then((response) => response.json())
      .then((data) => {
        setI(data);
      })
      .catch((error) => console.error(error));
}
function Loada() {
  fetch('http://localhost:8000/api/affActivite')
  .then((response) => response.json())
  .then((data) => {
    setA(data);
  })
  .catch((error) => console.error(error));
}
function Loadincident() {
  fetch('http://localhost:8000/api/affAccident')
    .then((response) => response.json())
    .then((data) => {
      setIncident(data);
    })
    .catch((error) => console.error(error));
}

function Loads() {
  fetch('http://localhost:8000/api/affSeance')
  .then((response) => response.json())
  .then((data) => {
    setAbsence(data);
  })
  .catch((error) => console.error(error));
}
useEffect(() => {
  fetch('http://localhost:8000/api/affInfraction')
    .then((response) => response.json())
    .then((data) => {
      setI(data);
    })
    .catch((error) => console.error(error));
}, []);



const enreg = async (event) => {
  event.preventDefault();
  console.log({
     dateR,
  });
  try {
    const response = await fetch('http://127.0.0.1:8000/api/addRegister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({    dateR })
    });
    const data = await response.json();
    console.log(data);
    window.location.href = `/Registres`;

   
  } catch (error) {
    console.error(error);
  }
};
const enregistreract = async (event) => {
  event.preventDefault();
  console.log({
    activite, encadrant, type , tempsA,nom , prenom, dateR,
  });
  try {
    const response = await fetch('http://127.0.0.1:8000/api/addActivite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  activite, encadrant, type , tempsA, dateR ,nom , prenom})
    });
    const data = await response.json();
    console.log(data);
    
    setShowModalActivité(false);
    Loada();
    //Navigate('./Employees.jsx');
   // onSubmit(data);
  } catch (error) {
    console.error(error);
  }
};

const enregistrerSeance = async (event) => {
  event.preventDefault();
  console.log({
    seance, 	prof, presence , debutS, finS, dateR,nom , prenom,
  });
  try {
    const response = await fetch('http://127.0.0.1:8000/api/enregistrerSeance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({   seance, 	prof, presence ,debutS, finS, dateR,nom , prenom})
    });
    const data = await response.json();
    console.log(data);
    
    setShowModalAbsence(false);
    Loads();
    //Navigate('./Employees.jsx');
   // onSubmit(data);
  } catch (error) {
    console.error(error);
  }
};
const [selectedFile, setSelectedFile] = React.useState(null);

const handleFileChange = (event) => {
  setSelectedFile(event.target.files[0]);
};
const enregistrerInfraction = async (event) => {
  event.preventDefault();
  if (selectedFile) {
    console.log({
      file: selectedFile,
    });
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('infraction', infraction);
    formData.append('raisonI', raisonI);
    formData.append('decision', decision);
    formData.append('tempsI', tempsI);
    formData.append('dateR', dateR);
    formData.append('nom', nom);
    formData.append('prenom', prenom);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/enregistrerInfraction', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);

      setShowModalInfraction(false);
      Loadi();
      // Navigate('./Employees.jsx');
      // onSubmit(data);
    } catch (error) {
      console.error(error);
    }
  }
};


const addAccident = async (event) => {
  event.preventDefault();
  if (selectedFile) {
    console.log({
      file: selectedFile,
    });
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('accident', accident);
    formData.append('score', score);
    formData.append('decisionA', decisionA);
    formData.append('tempsA', tempsA);
    formData.append('dateR', dateR);
    formData.append('nom', nom);
    formData.append('prenom', prenom)
  try {
    const response = await fetch('http://127.0.0.1:8000/api/addAccident', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    
    setShowModalIncident(false);
    Loadincident();
    //Navigate('./Employees.jsx');
   // onSubmit(data);
  } catch (error) {
    console.error(error);
  }
}
};
const handleClick = () => {
  // Set the showModalActivité state to true
  setShowModalActivité(true);

  // Access the value of dateR here
  console.log(dateR);
};

    return (
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
      
        {activeMenu ? (
          <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
            <Sidebar yourId={2}  />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar yourId={2}  />

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
              <Navbar yourId={2} />          </div>
 
        <div class=" py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="mr-4  text-right flex justify-between">
                <h6 class="text-blueGray-700 text-right text-xl font-bold">
                السجل اليومي 
                </h6>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
               
                <div class="flex flex-wrap">
                 
              
                
                 
                
                  


                </div>
        


        



                

            
               









                  <hr class="mt-6 border-b-1 border-blueGray-300"/>
        
                  <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">تتبع سلوك المستفيد</h3>
                  <button 
                  class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
                  onClick={() => setShowModalInfraction(true)}
                  style={{
                    backgroundColor: currentColor ,
                    }}
                  >
                  أضف مخالفة
                </button>
        <div class="bg-white shadow-md rounded my-6">
            <table class="w-full table-auto">
                <thead>   
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left"></th>
                        <th class="py-3 px-6 text-left">القرار</th>
                        <th class="py-3 px-6 text-center">المبرر</th>
                        <th class="py-3 px-6 text-center">المخالفة</th>
                        <th class="py-3 px-6 text-center">التاريخ</th>
                        <th class="py-3 px-6 text-center"> النسب</th>
                         <th class="py-3 px-6 text-center"> الإسم  </th>
                    </tr>
                </thead>
                {I.filter((item) =>  item.dateR === dateR).map((I) => (
                <tbody class="text-gray-600 text-sm font-light">
                    
                    <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    <td class="py-3 px-6 text-center">
                            <div class="flex item-center justify-center">
                               
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  onClick={() => editInfraction(I)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  onClick={() => DeleteInf(I.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                            {I.decision}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                            {I.raisonI}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                            {I.infraction}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                                {I.tempsI}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                                {I.nom}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left">
                            <div class="flex items-center">
                                {I.prenom}
                            </div>
                        </td>
                    </tr>
                  
                              </tbody>
                               ))}
            </table>
        </div>
        <hr class="mt-6 border-b-1 border-blueGray-300"/> 


        <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">الأنشطة</h3>
        <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
        onClick={handleClick}
        style={{
          backgroundColor: currentColor ,
          }}
>
                  أضف نشاط
                </button>

        <div class="bg-white  shadow-md rounded my-6">
        <table className="w-full table-auto">
  <thead>
    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
      <th className="py-3 px-6 text-left"></th>
      <th className="py-3 px-6 text-left">مؤطر النشاط</th>
      <th className="py-3 px-6 text-center">نوع النشاط</th>
      <th className="py-3 px-6 text-center">النشاط</th>
      <th className="py-3 px-6 text-center">وقت النشاط</th>
      <th class="py-3 px-6 text-center"> النسب</th>
                         <th class="py-3 px-6 text-center"> الإسم  </th>
    </tr>
  </thead>
  {A.filter((item) =>  item.dateR === dateR).map((A) => (

  <tbody key={A.id} className="text-gray-600 text-sm font-light">
      <tr  className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
           
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => editActivity(A)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => DeleteEmployee(A.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </td>
        <td className="py-3 px-6 text-left">{A.encadrant}</td>
        <td className="py-3 px-6 text-left">{A.type}</td>
        <td className="py-3 px-6 text-left">{A.activite}</td>
        <td className="py-3 px-6 text-left">{A.tempsA}</td>
        <td className="py-3 px-6 text-left">{A.nom}</td>
        <td className="py-3 px-6 text-left">{A.prenom}</td>
      </tr>
    
  </tbody>
  ))}
</table>

                      </div>

                      <hr class="mt-6 border-b-1 border-blueGray-300"/> 
<h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">الحوادث</h3>


<button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
   onClick={() => setShowModalIncident(true)}
   style={{
    backgroundColor: currentColor ,}}
>
          أضف حاذثة
        </button>
         
<div class="bg-white shadow-md rounded my-6">
                  <table class="w-full table-auto">
                      <thead>     
                          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th class="py-3 px-6 text-left"></th>
                              <th class="py-3 px-6 text-left"> القرار</th>
                              <th class="py-3 px-6 text-center">تقييم الحاذثة </th>
                              <th class="py-3 px-6 text-center">الحاذثة</th>
                              <th class="py-3 px-6 text-center">وقت الحاذثة</th>
                              <th class="py-3 px-6 text-center"> النسب</th>
                         <th class="py-3 px-6 text-center"> الإسم  </th>
                          </tr>
                      </thead>
                      {incident.filter((item) =>  item.dateR === dateR).map((incident) => (


                      <tbody class="text-gray-600 text-sm font-light">
                          
                          <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                          <td class="py-3 px-6 text-center">
                                  <div class="flex item-center justify-center">
                                     
                                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  onClick={() => editIncident(incident)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                          </svg>
                                      </div>
                                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  onClick={() => DeleteIncident(incident.id)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                          </svg>
                                      </div>
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                  {incident.decisionA}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                  {incident.score}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                  {incident.accident}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                    {incident.tempsA}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                  {incident.nom}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                    {incident.prenom}
                                  </div>
                              </td>
                       
                          </tr>
                        
                                    </tbody>
                      ))}          
                  </table>
              </div>

         
              <hr class="mt-6 border-b-1 border-blueGray-300"/> 
<h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">الحصص</h3>
<button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
    onClick={() => setShowModalAbsence(true)}
    style={{
      backgroundColor: currentColor ,
      }}
>
          أضف غياب
        </button>
<div class="bg-white shadow-md rounded my-6">
                  <table class="w-full table-auto">
                      <thead>
                          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th class="py-3 px-6 text-left"></th>
                              <th class="py-3 px-6 text-left">المبرر</th>
                              <th class="py-3 px-6 text-center">الأستاذ</th>
                              <th class="py-3 px-6 text-center">الحصة</th>
                              <th class="py-3 px-6 text-center">نهاية الحصة</th>
                              <th class="py-3 px-6 text-center">بداية الحصة</th>
                              <th class="py-3 px-6 text-center"> النسب</th>
                         <th class="py-3 px-6 text-center"> الإسم  </th>

                          </tr>
                      </thead>
                      {absence.filter((item) =>  item.dateR === dateR).map((absence) => (

                      <tbody class="text-gray-600 text-sm font-light">
                          
                          <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                          <td class="py-3 px-6 text-center">
                                  <div class="flex item-center justify-center">
                                      
                                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => editSeance(absence)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                          </svg>
                                      </div>
                                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={() => DeleteSeance(absence.id)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                          </svg>
                                      </div>
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                  {absence.presence}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                  {absence.prof}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                  {absence.seance}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                    {absence.finS}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                    {absence.debutS}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                    {absence.nom}
                                  </div>
                              </td>
                              <td class="py-3 px-6 text-left">
                                  <div class="flex items-center">
                                      
                                    {absence.prenom}
                                  </div>
                              </td>
                       
                          </tr>
                        
                                    </tbody>
                        ))}
                  </table>
              </div>

             

            
                       
           
           
              {showActivité ? (
        <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم " type="الإسم" name="الإسم " id="الإسم" placeholder='الإسم ' value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النسب" type="النسب" name="النسب" id="النسب" placeholder="النسب" value={nom} onChange={(event) => setNom(event.target.value)}/>
       </div>
                <div>
                <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النشاط" type="text" name="النشاط" id="" placeholder='النشاط'  value={activite} onChange={(event) => setActivite(event.target.value)}/>
     <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="وقت النشاط" type="time" name="وقت النشاط" id="" placeholder='وقت النشاط' value={tempsA} onChange={(event) => setTempsA(event.target.value)}/>
 
         </div>

        <div>   
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="مؤطر النشاط" type="text" name="مؤطر النشاط" id="مؤطر النشاط" placeholder="مؤطر النشاط" value={encadrant} onChange={(event) => setEncadrant(event.target.value)}/>

        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="نوع النشاط" type="text" name="نوع النشاط" id="نوع النشاط" placeholder="نوع النشاط" value={type} onChange={(event) => setType(event.target.value)}/>
   
        </div>
       
                  </div>
     
      
                
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setShowModalActivité(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={enregistreract}
                    style={{
                      backgroundColor: currentColor ,
                      }}
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
              {EditActivity ? (
        <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم " type="الإسم" name="الإسم " id="الإسم" placeholder='الإسم ' value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النسب" type="النسب" name="النسب" id="النسب" placeholder="النسب" value={nom} onChange={(event) => setNom(event.target.value)}/>
       </div>
                <div>
                <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النشاط" type="text" name="النشاط" id="" placeholder='النشاط'  value={activite} onChange={(event) => setActivite(event.target.value)}/>
     <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="وقت النشاط" type="time" name="وقت النشاط" id="" placeholder='وقت النشاط' value={tempsA} onChange={(event) => setTempsA(event.target.value)}/>
 
         </div>

        <div>   
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="مؤطر النشاط" type="text" name="مؤطر النشاط" id="مؤطر النشاط" placeholder="مؤطر النشاط" value={encadrant} onChange={(event) => setEncadrant(event.target.value)}/>

        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="نوع النشاط" type="text" name="نوع النشاط" id="نوع النشاط" placeholder="نوع النشاط" value={type} onChange={(event) => setType(event.target.value)}/>
   
        </div>
       
                  </div>
     
      
                
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setEditActivity(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={updateActivity}
                    style={{
                      backgroundColor: currentColor ,
                      }}
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
      
        {showIncident ? (
        <>
           <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

                {/*header*/}
               
                  
                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم" type="الإسم" name="الإسم" id="الإسم" placeholder='الإسم' value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النسب" type="النسب" name="النسب" id="النسب" placeholder="النسب" value={nom} onChange={(event) => setNom(event.target.value)}/>
       </div>
      <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="وقت الحادثة" type="time" name="وقت الحادثة" id="" placeholder='وقت الحادثة' value={tempsA} onChange={(event) => setTempsA(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الحادثة"type="text" name="الحادثة"id="الحادثة" placeholder="الحادثة" value={accident} onChange={(event) => setAccident(event.target.value)}/>
       </div>

        <div>   
             <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="القرار" value={decisionA} onChange={(event) => setDecisionA(event.target.value)}
  type="text" name="القرار" id="القرار" placeholder="القرار"/>

        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="تقييم الحادثة" type="text" name="تقييم الحادثة" id="تقييم الحادثة" placeholder="تقييم الحادثة" value={score} onChange={(event) => setScore(event.target.value)}/>
   
        </div>
        <br></br>
        <div>
        <input
                            type="file"
                            onChange={handleFileChange}
                            placeholder="image"
                          />
        </div>
     
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setShowModalIncident(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={addAccident}
                    style={{
                      backgroundColor: currentColor ,
                      }}
                  >
                     حفظ 
                  </button>
                </div>
              </div>
            </div>
          </div>
                {/*footer*/}
               
           
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
  {EditIncident ? (
        <>
           <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

                {/*header*/}
               
                  
                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم " type="الإسم" name="الإسم " id="الإسم" placeholder='الإسم ' value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النسب" type="النسب" name="النسب" id="النسب" placeholder="النسب" value={nom} onChange={(event) => setNom(event.target.value)}/>
       </div>
      <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="وقت الحادثة" type="time" name="وقت الحادثة" id="" placeholder='وقت الحادثة' value={tempsA} onChange={(event) => setTempsA(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الحادثة"type="text" name="الحادثة"id="الحادثة" placeholder="الحادثة" value={accident} onChange={(event) => setAccident(event.target.value)}/>
       </div>

        <div>   
             <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="القرار" value={decisionA} onChange={(event) => setDecisionA(event.target.value)}
  type="text" name="القرار" id="القرار" placeholder="القرار"/>

        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="تقييم الحادثة" type="text" name="تقييم الحادثة" id="تقييم الحادثة" placeholder="تقييم الحادثة" value={score} onChange={(event) => setScore(event.target.value)}/>
   
        </div>
     
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setEditIncident(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={updateIncident}
                    style={{
                      backgroundColor: currentColor ,
                      }}
                  >
                     حفظ 
                  </button>
                </div>
              </div>
            </div>
          </div>
                {/*footer*/}
               
           
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showAbsence ? (
        <>
         <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

 
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم " type="الإسم" name="الإسم " id="الإسم" placeholder='الإسم ' value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النسب" type="النسب" name="النسب" id="النسب" placeholder="النسب" value={nom} onChange={(event) => setNom(event.target.value)}/>
       </div>
      <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="بداية الحصة" type="time" name="بداية الحصة" id="" placeholder='بداية الحصة' value={debutS} onChange={(event) => setDebutS(event.target.value)}/>
  <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="نهاية الحصة" type="time" name="نهاية الحصة" id="" placeholder='نهاية الحصة' value={finS} onChange={(event) => setFinS(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الحصة"type="text" name="الحصة"id="الحصة" placeholder="الحصة" value={seance} onChange={(event) => setSeance(event.target.value)}/>
       </div>

        <div>   
             <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الأستاذ" type="text" name="الأستاذ" id="الأستاذ" placeholder="الأستاذ" value={prof} onChange={(event) => setProf(event.target.value)}/>

        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المبرر" type="text" name="المبرر" id="المبرر" placeholder="المبرر" value={presence} onChange={(event) => setPresence(event.target.value)}/>
   
        </div>
     
      </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setShowModalAbsence(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={enregistrerSeance}
                    style={{
                      backgroundColor: currentColor ,
                      }}
                  >
                     حفظ 
                  </button>
                </div>
              </div>
            </div>
          </div>
                {/*footer*/}
               
           
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{EditSeance ? (
        <>
         <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

 
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم " type="الإسم" name="الإسم " id="الإسم" placeholder='الإسم ' value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النسب" type="النسب" name="النسب" id="النسب" placeholder="النسب" value={nom} onChange={(event) => setNom(event.target.value)}/>
       </div>
      <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="بداية الحصة" type="time" name="بداية الحصة" id="" placeholder='بداية الحصة' value={debutS} onChange={(event) => setDebutS(event.target.value)}/>
  <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="نهاية الحصة" type="time" name="نهاية الحصة" id="" placeholder='نهاية الحصة' value={finS} onChange={(event) => setFinS(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الحصة"type="text" name="الحصة"id="الحصة" placeholder="الحصة" value={seance} onChange={(event) => setSeance(event.target.value)}/>
       </div>

        <div>   
             <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الأستاذ" type="text" name="الأستاذ" id="الأستاذ" placeholder="الأستاذ" value={prof} onChange={(event) => setProf(event.target.value)}/>

        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المبرر" type="text" name="المبرر" id="المبرر" placeholder="المبرر" value={presence} onChange={(event) => setPresence(event.target.value)}/>
   
        </div>
     
      </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setEditSeance(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={updateSeance}
                    style={{
                      backgroundColor: currentColor ,
                      }}
                  >
                     حفظ 
                  </button>
                </div>
              </div>
            </div>
          </div>
                {/*footer*/}
               
           
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
{showInfraction ? (
        <>
           <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">
{/*content*/}
              
                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم " type="الإسم" name="الإسم " id="الإسم" placeholder='الإسم ' value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النسب" type="النسب" name="النسب" id="النسب" placeholder="النسب" value={nom} onChange={(event) => setNom(event.target.value)}/>
       </div>
      <div>
      <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="المخالفة"type="text" name="المخالفة"id="المخالفة" placeholder="المخالفة" value={infraction} onChange={(event) => setInfraction(event.target.value)}/>
      
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="التاريخ" type="time" name="التاريخ" id="" placeholder='التاريخ' value={tempsI} onChange={(event) => setTempsI(event.target.value)}/>
 
        
      </div>

        <div>   
        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="القرار" type="text" name="القرار" id="القرار" placeholder="القرار" value={decision} onChange={(event) => setDecision(event.target.value)}/>
   
             <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المبرر" type="text" name="المبرر" id="المبرر" placeholder="المبرر" value={raisonI} onChange={(event) => setRaisonI(event.target.value)}/>

       
        </div>
        <br></br>
        <div>
        <input
                            type="file"
                            onChange={handleFileChange}
                            placeholder="image"
                          />
        </div>
     
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setShowModalInfraction(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={enregistrerInfraction}
                    style={{
                      backgroundColor: currentColor ,
                      }}
                  >
                     حفظ 
                  </button>
                </div>
              </div>
            </div>
          </div>
                {/*footer*/}
               
           
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
           
      ) : null}

{EditInfraction ? (
        <>
           <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">
{/*content*/}
              
                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
                <div>
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم " type="الإسم" name="الإسم " id="الإسم" placeholder='الإسم ' value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
 
        
         <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="النسب" type="النسب" name="النسب" id="النسب" placeholder="النسب" value={nom} onChange={(event) => setNom(event.target.value)}/>
       </div>
      <div>
      <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="المخالفة"type="text" name="المخالفة"id="المخالفة" placeholder="المخالفة" value={infraction} onChange={(event) => setInfraction(event.target.value)}/>
      
        <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="التاريخ" type="time" name="التاريخ" id="" placeholder='التاريخ' value={tempsI} onChange={(event) => setTempsI(event.target.value)}/>
 
        
      </div>

        <div>   
        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="القرار" type="text" name="القرار" id="القرار" placeholder="القرار" value={decision} onChange={(event) => setDecision(event.target.value)}/>
   
             <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المبرر" type="text" name="المبرر" id="المبرر" placeholder="المبرر" value={raisonI} onChange={(event) => setRaisonI(event.target.value)}/>

       
        </div>
     
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setEditInfraction(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={updateInfraction}
                    style={{
                      backgroundColor: currentColor ,
                      }}
                  >
                     حفظ 
                  </button>
                </div>
              </div>
            </div>
          </div>
                {/*footer*/}
               
           
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
           
      ) : null}

              </form>
            </div>
            </div>
          </div>
          <footer class="relative  pt-8 pb-6 mt-2">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                </div>
              </div>
            </div>
          </div>
        </footer>
        </div>
        </div>
        </div>
        </div>
)
}
;
export default AR2;