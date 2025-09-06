import React, { useRef , useEffect} from 'react'
import { useReactToPrint } from 'react-to-print';
import { useStateContext } from './../contexts/ContextProvider';
import { Navbar,Sidebar } from './../components';
import  NavNex from './NavNex'
import ImageOne from '../components/img/logo daratfal.png';

import './style.css'
const AffichageDossierMedical = () => {
    const componentRef =useRef();
    const handlePrint =useReactToPrint( {
        content: () => componentRef.current,
  
   } );
   const [log, setLog] = React.useState([]);

    
    
   const [demande, setDemande] = React.useState([]);
   const [enq, setEnq] = React.useState([]);
   const [child, setChild] = React.useState([]);
   const [Etat, setEtat] = React.useState([]);
   const [candidat, setCandidat] = React.useState([]);
   const [Medical, setMedical] = React.useState([]);

   
   
     const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
     const urlParams = new URLSearchParams(window.location.search);
     const id = urlParams.get('id'); 
     useEffect(() => {
      fetch('http://localhost:8000/api/c')
        .then((response) => response.json())
        .then((data) => {
          setLog(data);
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
        fetch('http://localhost:8000/api/in')
          .then((response) => response.json())
          .then((data) => {
            setChild(data);
          })
          .catch((error) => console.error(error));
      }, []);
      useEffect(() => {
        fetch('http://localhost:8000/api/affEtat')
          .then((response) => response.json())
          .then((data) => {
            setEtat(data);
          })
          .catch((error) => console.error(error));
      }, []);
      useEffect(() => {
        fetch('http://localhost:8000/api/affMedical')
          .then((response) => response.json())
          .then((data) => {
            setMedical(data);
          })
          .catch((error) => console.error(error));
      }, []);
      
      
  return (
   
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg">
            
              {activeMenu ? (
                <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar yourId={1}/>
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar yourId={1} />
    
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
                    <Navbar  yourId={1}  />
          </div>
      
<NavNex yourId={id}/>
 <div class=" py-1 bg-white-500">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div  >
        <button
        className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
 onClick={handlePrint}
 style={{
    backgroundColor: currentColor ,
    }}
 >
download
        </button>
  
   
                <div class="rounded-t bg-white mb-0 px-6 py-6" ref={componentRef}>
              <div class="text-right flex justify-between">
            
              {Medical &&
                  Medical
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((Medical) => (
<div class="container" ref={componentRef}>
        <div class="header mt-">
        <h6 class="text-blueGray-700 text-center text-xl font-bold">
DOSSIER MEDICAL                 </h6>
{Medical.poids && ( <p className='text-left  mt-4 mb-2'><b> Poids :</b> {Medical.poids} </p>)}
{Medical.sang && (   <p  className='text-left mb-2'><b > Groupe sanguin :</b> {Medical.sang}</p>)}
{Medical.diabete && (      <h3> Antécédent personnels et familiaux</h3>)}
{Medical.diabete && (          <p className='text-left mb-2'><b > Diabète : </b> {Medical.diabete} </p>)}
{Medical.asthme && (        <p className='text-left mb-2'><b>Asthme:</b>{Medical.asthme}  </p>)}
{Medical.allergie && (            <p className='text-left mb-2'><b> Allergie  :</b>            {Medical.allergie}      </p>)}
{Medical.Neuropathie && (         <p className='text-left mb-2'><b>  Neuropathie :</b> 
            {Medical.Neuropathie}
            </p>)}
  {Medical.myopathie && (           <p className='text-left mb-2'><b> Myopathie:</b> 
            {Medical.myopathie} 
            </p>)}
            {Medical.hemophilie && (       <p className='text-left mb-2'><b> Hémophile:</b> 
            {Medical.hemophilie} 
            </p>)}
            {Medical.Hypertension && (            <p className='text-left mb-2'><b> H.T.A (Hypertension artérielle) :</b> 
            {Medical.Hypertension}   
            </p>)}
            {Medical.tuberculose && (         <p className='text-left mb-2'><b>  Tuberculose:</b> 
            {Medical.tuberculose}   
            </p>)}
              
       

        
            {Medical.autr && (  <>   <p  className='text-left mb-2'><b > Autre(à preciser):</b>  {Medical.autr}   </p>
            <h3> Examen Général Clinique</h3></>)}
            {Medical.dent && ( <> 
            <p className='text-left mb-2'><b > 1) Examen digestif   :</b>   </p>
            <p className='text-left mb-2'><b> dentition :</b>
            {Medical.dent} 
            </p></>)}
            {Medical.ventre && ( <p className='text-left mb-2'><b> abdomen:</b> 
            {Medical.ventre}   
            </p>)}
            {Medical.pr && (   <p className='text-left mb-2'><b>   3) Examen pluro-pulmonaire-vasculaire  :</b> 
            {Medical.pr}             </p>)}
            {Medical.son && (    <p className='text-left mb-2'><b>  Vibration vocales</b> {Medical.son} </p>)}
           {Medical.sonsouf && (   <p className='text-left mb-2'><b>  Murmure vésiculaire: </b>  {Medical.sonsouf}  </p>)}
           {Medical.cliquetis && (  <p className='text-left mb-2'><b>  Ràle (si présence) : </b>  {Medical.cliquetis}  </p>)}
           {Medical.rad && (  <p className='text-left mb-2'><b>  recherche de tuberculose (radio-pulmonaire) : </b> {Medical.rad}  </p>)}
           
           
           
           
           {Medical.sonsouf && (     <p className='text-left mb-2'><b>Examen cardio-vasculaire: </b>  </p>)}
           {Medical.sonsouf && (   <p className='text-left mb-2'><b>pouls : </b>{Medical.sonsouf}  </p>)}
           {Medical.sonsouf && (   <p className='text-left mb-2'><b> tension artérielle: </b>{Medical.sonsouf}  </p>)}
           {Medical.coeur && (  <p className='text-left mb-2'><b> ausculation cardiaque: </b>{Medical.coeur}  </p>)}
           {Medical.souf && (  <p className='text-left mb-2'><b> recherche de souffles: </b>{Medical.souf}  </p>)}
            
            
           {Medical.sonsouf && (  <p className='text-left mb-2'><b> 4) Examen neurologique: </b>  </p> )}
           {Medical.muscl && (   <p className='text-left mb-2'><b>  tonus musculaire: </b> {Medical.muscl} </p> )}
           {Medical.refl && (  <p className='text-left mb-2'><b>  réflexes abdominaux: </b> {Medical.refl} </p> )}
           {Medical.sm && ( <p className='text-left mb-2'><b>  sensibilité et motricité: </b> {Medical.sm} </p> )}
           {Medical.sonsouf && (     <p className='text-left mb-2'><b> acuité visuelle: </b> {Medical.sonsouf} </p> )}
           {Medical.aud && (     <p className='text-left mb-2'><b> acuité auditive: </b>{Medical.aud}  </p>
           )}
                   
           {Medical.brul && (   <> <p className='text-left mb-2'><b> 4) Examen uroloqique: </b> </p>
                    <p className='text-left mb-2'><b> 4) recherche de brulure mictionnelles: </b>{Medical.brul}  </p> </>)}
                    {Medical.sonsouf && (  <p className='text-left mb-2'><b> 4) Examen des ruines: </b>  </p>)}
                    {Medical.sonsouf && (  <p className='text-left mb-2'><b> Sucre albumine </b> {Medical.sonsouf} </p>
                    )}
            
            
            
            
                    {Medical.peau && ( <p className='text-left mb-2'><b> 4) Examen urologique: </b> </p>  )}
                    {Medical.peau && (  <p className='text-left mb-2'><b>  voir peau: </b> {Medical.peau} </p>  )}
                    {Medical.tet && (  <p className='text-left mb-2'><b> cuir chevelu: </b> {Medical.tet} </p>  )}
                    {Medical.muqueuses && ( <p className='text-left mb-2'><b> muqueuses: </b>{Medical.muqueuses}  </p>  )}
                    {Medical.gale && (  <p className='text-left mb-2'><b> recherche de gale: </b> {Medical.gale} </p>
            
                    )}
            
            
                    {Medical.sousgueule && ( <> <p className='text-left mb-2'><b> 7) Aires gonglionnaires: </b> </p>
     <p className='text-left mb-2'><b> sous_maxilliares: </b> {Medical.sousgueule} </p> </>  )}  
     {Medical.clavicule && (  <p className='text-left mb-2'><b> sus-claviculaires: </b>{Medical.clavicule} </p>  )}  
     {Medical.Bequilles && ( <p className='text-left mb-2'><b> axillaires: </b>  {Medical.Bequilles}  </p>  )}  
     {Medical.cuisse && (  <p className='text-left mb-2'><b>  Inguinales: </b> {Medical.cuisse} </p>
     )}  
            
     {Medical.pr && ( <> <p className='text-left mb-2'><b> 8) Examen sanguin: </b> </p>
     <p className='text-left mb-2'><b>  glycémie: </b>{Medical.Glycemie}  </p> </> )}
     {Medical.VDRL && (  <p className='text-left mb-2'><b>  V.D.R.L - T.P.H.A: </b> {Medical.VDRL} </p>)}
     {Medical.NFS && (  <p className='text-left mb-2'><b>  N.F.S: </b> {Medical.NFS} </p>)}
     {Medical.Hepatite && (  <p className='text-left mb-2'><b>  hepatite B.C: </b>{Medical.Hepatite}  </p>)}
     {Medical.HIV && (  <p className='text-left mb-2'><b>  H.I.V: </b>{Medical.HIV}  </p>
     )}
     {Medical.BCG && ( <> <p className='text-left mb-2'><b> 9) Etat vaccinal: </b> </p>
     <p className='text-left mb-2'><b> B.C.G: </b>{Medical.BCG}  </p></> )}
     {Medical.tetanos && (  <p className='text-left mb-2'><b> Tétanos: </b>{Medical.tetanos}  </p> )}
    
     {Medical.Vaccin && ( <> <p className='text-left mb-2'><b> 9) R.O.R : </b> {Medical.Vaccin} </p>
    
    
    
     <p className='text-left mb-2'><b> Conclusion général: sur l'etat de santé du santé </b> </p> <p className='text-left mb-2 ml-10'><b> 
          Date et Signature du médecin traitant :
            </b> </p> </>)}
            
    
            {Medical.file && ( <img src={`${process.env.PUBLIC_URL}/images/${Medical.file}`} alt="Certificate" />)}

          
           
    </div>
    </div>
                    ))}
    </div>
    </div>
    </div>

    </div>
    </div>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

   </div>
   </div>
   </div>
  )
}

export default AffichageDossierMedical;