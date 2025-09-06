import React , {useEffect} from 'react'
import Formulaire from './Formulaire'
import Header from '../components/Header'  
import { useStateContext } from '../contexts/ContextProvider';
import {Link} from 'react-router-dom';
import { Navbar, Sidebar } from '../components';
import NavNex from './NavNex';

const DossierMedical = () => {
  const [idBenef, setIdBenef] = React.useState(null);
  let a =1;
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    setIdBenef(id);
  }, []);
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const [child, setChild] =React. useState([]);
  const [nomB, setNomB] = React.useState('');
  const [prenomB, setPrenomB] = React.useState('');
  const [dA, setDA] = React.useState('');
  const [dateN, setDateN] = React.useState('');
  const [poids, setPoids] = React.useState('');
  const [sang, setSang] = React.useState('');
  const [diabete, setDiabete] = React.useState('');
  const [asthme, setAsthme] = React.useState('');
  const [allergie, setAllergie] = React.useState('');
  const [Neuropathie, setNeuropathie] = React.useState('');
  const [hemophilie, setHemophilie] = React.useState('');
  const [Hypertension, setHypertension] = React.useState('');
  const [myopathie, setMyopathie] = React.useState('');
  const [tuberculose, setTuberculose] = React.useState('');
  const [autr, setAutr] = React.useState('');
  const [dent, setDent] = React.useState('');
  const [ventre, setVentre] = React.useState('');
  const [pr, setPr] = React.useState('');
  const [coeur, setCoeur] = React.useState('');
  const [souf, setSouf] = React.useState('');
  const [son, setSon] = React.useState('');
  const [sonsouf, setSonsouf] = React.useState('');
  const [rad, setRad] = React.useState('');
  const [cliquetis, setCliquetis] = React.useState('');
  const [muscl, setMuscl] = React.useState('');
  const [refl, setRefl] = React.useState('');
  const [sm, setSm] = React.useState('');
  const [aud, setAud] = React.useState('');
  const [brul, setBrul] = React.useState('');
  const [testur, setTestur] = React.useState('');
  const [peau, setPeau] = React.useState('');
  const [tet, setTet] = React.useState('');
  const [muqueuses, setMuqueuses] = React.useState('');
  const [gale, setGale] = React.useState('');
  const [sousgueule, setSousgueule] = React.useState('');
  const [clavicule, setClavicule] = React.useState('');
  const [Bequilles, setBequilles] = React.useState('');
  const [cuisse, setCuisse] = React.useState('');
  const [VDRL, setVDRL] = React.useState('');
  const [Glycemie, setGlycemie] = React.useState('');
  const [Hepatite, setHepatite] = React.useState('');
  const [NFS, setNFS] = React.useState('');
  const [HIV, setHIV] = React.useState('');
  const [BCG, setBCG] = React.useState('');
  const [tetanos, setTetanos] = React.useState('');
  const [Vaccin, setVaccin] = React.useState('');
  

  useEffect(() => {
    fetch('http://localhost:8000/api/in')
      .then(response => response.json())
      .then(data => {
        setChild(data);
      })
      .catch(error => console.error(error));
  }, []);

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log({
    dA ,poids, sang, diabete, asthme, allergie, Neuropathie, hemophilie, Hypertension, myopathie, tuberculose, autr, dent,  ventre, pr, coeur, souf, son, sonsouf, rad, cliquetis, muscl, refl, sm, aud, brul, testur, 
     peau, tet, muqueuses, gale, sousgueule, clavicule, Bequilles, cuisse, VDRL, Glycemie, Hepatite, NFS, HIV, BCG, tetanos, Vaccin, idBenef,
  });
    const response = await fetch('http://127.0.0.1:8000/api/med', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  dA ,poids, sang, diabete, asthme, allergie, Neuropathie, hemophilie, Hypertension, myopathie, tuberculose, autr, dent,  ventre, pr, coeur, souf, son, sonsouf, rad, cliquetis, muscl, refl, sm, aud, brul, testur, 
        peau, tet, muqueuses, gale, sousgueule, clavicule, Bequilles, cuisse, VDRL, Glycemie, Hepatite, NFS, HIV, BCG, tetanos, Vaccin , idBenef})
    });
    const data = await response.json();
    console.log(data);
    window.location.href = `/AffichageDossierMedical?id=${idBenef}`;

 
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

    fetch('http://127.0.0.1:8000/api/med', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = `/AffichageDossierMedical?id=${idBenef}`;
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

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <label for="firstname" class="formbold-form-label ml-0 "> 
    الملف الطبي            <h1> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]} {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(idBenef) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]}   </h1>

   </label>
    <div class="flex flex-wrap -mx-3 mb-6">
   
         <div class="w-full md:w-1/4 px-3">

          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="تاريخ القبول" id="تاريخ القبول">
          تاريخ القبول
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-400  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          type="date" placeholder="تاريخ القبول" id="تاريخ القبول" value={dA} onChange={(event) => setDA(event.target.value)}/>

        </div>
       
       <div class="w-full md:w-1/4 px-3">

        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="الوزن" id="الوزن">
        الوزن</label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        type="text" placeholder="الوزن" id="الوزن" value={poids} onChange={(event) => setPoids(event.target.value)}/>

</div> 
<div class="w-full md:w-1/4 px-3">

      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="فصيلة الدم" id="فصيلة الدم">
      فصيلة الدم
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      type="text" placeholder="فصيلة الدم" id="فصيلة الدم" value={sang} onChange={(event) => setSang(event.target.value)}/>

</div>
<div class="w-full md:w-1/4 px-3">

    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="السكري" id="السكري">
    السكري
    </label>
    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
    type="text" placeholder="السكري" id="السكري" value={diabete} onChange={(event) => setDiabete(event.target.value)}/>

</div>
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="الربو" id="الربو">
الربو
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="الربو" id="الربو" value={asthme} onChange={(event) => setAsthme(event.target.value)}/>

</div>
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="حساسية" id="حساسية">
حساسية
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="حساسية" id="حساسية" value={allergie} onChange={(event) => setAllergie(event.target.value)}/>

</div>
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="الاعتلال العصبي" id="الاعتلال العصبي">
الاعتلال العصبي
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="الاعتلال العصبي" id="الاعتلال العصبي" value={Neuropathie} onChange={(event) => setNeuropathie(event.target.value)}/>

</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="الهموفيليا" id="الهموفيليا">
الهموفيليا
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="الهموفيليا" id="الهموفيليا" value={hemophilie} onChange={(event) => setHemophilie(event.target.value)}/>

</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="ارتفاع ضغط الدم" id="ارتفاع ضغط الدم">
ارتفاع ضغط الدم
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="ارتفاع ضغط الدم" id="ارتفاع ضغط الدم" value={Hypertension} onChange={(event) => setHypertension(event.target.value)}/>

</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="اعتلال عضلي" id="اعتلال عضلي">
اعتلال عضلي
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="اعتلال عضلي" id="اعتلال عضلي" value={myopathie} onChange={(event) => setMyopathie(event.target.value)}/>

</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="مرض السل" id="مرض السل">
مرض السل</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="مرض السل" id="مرض السل" value={tuberculose} onChange={(event) => setTuberculose(event.target.value)}/>

</div> 
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="أخرى(للتدقيق)" id="أخرى(للتدقيق)">
أخرى(للتدقيق)
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="أخرى(للتدقيق)" id="أخرى(للتدقيق)" value={autr} onChange={(event) => setAutr(event.target.value)}/>

</div> 
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="ظهور الأسنان" id="ظهور الأسنان">
ظهور الأسنان
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="ظهور الأسنان" id="ظهور الأسنان" value={dent} onChange={(event) => setDent(event.target.value)}/>

</div> 
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="البطن" id="البطن">
البطن
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="البطن" id="البطن" value={ventre} onChange={(event) => setVentre(event.target.value)}/>

</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="نبض الضغط الشرياني" id="نبض الضغط الشرياني">
نبض الضغط الشرياني
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="نبض الضغط الشرياني" id="نبض الضغط الشرياني" value={pr} onChange={(event) => setPr(event.target.value)}/>

</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="تسمع القلب" id="تسمع القلب">
تسمع القلب
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="تسمع القلب" id="تسمع القلب" value={coeur} onChange={(event) => setCoeur(event.target.value)}/>

</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="البحث عن الأنفاس" id="البحث عن الأنفاس">
البحث عن الأنفاس
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
type="text" placeholder="البحث عن الأنفاس" id="البحث عن الأنفاس" value={souf} onChange={(event) => setSouf(event.target.value)}/>

</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="الاهتزازات الصوتية" id="الاهتزازات الصوتية">
الاهتزازات الصوتية
</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={son} onChange={(event) => setSon(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="أصوات التنفس" id="أصوات التنفس">
أصوات التنفس
</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={sonsouf} onChange={(event) => setSonsouf(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="بحوث السل (راديو الرئة)" id="أصوات بحوث السل (راديو الرئة)">
بحوث السل (راديو الرئة)
</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={rad} onChange={(event) => setRad(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder=" حشرجة إذا كان موجودا" id=" حشرجة إذا كان موجودا">
حشرجة إذا كان موجودا
</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={cliquetis} onChange={(event) => setCliquetis(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="قوة العضلات " id=" قوة العضلات ">
قوة العضلات</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={muscl} onChange={(event) => setMuscl(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder=" ردود الفعل البطنية  " id=" ردود الفعل البطنية">
ردود الفعل البطنية 
</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={refl} onChange={(event) => setRefl(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  الحساسية والمهارات الحركية" id=" الحساسية والمهارات الحركية ">
الحساسية والمهارات الحركية
</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={sm} onChange={(event) => setSm(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  حدة السمع " id=" حدة السمع   ">
حدة السمع
</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={aud} onChange={(event) => setAud(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  

<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  تحقق من الحروق البولية " id=" تحقق من الحروق البولية   ">
تحقق من الحروق البولية
</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={brul} onChange={(event) => setBrul(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="   فحص البول: سكر الزلال  " id=" فحص البول: سكر الزلال   ">
فحص البول: سكر الزلال</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={testur} onChange={(event) => setTestur(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder=" 
انظر الجلد    " id=" 
انظر الجلد  ">

انظر الجلد </label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
value={peau} onChange={(event) => setPeau(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>

</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  فروة الرأس  " id=" فروة الرأس     ">
فروة الرأس</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
  value={tet} onChange={(event) => setTet(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>       
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  الأغشية المخاطية   " id=" الأغشية المخاطية      ">
الأغشية المخاطية</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
   value={muqueuses} onChange={(event) => setMuqueuses(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  

<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  أبحاث الجرب    " id=" أبحاث الجرب      ">
أبحاث الجرب</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
    value={gale} onChange={(event) => setGale(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  تحت الفكين    " id=" تحت الفكين      ">
تحت الفكين</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
     value={sousgueule} onChange={(event) => setSousgueule(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  فوق الترقوة    " id=" فوق الترقوة      ">
فوق الترقوة</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
     value={clavicule} onChange={(event) => setClavicule(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  العكازات الإبطية     " id=" العكازات الإبطية       ">
العكازات الإبطية </label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
     value={Bequilles} onChange={(event) => setBequilles(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  الفخذ     " id=" الفخذ       ">
الفخذ</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      value={cuisse} onChange={(event) => setCuisse(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>

</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  V.D.R.L - T.P.H.A اختبار دم لمرض الزهري     " id=" V.D.R.L - T.P.H.A اختبار دم لمرض الزهري       ">
V.D.R.L - T.P.H.A اختبار دم لمرض الزهري</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      value={VDRL} onChange={(event) => setVDRL(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>    
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder=" سكر الدم    " id=" سكر الدم ">
سكر الدم</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      value={Glycemie} onChange={(event) => setGlycemie(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder=" التهاب الكبد    " id=" التهاب الكبد ">
التهاب الكبد</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
       value={Hepatite} onChange={(event) => setHepatite(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>   
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="  N.F.Sتحليل الدم الشامل    " id=" N.F.Sتحليل الدم الشامل ">
N.F.Sتحليل الدم الشامل</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        value={NFS} onChange={(event) => setNFS(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>   
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder=" H.I.Vفيروس العوز المناعي البشري/ الأيدز " id=" H.I.Vفيروس العوز المناعي البشري/ الأيدز">
H.I.Vفيروس العوز المناعي البشري/ الأيدز</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        value={HIV} onChange={(event) => setHIV(event.target.value)} >
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>
</div>   
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder=" بي سي جي" id=" بي سي جي ">
بي سي جي</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
       value={BCG} onChange={(event) => setBCG(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>


</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder=" كُزاز" id=" كُزاز">
كُزاز</label>
<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
       value={tetanos} onChange={(event) => setTetanos(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>

</div>  
<div class="w-full md:w-1/4 px-3">

<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-20 mt-2" for="grid-last-name" placeholder="لقاح ضد الحصبة/النكاف/الحميراء" id=" لقاح ضد الحصبة/النكاف/الحميراء">
لقاح ضد الحصبة/النكاف/الحميراء</label>

<select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        value={Vaccin} onChange={(event) => setVaccin(event.target.value)}>
  <option value="نعم">نعم </option>
  <option value="لا">لا</option>
</select>


</div>  


    
   
   

<div className="button-container">
  <Link to="/AffichageDossierMedical">
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
  </Link>

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

export default DossierMedical
