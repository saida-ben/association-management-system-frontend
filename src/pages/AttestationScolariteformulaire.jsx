import React , {useEffect} from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'
import {Link} from 'react-router-dom';
import Items from './Items';

import { useStateContext } from '../contexts/ContextProvider';
import NavNex from './NavNex';
import { Navbar, Sidebar } from '../components';

const AttestationScolariteformulaire = () => {
  const [idBenef, setIdBenef] = React.useState(null);
  let a =5;
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setIdBenef(id);
  }, []);
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const [child, setChild] =React. useState([]);
  const [tuteur, setTuteur] =React. useState([]);
  const [RaisonS, setRaisonS] = React.useState('');
  const [dateS, setDateS] = React.useState('');
  const [remarques, setRemarques] = React.useState('');

  
 
  useEffect(() => {
      fetch('http://localhost:8000/api/in')
        .then(response => response.json())
        .then(data => {
          setChild(data);
        })
        .catch(error => console.error(error));
    }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/affich')
      .then(response => response.json())
      .then(data => {
            setTuteur(data);
      })
      .catch(error => console.error(error));
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
       dateS ,RaisonS,remarques,
    });
      const response = await fetch('http://127.0.0.1:8000/api/addScolarite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dateS ,RaisonS,remarques })
      });
      const data = await response.json();
      console.log(data);
      window.location.href = `/AttestationScolarite?id=${data.id}&idBenef=${idBenef}`;

   
  };
  return (
  <>  

<div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
        
          {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={a} />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar yourId={a} />

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
<div class="formbold-main-wrapper">
  
  <div class="formbold-form-wrapper">
      <div >
        <label for="firstname" class="formbold-form-label ml-40"> 
        شهادة المؤسسة 
        </label>
        <div>
        <label className='formbold-form-label text-right'  for="تاريخ الإنفصال " type="text" name="تاريخ الإنفصال " id="تاريخ الإنفصال " placeholder="تاريخ الإنفصال ">تاريخ الإنفصال </label>
    <input className="appearance-none text-right block w-full bg-gray-200 text-gray-400  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="تاريخ الإنفصال " type="date" name="تاريخ الإنفصال " id="تاريخ الإنفصال " placeholder="تاريخ الإنفصال " value={dateS} onChange={(event) => setDateS(event.target.value)}/>  
  <label  className='formbold-form-label text-right' for="أسباب الإنفصال" type="text" name="أسباب الإنفصال" id="أسباب الإنفصال" placeholder="أسباب الإنفصال">أسباب الإنفصال</label>
    <input className="appearance-none text-right block w-full bg-gray-200 text-gray-400  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="أسباب الإنفصال" type="text" name="أسباب الإنفصال" id="أسباب الإنفصال" placeholder="أسباب الإنفصال" value={RaisonS} onChange={(event) => setRaisonS(event.target.value)}/>
        </div>
      </div>
      <div>
  <label className='formbold-form-label text-right'   for=" : ملاحظات عامة" type="text" name=" : ملاحظات عامة" id=": ملاحظات عامة " placeholder=": ملاحظات عامة ">ملاحظات عامة </label>
    <input className="appearance-none text-right block w-full bg-gray-200 text-gray-400  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for=" : ملاحظات عامة" type="text" name=" : ملاحظات عامة" id=" : ملاحظات عامة" placeholder=" : ملاحظات عامة" value={remarques} onChange={(event) => setRemarques(event.target.value)}/>
        </div>
        <button
    style={{
    backgroundColor: currentColor , 
    }}
    className="formbold-btn" onClick={handleSubmit}>تسجيل
    </button>
      </div>
     
        
        
       
    




        
      


      
      
     
   
</div>

</div>
</div>
</div>

    
 
</> 
)
}


                   
                  


export default AttestationScolariteformulaire
