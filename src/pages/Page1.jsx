import React, {useEffect} from 'react'
import { Header } from '../components';
import {Link} from 'react-router-dom';
import Item from './Item';
import Items from './Items';
import { useStateContext } from '../contexts/ContextProvider';
import NavNex from '../pages/NavNex';
import { Navbar, Sidebar } from '../components';
const Page1 = () => {
  const url = window.location.href;
  const paramsString = url.substring(url.indexOf('?') + 1);
  const paramsArray = paramsString.split('&');
  
  const params = {};
  
  paramsArray.forEach((param) => {
    const [key, value] = param.split('=');
    params[key] = value;
  });
  
  const idCandidat = params['id'];
  const enq = params['enq'];
  const num = params['num'];
  
  console.log(idCandidat); // 48
  console.log(enq); // 76
  console.log(num); // 1234
  
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  
  const [age, setAge] = React.useState('');

  const [prenomP, setPrenomP] = React.useState('');
  const [nomP, setNomP] = React.useState('');
  const [vP, setVP] = React.useState('');
  const [vM, setVM] = React.useState('');

  const [telP, setTelP] = React.useState('');
  const [professionP, setProfessionP] = React.useState('');
  const [prenomM, setPrenomM] = React.useState('');
  const [nomM, setNomM] = React.useState('');
  const [telM, setTelM] = React.useState('');
  const [professionM, setProfessionM] = React.useState('');
  const [benef, setBenef] =React. useState([]);
  const [dateD, setDateD] = React.useState('');
  const [dateF, setDateF] = React.useState('');
  const [cinC, setCinC] = React.useState('');
  const [prenomC, setPrenomC] = React.useState('');
  const [nomC, setNomC] = React.useState('');
  const [telC, setTelC] = React.useState('');
  const [professionC, setProfessionC] = React.useState('');
  const [adressC, setAdressC] = React.useState('');

  const Change = (event, label) => {
    if (event.target.checked) {
      setVM(label);
      
    } else {
      setVM('');
      
    }
  };
  const handleCheckboxChange = (event, label) => {
    if (event.target.checked) {
      setVP(label);
      
    } else {
      setVP('');
      
    }
  };
  useEffect(() => {
    fetch('http://localhost:8000/api/index')
      .then(response => response.json())
      .then(data => {
        setBenef(data);
      })
      .catch(error => console.error(error));
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log({
      age, prenomP, nomP, vP, telP, professionP, prenomM, nomM, vM, telM, professionM, telC, professionC, prenomC, cinC,
       nomC, adressC, dateD, dateF,
    });
  
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('idCandidat', idCandidat);
      formData.append('age', age);
      formData.append('prenomP', prenomP);
      formData.append('nomP', nomP);
      formData.append('vP', vP);
      formData.append('telP', telP);
      formData.append('professionP', professionP);
      formData.append('prenomM', prenomM);
      formData.append('nomM', nomM);
      formData.append('vM', vM);
      formData.append('telM', telM);
      formData.append('professionM', professionM);
      formData.append('telC', telC);
      formData.append('professionC', professionC);
      formData.append('prenomC', prenomC);
      formData.append('cinC', cinC);
      formData.append('nomC', nomC);
      formData.append('adressC', adressC);
      formData.append('dateD', dateD);
      formData.append('dateF', dateF);

      
      
  
      const response = await fetch('http://127.0.0.1:8000/api/child', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log(data);
      console.log(data.num);
  
      window.location.href = `/AffichagePage1?id=${data.idCandidat}&idchild=${data.num}&enq=${enq}&num=${num}`;
  
    } catch (error) {
      console.error(error);
    }
  };
  
  
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  // Navigate('./AffichagePage1');
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
   <NavNex yourId={idCandidat} />
          <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form >
    <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label  ml-80">               

      <b>:  معلومات حول الطفل  </b>   <h1> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idCandidat) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]} {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idCandidat) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]}   </h1></label> 
 
      </div>

      <div class="formbold-mb-3">
        <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
 for="السن" type="text" name="السن" id="السن" placeholder="السن" value={age} onChange={(event) => setAge(event.target.value)}/>
      </div>

      <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-80"> 
     <b> : معلومات حول الأب </b>  </label>
        <div>
        <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="إسم الأب"type="text" name="إسم الأب" id="إسم الأب" placeholder="إسم الأب" value={prenomP} onChange={(event) => setPrenomP(event.target.value)}/>
      <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder= "الإسم العائلي"  value={nomP} onChange={(event) => setNomP(event.target.value)}/>
   </div>
   </div>
  
      <div class="formbold-mb-3 formbold-input-wrapp">
        <div>
  <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "الهاتف"type="text" name="الهاتف" placeholder= "الهاتف" value={telP} onChange={(event) => setTelP(event.target.value)}/>
      <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "مهنته"type="text" name="مهنته" placeholder= "مهنته" value={professionP} onChange={(event) => setProfessionP(event.target.value)}/>
     </div>
      </div>
      <div>
   
   <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">حي <input id="vue-checkbox" type="checkbox" value={vP}  onChange={(e) => handleCheckboxChange(e, ' حي  ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
</label>    
           <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> متوفى  <input id="vue-checkbox" type="checkbox" value={vP}  onChange={(e) => handleCheckboxChange(e, '  متوفى  ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
</label>
           
 </div>
      
      <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-80"> 
   <b>   :  معلومات حول الأم </b></label>

        <div>
         
        <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="إسم الأم " type="text" name="إسم الأم " id="إسم الأم " placeholder="إسم الأم " value={prenomM} onChange={(event) => setPrenomM(event.target.value)}/>
    <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="الإسم الشخصي" value={nomM} onChange={(event) => setNomM(event.target.value)}/>

        </div>

      <div class="formbold-mb-3 formbold-input-wrapp">
        <div>
  <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "الهاتف"type="text" name="الهاتف" placeholder= "الهاتف" value={telM} onChange={(event) => setTelM(event.target.value)}/>
      <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "مهنتها"type="text" name="مهنتها" placeholder= "مهنتها" value={professionM} onChange={(event) => setProfessionM(event.target.value)}/>
     </div>
      </div>

        </div> 
        <div>
   
   <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">حي <input id="vue-checkbox" type="checkbox" value={vM}  onChange={(e) => Change(e, ' حي  ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
</label>    
           <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> متوفى  <input id="vue-checkbox" type="checkbox" value={vM}  onChange={(e) => Change(e, '  متوفى  ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
</label>
           
 </div>
 <div class="formbold-input-wrapp formbold-mb-3">
        <label for="firstname" class="formbold-form-label ml-80"> 
      <b>:  معلومات حول المراسل </b></label>

        <div>
         
        <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="إسم المراسل  " type="text" name="إسم المراسل " id="إسم المراسل " placeholder="إسم المراسل " value={prenomC} onChange={(event) => setPrenomC(event.target.value)}/>
    <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الإسم العائلي" type="text" name="الإسم العائلي" id="الإسم العائلي" placeholder="المراسل   الإسم العائلي" value={nomC} onChange={(event) => setNomC(event.target.value)}/>

        </div>

      <div class="formbold-mb-3 formbold-input-wrapp">
        <div>
  <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "الهاتف"type="text" name="الهاتف" placeholder= "الهاتف" value={telC} onChange={(event) => setTelC(event.target.value)}/>
      <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "مهنته"type="text" name="مهنته" placeholder= "مهنته" value={professionC} onChange={(event) => setProfessionC(event.target.value)}/>
     </div>
      </div>
      <div class="formbold-mb-3 formbold-input-wrapp">        <div>
      <Item className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "عنوان"type="text" name="عنوان" placeholder= "عنوان" value={adressC} onChange={(event) => setAdressC(event.target.value)}/>

<Item className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "الهوية   " type="text" name="الهوية  " placeholder= "الهوية  " value={cinC} onChange={(event) => setCinC(event.target.value)}/>
</div>
      </div>
     
        

 <div class="formbold-mb-3 formbold-input-wrapp">
        <div>
  <Item className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "تاريخ الإيواء"type="date" name="تاريخ الإيواء" placeholder= "تاريخ الإيواء" value={dateD} onChange={(event) => setDateD(event.target.value)}/>
      <Item className="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for= "تاريخ المغادرة"type="date" name="تاريخ المغادرة" placeholder= "تاريخ المغادرة" value={dateF} onChange={(event) => setDateF(event.target.value)}/>
     </div>
      </div>
      <input
        type="file"
                            onChange={handleFileChange}
                            placeholder="image"
                          />
 <div>
 <button 
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn"  onClick={handleSubmit} >تسجيل 
    </button>
 
 </div>
 </div>



   
          </form>
  </div>
</div>
</div>
</div>
</div>
</>
  )
}

export default Page1
