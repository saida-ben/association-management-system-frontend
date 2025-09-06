import React, {useEffect} from 'react'
import {Logo} from 'react-router-dom'
import ImageOne from '../../components/img/logo daratfal.png';
import { useStateContext } from '../../contexts/ContextProvider';
import {Link} from 'react-router-dom';

const AffichageDemande = () => {
 const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
 const [Demand, setDemand] =React. useState([]);
 const urlParams = new URLSearchParams(window.location.search);
const num = urlParams.get('id');
const nom = urlParams.get('nom');
const prenomT = urlParams.get('prenomT');
const nomT = urlParams.get('nomT');
const prenom = urlParams.get('prenom');

const dateCin = urlParams.get('dateCin');
const cinT = urlParams.get('cinT');
const MoyenneSc = urlParams.get('MoyenneSc');
const adress = urlParams.get('adress');
const institut = urlParams.get('institut');
const autreR = urlParams.get('autreR');
const DatE = urlParams.get('DatE');
const lieuE = urlParams.get('lieuE');
const role = urlParams.get('role');
const nomRole = urlParams.get('nomRole');
const raison = urlParams.get('raison');



const Submit = () => {
  window.location.href = `/EnqueteSociale?id=${num}`;
};
const handl = async () => {
  console.log({
    num, nomT, prenomT, cinT, dateCin, adress, role, nomRole, institut, lieuE, DatE, raison, autreR, MoyenneSc, nom, prenom,
  });
  
  try {
    const response = await fetch('http://127.0.0.1:8000/api/demande', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        num, nomT, prenomT, cinT, dateCin, adress, role, nomRole, institut, lieuE, DatE, raison, autreR, MoyenneSc, nom, prenom,
      }),
    });
    
    const data = await response.json();
    console.log(data);
    alert("تم إرسال الطلب إلى المرشد الاجتماعي");
    window.location.href = '/Demande?id=1';

   
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetch('http://localhost:8000/api/affd')
    .then(response => response.json())
    .then(data => {
      setDemand(data);
    })
    .catch(error => console.error(error));
}, []);
 return (
  <div class=" py-1 bg-blueGray-50">
   
  <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
  


<a style={{
  backgroundColor: currentColor ,
  }} onClick={handl} className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
    إرسال إلى المرشد الاجتماعي
</a>

<div  key={Demand.num} class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
  
  <span className="mb-2 mt-10 text-gray-900 dark:text-white text-center"> نمودج رقم {num}  </span>
  <span className="mb-8 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white text-center">طلب التسجيل</span>
  
         
  <div >

                </div>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">  :أنا الموقع أسفله </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">  {prenomT}    {nomT}   </span>

            <span class="inline-grid">
            <span className='mb-8 right-4 mr-10 absolute font-semibold'> : الحامل لبطاقة التعريف الوطنية </span>
            
            <span className='mb-8 right-4 mr-10 absolute font-semibold mt-10'> {cinT}</span>

            <span className='mb-8 ml-80 font-semibold'> : صالحة إلى غاية</span>
            <span className='mb-8 ml-80 font-semibold'> {dateCin}</span>
            </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">: الساكن ب </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">{adress}</span>

            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">  {nomRole} بصفته  :  {role}     </span>

            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">     أطلب منكم تسجيل الطفل  {nom}  {prenom}  </span> 
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">     بمؤسسة    {institut}</span>

            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">  نظرا ل   {raison}  </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">  {MoyenneSc}  : المعدل  </span>
           
            

            <span class="inline-grid">
            <span className='mb-4 left-80 absolute font-semibold'>    حرر ب :{lieuE} </span>           
            <span className='mb-4 ml-40 font-semibold'>  {DatE}  : بتاريخ  </span>
 </span>           
            <span className=" font-semibold text-gray-900 dark:text-white text-left mt-2 mb-14 ml-60">:إمضاء</span>

    </div>
   
   
   
    </div> 
    
    </div>









      
  
  )
}

export default AffichageDemande
