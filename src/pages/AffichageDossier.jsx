import React, { useRef, useEffect } from 'react';
import { Sidebar, Navbar } from '../components';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import ImageOne from '../components/img/logo daratfal.png';
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';
import NavNex from './NavNex';
import logo from '../components/img/logo daratfal.png';
function AffichageDossier() {
  const [child, setChild] = React.useState([]);
  const [candidat, setCandidat] = React.useState([]);
  const [demande, setDemande] = React.useState([]);
  const [enq, setEnq] = React.useState([]);
  const [log, setLog] = React.useState([]);
  const [Apt, setApt] = React.useState([]);
  const [Exon, setExon] = React.useState([]);
  const [Engag, setEngag] = React.useState([]);
  const [Etat, setEtat] = React.useState([]);
  const [vi, setVi] = React.useState([]);
  const [Frere, setFreres] = React.useState([]);
  const [besoin, setBesoin] = React.useState([]);
  const [Parcours, setParcours] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/affFrere')
      .then((response) => response.json())
      .then((data) => {
        setFreres(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/affichbesoin')
      .then((response) => response.json())
      .then((data) => {
        setBesoin(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/affichApt')
      .then((response) => response.json())
      .then((data) => {
        setApt(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/c')
      .then((response) => response.json())
      .then((data) => {
        setLog(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/affExon')
      .then((response) => response.json())
      .then((data) => {
        setExon(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/affEngag')
      .then((response) => response.json())
      .then((data) => {
        setEngag(data);
      })
      .catch((error) => console.error(error));
  }, []);
  
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } =
    useStateContext();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    fetch('http://localhost:8000/api/affEtat')
      .then((response) => response.json())
      .then((data) => {
        setEtat(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/affvi')
      .then((response) => response.json())
      .then((data) => {
        setVi(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch('http://localhost:8000/api/in')
      .then((response) => response.json())
      .then((data) => {
        setChild(data);
      })
      .catch((error) => console.error(error));
  }, []);

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
    fetch('http://localhost:8000/api/inde')
      .then((response) => response.json())
      .then((data) => {
        setParcours(data);
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={1} />
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

            <NavNex yourId={id}  />

            <div class=" py-1 bg-blueGray-50" >
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

                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" ref={componentRef} >
                        {child &&
                  child
                    .filter((c) => c.idCandidat === parseInt(id))
                    .map((child) => (
                        <>                      <div class="rounded-t bg-white space-between mb-0 px-16 py-16">
                            <div>
                            <img class="left-4 absolute w-20 h-15 top-2" src={`${process.env.PUBLIC_URL}/images/${child.file}`} alt="Profile" />

                             <br></br>
                             <img class=" right-4 absolute w-20 h-15 top-2 " src={logo} alt="logo"/>

                              <span className="mb-4 top-10 mt-8 absolute ml-250 text-sm">
                              <br></br> {child.dateD}  : تاريخ الإيواء 
                              <br></br> {child.dateF}   : تاريخ المغادرة
                              </span>
                            </div>

                            <div className="">
<br>
</br>
<br></br>
                              <span className="mb-0 right-2 top-12  absolute text-sm">
                                الجمعية الخيرية الإسلامية<br></br>
                                مؤسسة دار الأطفال للرعاية الاجتماعية <br></br>
                                أسفي<br></br>
                              </span>
                            </div>
                          </div>

                          <div class="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-right flex justify-between">
                              <div class="container" >
                                <div class="header mt-">
                                <h6 class="text-blueGray-700 text-center text-xl font-bold">ملف المستفيد (ة)</h6>
                                  <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">
                                 
                                  <b>   :رقم</b> { candidat && candidat.filter((c) => c.id === child.idCandidat).map((c) => c.num)[0]}
                                  </p>

                                  <p className="text-right space-between mt-4 mb-2">
                                   <b>الإسم الشخصي </b> {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.prenom)[0]}
                               
                                  </p>
                                  <p className="text-right mb-2">
                                  <b>الإسم العائلي</b>   {demande && demande.filter((c) => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map((c) => c.nom)[0]}                              

                                  </p>
                                  <p className="text-right mb-2">
                                    <b> تاريخ الإزدياد </b>                            {enq && enq.filter((c) => c.id ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0])).map((c) => c.dateN)[0]}      

                                  </p>
                                  <p className="text-right mb-2">
  <b> مكان الإزدياد </b>                                  {enq && enq.filter((c) => c.id ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0])).map((c) => c.lieuN)[0]} </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                     <b> المستوى الدراسي  </b>   {enq && enq.filter((c) => c.id ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0])).map((c) => c.nivSc)[0]}  
                                  </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                     <b> إسم الأب  </b>  {child.prenomP} {child.nomP} 
                                  </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                     <b> حي/متوفى  </b>  {child.vP}
                                     </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                     <b> مهنته  </b>   {child.professionP}  
                                  </p>
                                
                                  <p className="text-right mb-2">
                                 <b >   إسم الأم:</b>{child.prenomM} {child.nomM} 
                                   
                                  </p>
                                  <p className="text-right mb-2">
                                 <b >   حية/متوفاة</b> {child.vM}
                                   
                                  </p>
                                  <p className="text-right mb-2">
                                  {child.telP}  <b>   الهاتف</b> 
                                   
                                  </p>
                                  <p className="text-right mb-2">
                                 <b >   مهنتها</b>  {child.professionM}   
                                   
                                  </p>
                                  <p className="text-right mb-2">
                                  {child.telM}  <b >   الهاتف</b>   
                                   
                                  </p>

                                 

                                
                                  <p className="text-right mb-2">
                                  <b>الحالة الإجتماعية :  
 </b>  {enq && enq.filter((c) => c.id ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0])).map((c) => c.Etat)[0]} 
                                  </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                   <b>  العنوان العائلي :  </b>  {enq && enq.filter((c) => c.id ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0])).map((c) => c.adressB)[0]}
                                  </p>
                                  <p className="text-right mb-2">
                                  {demande && demande.filter(c => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.nomT)[0]}    {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.nbrsoeur)[0] + demande && demande.filter(c => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.nbrsoeur)[0]}  <b>عدد الإخوة والإخوات </b>
</p>
<p className="text-right mb-2">
                                  <b>  إسم الولي :   </b> {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.nomT)[0]}    {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.prenomT)[0]}
</p>
<p className="text-right mb-2">
                                  <b>عنوانه :  </b> {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.adress)[0]}
</p>
<p className="text-right mb-2">
{demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.cinT)[0]}   <b>:رقم البطاقة الوطنية  </b>
</p>
<p className="text-right mb-2">
   <b> مهنته </b>{enq && enq.filter((c) => c.id ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0])).map((c) => c.professionT)[0]}
</p>
<p className="text-right mb-2">
   <b> القرابة العائلية :</b>{demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.role)[0]}
</p>
<p className="text-right mb-2">
   <b> إسم المراسل بالمدينة  :</b> {child.nomC} {child.prenomC}
</p>
<p className="text-right mb-2">
{child.cinC} <b> :رقم البطاقة الوطنية   </b> 
</p>
<p className="text-right mb-2">
   <b> عنوانه   :</b>  {child.adressC}
</p>


                                 

                              

                                  
                                  <p className="text-right mb-2">
                                  {child.telC} <b>  الهاتف </b>{' '}
                                  </p>
                                  <p className="text-right mb-2">
   <b>بمؤسسة دار الأطفال آسفي للأسباب التالية :</b>  {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.raison)[0]}
</p>
<p className="text-right mb-2">
   <b>أطلب إيواء  :</b>   {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.nom)[0]}       {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.prenom)[0]}
</p>

                                 

                                  <p className="mb-4 right-60 font-semibold">
                                    <b>التلميد بصحة المعلومات أعلاه </b>
                                  </p>

                                  <p className="mb-4 ml-40 font-semibold">
                                  <b> كما أصرح بصفتي :</b> {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.role)[0]}
                                  </p>

                                  <p className="text-right mb-2">
                                    <b> :قرار لجنة الإيواء </b>
                                  </p>
                                  <p className="text-right mb-2">
                                  {demande && demande.filter(c => c.num ===  parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0])).map(c => c.num)[0]}<b> : الترتيب رقم </b>
                                  </p>
                                  <p className="text-right mb-2">
                                    <b> بتاريخ :</b> <b> المصادقة</b>
                                  </p>
                                  <p className="text-right mb-2">
                                    <b> : مكان التوقيع </b>{' '}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </>  
                             ))}  
                             
<div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
            
              {log &&
                  log
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((log) => (
<div class="container">
        <div class="header">
        <h6 class="text-blueGray-700 text-center text-xl font-bold">
        شهادة السكنى         </h6>
        <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.num)[0]}<b> : رقم</b></p>
        
      
            <p className='text-right mb-2 mt-8'><b>  نحن :</b>{log.responsable}</p>
            <p className='text-right mb-2'> <b> نشهد بأن السيد :</b> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]}  {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]}</p>           
            <p className='text-right mb-2'>{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.cinT)[0]} <b> رقم:</b> </p>           

            <p className='text-right mb-2'>  <b> المزداد ب :</b>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.lieuN)[0]}  </p>
            <p className='text-right mb-2'> <b>  بتاريخ:</b> {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.dateN)[0]}</p>           
            <p className='text-right mb-2'><b> من والده:</b> {child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomP)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomP)[0]} </p>
            <p className='text-right mb-2'> <b>  و والدته:</b> {child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomM)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomM)[0]} </p>
            <p className='text-right mb-2'><b> مقيم:</b> {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.adressB)[0]} </p>
            <p className='text-right mb-2'><b>: منذ</b> {log.DateL} </p>
             
            <p className='text-right mb-2'><b>الحالة العائلية </b> : {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.Etat)[0]}</p>
           <p className='text-right mb-2'><b>وسلمت له هذه الشهادة للإدلاء بها لمؤسسة دار الأطفال</b>  </p>
           <p className='text-right mb-2'> <b>بتاريخ</b> </p>
           
 <br>
 </br>

 {log.file && (
  <img style={{display: "block", margin: "0 auto"}} src={`${process.env.PUBLIC_URL}/images/${log.file}`} alt="Certificate" />
)}
<br></br>
<br></br>
             <span class="inline-grid">
          
          <p className='text-right bottom-14 mt-4 absolute left-12'><b> : إمضاء مصادق عليه </b> </p>
           
            </span>
        </div> 
    </div>
     ))}
      </div>
       <div class="rounded-t bg-white mb-0 px-6 py-6">
                    <div class="text-right flex justify-between">
                      {Apt &&
                        Apt
                          .filter((c) => c.idBenef === parseInt(id))
                          .map((Apt) => (
                            <div class="container" >
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
                                  </p>
                                </span>
                              </div>
                            </div>
                          ))}
                      
                    </div>
                    
<div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
            
              {Engag &&
                  Engag
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((Engag) => (
<div class="container" >
        <div class="header">
        <h6 class="text-blueGray-700 text-center text-xl font-bold">
        (ة)   التزام ولي أمر المستفيد     
        </h6>
        <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.num)[0]}<b> : رقم</b></p>

            <p className='text-right mb-2 mt-8'><b>  :  أنا الممضي أسفله </b>{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.nomT)[0]}  {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.prenomT)[0]}</p>
            <p className='text-right mb-2'> <b>  بصفتي </b> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.role)[0]}</p>           
            <p className='text-right mb-2'><b>   العنوان</b>{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.adress)[0]}  </p>
            <p className='text-right mb-2'> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.cinT)[0]} <b> رقم البطاقة الوطنية </b> </p>           
            <p className='text-right mb-2'> {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.telT)[0]}<b>  الهاتف</b>  </p>

           
             <span class="inline-grid">
          
          <p className='text-right bottom-14 mt-4 absolute left-12'><b> : إمضاء مصادق عليه </b> </p>
           
            </span>
        </div> 
    </div>
                    ))}
    </div>


    

<div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
            
              {Etat &&
                  Etat
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((Etat) => (
<div class="container" >
        <div class="header">
        <h6 class="text-blueGray-700 text-center text-xl font-bold">
        شهادة الإحتياج      
        </h6>
        <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.num)[0]}<b> : رقم</b></p>
        {Etat.off && ( <>
            <p className='text-right mb-2 mt-8'>{Etat.off}<b>: ان ضابط الحالة المدنية </b></p>
            <p className='text-right mb-2'>{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]}  {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]} <b>: نشهد بأن السيد </b> </p>           
            <p className='text-right mb-2'>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.lieuN)[0]}<b>: المزداد ب </b>  </p>
            <p className='text-right mb-2'> <b> : بتاريخ</b> :{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.dateN)[0]}</p>         

            <p className='text-right mb-2'> <b> : بتاريخ</b> : {Etat.dC}</p>           
            <p className='text-right mb-2'>{child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomP)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomP)[0]}<b>: من والده</b>  </p>
            <p className='text-right mb-2'>{child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomM)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomM)[0]} <b> : و والدته</b>  </p>
            <br></br>
</>)}
            
{Etat.file && ( 
  <img style={{display: "block", margin: "0 auto"}} src={`${process.env.PUBLIC_URL}/images/${Etat.file}`} alt="Certificate" />

)}

 <br></br>
             <span class="inline-grid">
          
          <p className='text-right bottom-14 mt-4 absolute left-12'><b> : إمضاء مصادق عليه </b> </p>
           
            </span>
        </div> 
    </div>
                    ))}
       </div>
       

<div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-right flex justify-between">
        
          {vi &&
                  vi
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((vi) => (
<div class="container" >
    <div class="header">
    <h6 class="text-blueGray-700 text-center text-xl font-bold">
    شهادة الحياة الجماعية      
    </h6>
    <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.num)[0]}<b> : رقم</b></p>
    {vi.lieucol && (<>
        <p className='text-right mb-2 mt-8'><b>  إن ضابط الحالة المدنية : </b>{Etat && Etat.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.off)[0]} </p>
        <p className='text-right mb-2'> <b>:يشهد أن الأبناء الثالية أسماؤهم لازالو على قيد الحياة</b> </p>           
        
        <p className='text-right mb-2'><b> من والده:</b> {child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomP)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomP)[0]} </p>
            <p className='text-right mb-2'>{child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomM)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomM)[0]} <b> : و والدته</b>  </p>
            

        <div class="bg-white shadow-md rounded my-6">
        <table class="min-w-max w-full table-auto">
    <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-center">مستوى مدرسي</th>
            <th class="py-3 px-6 text-center">سن</th>
            <th class="py-3 px-6 text-center">الجنس</th>
            <th class="py-3 px-6 text-center">الاسم العائلي</th>
            <th class="py-3 px-6 text-center">الاسم الشخصي</th>
        </tr>
    </thead>
    <tbody class="text-gray-600 text-sm font-light">
        {Frere &&
        
            Frere.filter((c) => c.nom === (demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id)).map((c) => c.num)[0])).map((c) => c.nom)[0]))
            .map((c) => (
                <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                   
                    <td class="py-3 px-6 text-center">{c.nivSc}</td>
                    <td class="py-3 px-6 text-center">{c.age}</td>
                    <td class="py-3 px-6 text-center">{c.sexe}</td>
                    <td class="py-3 px-6 text-center">{c.nom}</td>
                    <td class="py-3 px-6 text-center">{c.prenom}</td>
                </tr>
            ))}
    </tbody>
</table>

                  </div>
                 
                 







        <p className='text-right mb-2'><b>في </b>  {vi.lieucol} </p>
        <p className='text-right mb-2'>{vi.datcol} <b>بتاريخ</b> </p>
       

         <span class="inline-grid">
      
      <p className='text-right bottom-14 mt-4 absolute left-12'><b> : إمضاء مصادق عليه </b> </p>
       
        </span> </>)}
        {vi.file && (<img style={{display: "block", margin: "0 auto"}} src={`${process.env.PUBLIC_URL}/images/${vi.file}`} alt="vi" />)}

    </div> 
</div>
                    ))}
</div>


<div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
            
              {besoin &&
                  besoin
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((besoin) => (
<div class="container" >
        <div class="header">
        <h6 class="text-blueGray-700 text-center text-xl font-bold">
        شهادة الإحتياج      
        </h6>
        <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">{demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.num)[0]}<b> : رقم</b></p>
        {besoin.lieu && ( <>
            <p className='text-right mb-2 mt-8'><b>: بناء على </b></p>
            <p className='text-right mb-2'> {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.nom)[0]}  {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.prenom)[0]}<b> : نشهد بأن السيد </b> </p>           
            <p className='text-right mb-2'><b>  {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.lieuN)[0]} : المزداد ب </b> </p>
            <p className='text-right mb-2'> <b> : بتاريخ</b> : {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.dateN)[0]}</p>           
            <p className='text-right mb-2'>{child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomP)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomP)[0]}<b>: من والده</b>  </p>
            <p className='text-right mb-2'>{child && child.filter((c) => c.idCandidat === parseInt( id) ).map((c) => c.nomM)[0]} {child && child.filter((c) => c.idBenef === parseInt( id) ).map((c) => c.prenomM)[0]} <b> : و والدته</b>  </p>
            <p className='text-right mb-2'><b>: رقم.ب.ت.و</b> {besoin.cin}</p>
            <p className='text-right mb-2'><b>: محتاج</b> {enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.Etat)[0]} </p>
            <p className='text-right mb-2'>  {demande && demande.filter((c) => c.num === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.num)[0]) ).map((c) => c.institut)[0]}  <b>وسلمت له هذه الشهادة للإدلاء بها لمؤسسة دار الأطفال</b> </p>
            
            <p className='text-right mb-2'><b>في </b>{besoin.lieu}  </p>
            <p className='text-right mb-2'> <b>بتاريخ</b>{besoin.dB}  </p>
           
 
             <span class="inline-grid">
          
          <p className='text-right bottom-14 mt-4 absolute left-12'><b> : إمضاء مصادق عليه </b> </p>  </span></>)}
          {besoin.file && ( <img style={{display: "block", margin: "0 auto"}} src={`${process.env.PUBLIC_URL}/images/${besoin.file}`} alt="besoin" />)}

           
        </div> 
    </div>
                    ))}
    </div>
    <div class="bg-white shadow-md rounded my-6">
    
    <div class="text-right flex justify-between">
    
    {Parcours &&
                     Parcours
                       .filter((c) => c.idBenef === parseInt(id))
                       .map((Parcours) => ( <>
                        <div>
                        <h6 class="text-blueGray-700 text-center text-xl font-bold">
    المسار الدراسي      
        </h6>
           {Parcours.file && (<img style={{display: "block",marginLeft:"20px", margin: "0 auto"}} src={`${process.env.PUBLIC_URL}/images/${Parcours.file}`} alt="Parcours" />)}
     
           {Parcours.decisionM && ( <>
               <table class="min-w-max w-full table-auto">
                 
                   <thead>
                       <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                           <th class="py-3 px-6 text-center">القرار السنوي </th>
                           <th class="py-3 px-6 text-center">معدل الدورة   </th>
                           <th class="py-3 px-6 text-center">معدل الدورة 2   </th>
                           <th class="py-3 px-6 text-center">معدل الدورة 1   </th>
                           <th class="py-3 px-6 text-center">القسم</th>
                           <th class="py-3 px-6 text-center">الموسم الدراسي</th>
                       </tr>
                   </thead>
                   <tbody class="text-gray-600 text-sm font-light">
                  
                       <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                       
                       <td class="py-3 px-6 text-center">
                           {Parcours.decisionM} 
                           </td>
                           <td class="py-3 px-6 text-center">
                           {Parcours.MG} 
                           </td>
                           <td class="py-3 px-6 text-center">
                           {Parcours.MS2} 
                           </td>
                           <td class="py-3 px-6 text-center">
                           {Parcours.MS1} 
                           </td>
                          <td class="py-3 px-6 text-center">
                          {Parcours.nivSc} 
                           </td>
                           <td class="py-3 px-6 text-center">
                          {Parcours.annSc} 
                           </td>
                       </tr>
                     
                                 </tbody>
                      
               </table> </>)}     
                                     </div>

              </>
    ))}
                          </div>

                      </div>
                      </div>
                      </div>
    </div>

                        </div>
                      </div>
                 
              </div>
              

              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

    </>
  );
}

export default AffichageDossier;
