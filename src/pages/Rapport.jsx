import React , {useEffect} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar, Sidebar } from '../components';
import Item from '../pages/Item';
import {Link} from 'react-router-dom';


const Rapport = () => {
    let a=7;
    const urlParams = new URLSearchParams(window.location.search);
    const yourId = urlParams.get('id');
    const [Demand, setDemand] =React. useState([]);
    const [candidat, setCandidat] =React. useState([]);


    const [numR, setNumR] = React.useState('');
    const [nomR, setNomR] = React.useState('');
    const [sujetV, setSujetV] = React.useState('');
    const [descrEtatphysique, setDescrEtatphysique] = React.useState('');
    const [descrEtatpsychique, setDescrEtatpsychique] = React.useState('');
    const [date, setDate] = React.useState('');
    const [Heure, setHeure] = React.useState('');
    const [accompagnant, setAccompagnant] = React.useState('');
    const [causeV, setCauseV] = React.useState('');
    const [remarque, setRemarque] = React.useState('');



    
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
          .then(response => response.json())
          .then(data => {
            setDemand(data);
          })
          .catch(error => console.error(error));
      }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({
            numR, nomR, causeV, date, Heure, accompagnant, sujetV,remarque , descrEtatphysique , descrEtatpsychique,
        });
          const response = await fetch('http://127.0.0.1:8000/api/addRapport', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ numR, nomR, causeV, date, Heure, accompagnant, sujetV,remarque , descrEtatphysique , descrEtatpsychique })
          });
          const data = await response.json();
          console.log(data);
          window.location.href = `/AffichageRapp?id=${data.	numR }&idBenef=${yourId}`;
    
       
      };
      
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [showModal, setShowModal] = React.useState(false);

  const handleUpload = () => {
    if (selectedFile) {
      console.log({
        file: selectedFile,
      });
  
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('numR', numR);
      formData.append('nomR', nomR);
      formData.append('causeV', causeV);
      formData.append('date', date);
      formData.append('Heure', Heure);
      formData.append('accompagnant', accompagnant);

      formData.append('sujetV', sujetV);
      formData.append('remarque', remarque);
      formData.append('descrEtatphysique', descrEtatphysique);
      formData.append('descrEtatpsychique', descrEtatpsychique);



      fetch('http://127.0.0.1:8000/api/addRapport', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.href = `/AffichageRapp?id=${data.numR}&idBenef=${yourId}`;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
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
      <Navbar  yourId={a}/>
    </div>

      
<div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
  <div style={{marginLeft:"200px"}}>تقرير الزيارة</div>
  <br>
  </br>
  <br></br>

  <div class="formbold-input-wrapp formbold-mb-3">
    
    <div>
    <Item
  name="(ة)المستفيد"
  className="appearance-none text-right block  h-15 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  value={
    Demand &&
    Demand.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(yourId)).map((c) => c.num)[0]))
      .map((c) => c.nom + " " + c.prenom)[0]
  }
  readOnly
/>




<Item className="appearance-none text-right block w-60 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
for="رقم الزيارة"  type="text" name="رقم الزيارة "  id="رقم الزيارة"  placeholder="رقم الزيارة" value={numR} onChange={(event) => setNumR(event.target.value)}/>


</div>
</div>
<div class="formbold-input-wrapp formbold-mb-3">
    
    <div>
<Item className="appearance-none text-right block w-60 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
for="اسم الزيارة"  type="text" name="اسم الزيارة "  id="اسم الزيارة"  placeholder="اسم الزيارة" value={nomR} onChange={(event) => setNomR(event.target.value)}/>  
       
<Item className="appearance-none text-right  block w-56 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
for= "سبب الزيارة "type="text" name="سبب الزيارة " placeholder= "سبب الزيارة " value={causeV} onChange={(event) => setCauseV(event.target.value)}/>


</div>
</div>
    <div class="formbold-input-wrapp formbold-mb-3">
    
        <div>
    <Item className="appearance-none text-right block w-60 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="وقت الزيارة"  type="time" name="وقت الزيارة "  id="وقت الزيارة"  placeholder="وقت الزيارة " value={Heure} onChange={(event) => setHeure(event.target.value)}/>
           
<Item className="appearance-none text-right  block w-56 bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
for= "تاريخ الزيارة "type="date" name="تاريخ الزيارة " placeholder= "تاريخ الزيارة " value={date} onChange={(event) => setDate(event.target.value)}/>
  
  
   </div>
   </div>
   <div class="formbold-input-wrapp formbold-mb-3">
    
    <div>
        
<Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
for="موضوع الزيارة"  type="text" name="موضوع الزيارة"  id="موضوع الزيارة "  placeholder="موضوع الزيارة" value={sujetV} onChange={(event) => setSujetV(event.target.value)} />
<div>
 <label  class="formbold-form-label text-right"
  for= "مرافق الزيارة "type="text" name="مرافق الزيارة " placeholder= "مرافق الزيارة " >مرافق الزيارة</label>

<select className="appearance-none text-right block w-60 h-15 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
value={accompagnant} onChange={(event) => setAccompagnant(event.target.value)}>
  <option value="سكرتيرة الإدارة">سكرتيرة الإدارة </option>
  <option value="سكرتيرة قسم التعليم">سكرتيرة قسم التعليم </option>
  <option value="لجنة الترحيب">لجنة الترحيب </option>

</select>
</div>
</div>
</div>
<div class="formbold-input-wrapp formbold-mb-3">
    
    <div>
<Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
for=" الحالة المادية"  type="text" name="الحالة المادية "  id="الحالة المادية "  placeholder="الحالة المادية" value={descrEtatphysique} onChange={(event) => setDescrEtatphysique(event.target.value)} />

<Item className="appearance-none text-right  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
for= "الحالة العقلية " type="text" name="الحالة العقلية " placeholder= "الحالة العقلية " value={descrEtatpsychique} onChange={(event) => setDescrEtatpsychique(event.target.value)}/>

</div>
</div>
  
      <div class="formbold-mb-3 formbold-input-wrapp">
        <div>
    <textarea name="ملاحظات" placeholder=" ملاحظات الزيارة " id="ملاحظات" cols="80" rows="6" className='appearance-none text-right  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={remarque} onChange={(event) => setRemarque(event.target.value)}></textarea>
    
     </div>
      </div>
    
      <Link to="/affichagevisite">
    <button 
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn ml-88" onClick={handleSubmit}>حفظ
    </button>      </Link>
  
    <button
           className="formbold-btn ml-98"
               style={{
                 backgroundColor: currentColor,
               }}
              onClick={() => setShowModal(true)}
            >
              رفع
            </button>

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
                          onClick={() => handleUpload()}
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

export default Rapport
